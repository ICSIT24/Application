<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: ../index.php");  // Redirect if not logged in
    exit();
}

$username = $_SESSION['username'];  // Logged-in student's ID

// Include the database connection
include __DIR__ . '/../../db_connection.php';

// Query to fetch statuses from the enrollment_slip table
$status_query = "SELECT SAS_status, ASO_status, Medical_status, Evaluation_status, Billing_status, Registration_status 
                 FROM enrollment_slip WHERE Student_id = ?";
$status_stmt = $conn->prepare($status_query);
$status_stmt->bind_param("s", $username);
$status_stmt->execute();
$status_stmt->bind_result($SAS_status, $ASO_status, $Medical_status, $Evaluation_status, $Billing_status, $Registration_status);
$status_stmt->fetch();
$status_stmt->close();

// Check and update statuses
if ($SAS_status == 'Signed' && $ASO_status == 'Unsigned') {
    // Update ASO_status to 'Next' if SAS is Signed and ASO is Unsigned
    $update_query = "UPDATE enrollment_slip SET ASO_status = 'Next' WHERE Student_id = ?";
    $update_stmt = $conn->prepare($update_query);
    $update_stmt->bind_param("s", $username);
    $update_stmt->execute();
    $update_stmt->close();
}

if ($ASO_status == 'Signed' && $Medical_status == 'Unsigned') {
    // Update Medical_status to 'Next' if ASO is Signed and Medical is Unsigned
    $update_query = "UPDATE enrollment_slip SET Medical_status = 'Next' WHERE Student_id = ?";
    $update_stmt = $conn->prepare($update_query);
    $update_stmt->bind_param("s", $username);
    $update_stmt->execute();
    $update_stmt->close();
}

if ($Medical_status == 'Signed' && $Evaluation_status == 'Unsigned') {
    // Update Evaluation_status to 'Next' if Medical is Signed and Evaluation is Unsigned
    $update_query = "UPDATE enrollment_slip SET Evaluation_status = 'Next' WHERE Student_id = ?";
    $update_stmt = $conn->prepare($update_query);
    $update_stmt->bind_param("s", $username);
    $update_stmt->execute();
    $update_stmt->close();
}

if ($Evaluation_status == 'Signed' && $Billing_status == 'Unsigned') {
    // Update Billing_status to 'Next' if Evaluation is Signed and Billing is Unsigned
    $update_query = "UPDATE enrollment_slip SET Billing_status = 'Next' WHERE Student_id = ?";
    $update_stmt = $conn->prepare($update_query);
    $update_stmt->bind_param("s", $username);
    $update_stmt->execute();
    $update_stmt->close();
}

if ($Billing_status == 'Signed' && $Registration_status == 'Unsigned') {
    // Update Registration_status to 'Next' if Billing is Signed and Registration is Unsigned
    $update_query = "UPDATE enrollment_slip SET Registration_status = 'Next' WHERE Student_id = ?";
    $update_stmt = $conn->prepare($update_query);
    $update_stmt->bind_param("s", $username);
    $update_stmt->execute();
    $update_stmt->close();
}

// Re-fetch the updated status data from the database
$status_query = "SELECT SAS_status, ASO_status, Medical_status, Evaluation_status, Billing_status, Registration_status 
                 FROM enrollment_slip WHERE Student_id = ?";
$status_stmt = $conn->prepare($status_query);
$status_stmt->bind_param("s", $username);
$status_stmt->execute();
$status_stmt->bind_result($SAS_status, $ASO_status, $Medical_status, $Evaluation_status, $Billing_status, $Registration_status);
$status_stmt->fetch();
$status_stmt->close();

// Define pin colors based on updated statuses
$pins = [
    [
        "latitude" => 8.3605454,
        "longitude" => 124.8675960,
        "classroom" => "SAS",
        "status" => ($SAS_status == 'Unsigned') ? 'red' : ($SAS_status == 'Signed' ? 'green' : 'blue') // Blue for Next
    ],
    [
        "latitude" => 8.359179,
        "longitude" => 124.868468,
        "classroom" => "Clinic",
        "status" => ($Medical_status == 'Unsigned') ? 'red' : ($Medical_status == 'Signed' ? 'green' : 'blue')
    ],
    [
        "latitude" => 8.3604764,
        "longitude" => 124.86752632,
        "classroom" => "ASO",
        "status" => ($ASO_status == 'Unsigned') ? 'red' : ($ASO_status == 'Signed' ? 'green' : 'blue')
    ],
    [
        "latitude" => 8.3596696,
        "longitude" => 124.8691893,
        "classroom" => "IT Evaluation and Dean",
        "status" => ($Evaluation_status == 'Unsigned') ? 'red' : ($Evaluation_status == 'Signed' ? 'green' : 'blue')
    ],
    [
        "latitude" => 8.3609328,
        "longitude" => 124.8694682,
        "classroom" => "Billing",
        "status" => ($Billing_status == 'Unsigned') ? 'red' : ($Billing_status == 'Signed' ? 'green' : 'blue')
    ],
    [
        "latitude" => 8.3593220,
        "longitude" => 124.8691061,
        "classroom" => "Registrar",
        "status" => ($Registration_status == 'Unsigned') ? 'red' : ($Registration_status == 'Signed' ? 'green' : 'blue')
    ]
];

// Send the updated status data to the map
header('Content-Type: application/json');
echo json_encode($pins);

// Close the database connection
if ($conn) {
    $conn->close();
}
?>
