<?php
session_start(); 
// Include the database connection and the fetch_students function
include('C:/xampp/htdocs/ICSIT24/Application/db_connection.php');

// Check if the form was submitted via POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstname = $_POST['firstname'];
    $middlename = $_POST['middlename'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $birthday = $_POST['birthday'];
    $status = $_POST['status'];

    // Call the function to execute the stored procedure
    addStudentInfo($firstname, $middlename, $lastname, $birthday, $email, $contact, $status);

    // Redirect back to page1.php after successful insertion
    header('Location: /ICSIT24/Application/Registrar/page1.php');
    exit;  // Make sure to exit to prevent further code execution
}

// Function to call the stored procedure AddStudentInfo
function addStudentInfo($firstname, $middlename, $lastname, $birthday, $email, $contact, $status) {
    global $conn;

    // Convert names to uppercase
    $firstname = strtoupper($firstname);
    $middlename = strtoupper($middlename);
    $lastname = strtoupper($lastname);
    $status = strtoupper($status);

    // Call the stored procedure (this assumes the stored procedure is already defined in the DB)
    $stmt = $conn->prepare("CALL AddStudentInfo(?, ?, ?, ?, ?, ?, ?)");

    // Bind parameters to the stored procedure
    $stmt->bind_param("sssssss", $firstname, $middlename, $lastname, $birthday, $email, $contact, $status);

    // Execute the stored procedure
    if ($stmt->execute()) {
        // Success message will be shown after redirection
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the prepared statement
    $stmt->close();
}
?>
