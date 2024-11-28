<?php
// Start the session
session_start();

// Include database connection
include __DIR__ . '/../../db_connection.php';

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize input to prevent SQL injection
    $username = $_POST['eval-id'];
    $password = $_POST['password'];

    // Check if both fields are filled
    if (!empty($username) && !empty($password)) {
        // Query the database to check the username and password
        $query = "SELECT * FROM eval_acc WHERE Username = ? AND Password = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ss", $username, $password);
        $stmt->execute();
        $result = $stmt->get_result();

        // If login is successful
        if ($result->num_rows > 0) {
            $_SESSION['username'] = $username;  // Store username in session

            // Redirect to page1.php
            header("Location: http://localhost/ICSIT24/Application/Evaluator_interface/page1.php");
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
