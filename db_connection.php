<?php
// Database connection details
$servername = "localhost";  // Change to 127.0.0.1 for a more direct connection
$username = "root";         // Your MySQL username (root is default in XAMPP)
$password = "";             // Your MySQL password (empty by default in XAMPP)
$dbname = "student_evaluation_systems";  // Your database name (ensure this is correct)

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
