<?php
// Start the session
session_start();

// Include the database connection
include __DIR__ . '/../../db_connection.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize inputs to prevent SQL injection
    $username = $_POST['student-id'];
    $password = $_POST['password'];

    // Check if both fields are filled
    if (!empty($username) && !empty($password)) {
        // Query to check the username and password
        $query = "SELECT * FROM stud_acc WHERE Student_id = ? AND Password = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $username, $password);
        $stmt->execute();
        $result = $stmt->get_result();

        // If login is successful
        if ($result->num_rows > 0) {
            $_SESSION['username'] = $username;  // Store username in session

            // Redirect to Home.php
            header("Location: http://localhost/ICSIT24/Application/Student_interface/Home.php");
            exit();
        } else {
            echo "Invalid login credentials!";
        }

        $stmt->close();
    } else {
        echo "Please enter both username and password!";
    }
}

// Close the database connection safely
if ($conn) {
    $conn->close();
}
?>
