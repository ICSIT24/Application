<?php
// fetch_students.php

// Include the database connection file
include('C:/xampp/htdocs/ICSIT24/Application/db_connection.php');

// Fetch student data from the database
$sql = "SELECT Enrollment_ID,Semester,Enrollment_date,Enrolled_count FROM enrollment where Status='Ongoing'";
$result = $conn->query($sql);

// Initialize an array to store student data
$enrollment = [];

if ($result->num_rows > 0) {
    // Store each row in the students array
    while ($row = $result->fetch_assoc()) {
        $enrollment[] = $row;
    }
} else {
    // If no data is found, initialize the array as empty
    $enrollment= [];
}

// Close the database connection
$conn->close();
?>
