<?php
// Include database connection
include('C:/xampp/htdocs/ICSIT24/Application/db_connection.php');

// Initialize error message
$login_error = "";

// Handle login logic when form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form values
    $username = $_POST['student-id'];  // Evaluator ID (Student ID)
    $password = $_POST['password'];    // Password

    // Validate inputs
    if (empty($username) || empty($password)) {
        $login_error = "Please enter both username and password.";
    } else {
        // Prepare SQL query to check if username and password match in eval_acc table
        $query = "SELECT * FROM eval_acc WHERE Username = ? AND Password = ?";
        $stmt = $conn->prepare($query);
        
        // Bind parameters to the query
        $stmt->bind_param("ss", $username, $password);

        // Execute the query
        $stmt->execute();
        $result = $stmt->get_result();

        // Check if any row was returned
        if ($result->num_rows > 0) {
            // Successful login: Start session and store the username
            session_start();
            $_SESSION['username'] = $username;  // Store the username in session

            // Redirect to page1.php
            header("Location: page1.php");
            exit(); // Prevent further execution
        } else {
            // Invalid credentials
            $login_error = "Invalid username or password.";
        }

        // Close the statement
        $stmt->close();
    }
}

// Close the database connection
$conn->close();
?>
