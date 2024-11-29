<?php
session_start(); 
// fetch_students.php

// Include the database connection file
include('C:/xampp/htdocs/ICSIT24/Application/db_connection.php');

// Fetch student data from the database
$sql = "SELECT Student_id, Name, Birthday, Email, Contact, Status FROM stud_inview";
$result = $conn->query($sql);

// Initialize an array to store student data
$students = [];

if ($result->num_rows > 0) {
    // Store each row in the students array
    while ($row = $result->fetch_assoc()) {
        $students[] = $row;
    }
} else {
    // If no data is found, initialize the array as empty
    $students = [];
}

// Close the database connection
$conn->close();
?>
