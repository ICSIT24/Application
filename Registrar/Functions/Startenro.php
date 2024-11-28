<?php
// Include the database connection and the fetch_students function
include('C:/xampp/htdocs/ICSIT24/Application/db_connection.php');

// Check if the form was submitted via POST request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $schoolyear = $_POST['schoolyear'];
    $semester = $_POST['semester'];
    
    // Get today's date in the format YYYY-MM-DD and cast it as a string
    $date = (string) date('Y-m-d');  // Explicitly cast to string

    // Check if there is an ongoing enrollment in the database
    if (isOngoingEnrollment()) {
        // Display error message and do not proceed with insertion
        echo "There is currently an ongoing enrollment.";
    } else {
        // Create the full enrollment ID (schoolyear + semester) as a string
        $enrollment_id = $schoolyear . "-" . $semester;

        // Call the function to execute the stored procedure if no ongoing enrollment
        InsertEnrollment($enrollment_id, $schoolyear, $semester, $date);
        
        // Redirect back to page2.php after successful insertion
        header('Location: /ICSIT24/Application/Registrar/page2.php');
        exit;  // Make sure to exit to prevent further code execution
    }
}

// Function to check if there is an ongoing enrollment in the database
function isOngoingEnrollment() {
    global $conn;

    // Query to check if there is a row with Status = 'Ongoing'
    $query = "SELECT COUNT(*) FROM enrollment WHERE Status = 'Ongoing'";

    // Prepare and execute the query
    $result = $conn->query($query);

    // If the query executes successfully, check if there is an ongoing enrollment
    if ($result) {
        // Fetch the count of rows where Status = 'Ongoing'
        $row = $result->fetch_row();
        if ($row[0] > 0) {
            // If count is greater than 0, it means there is an ongoing enrollment
            return true;
        }
    }
    // If no ongoing enrollment exists, return false
    return false;
}

// Function to call the stored procedure InsertEnrollment
function InsertEnrollment($enrollment_id, $schoolyear, $semester, $date) {
    global $conn;

    // Call the stored procedure (this assumes the stored procedure is already defined in the DB)
    $stmt = $conn->prepare("CALL InsertEnrollment(?, ?, ?, ?)");

    // Bind parameters to the stored procedure (ensure correct order and types)
    $stmt->bind_param("ssss", $enrollment_id, $schoolyear, $semester, $date);

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
