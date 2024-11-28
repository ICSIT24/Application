<?php
// Start session and include database connection
session_start();
include __DIR__ . '/../../db_connection.php';

// Ensure the session is active and contains the username
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];

    // Fetch Course_ID based on the username
    $query = "SELECT Course_ID FROM eval_acc WHERE Username = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($course_id);
    $stmt->fetch(); // Get the Course_ID

    if (!$course_id) {
        $course_id = "No course found";  // Default if no course found
    }
    $stmt->close();

    // Fetch Enrollment_ID based on Status = 'Ongoing'
    $query_enrollment = "SELECT Enrollment_ID FROM enrollment WHERE Status = 'Ongoing'";
    $stmt_enrollment = $conn->prepare($query_enrollment);
    $stmt_enrollment->execute();
    $stmt_enrollment->bind_result($enrollment_id);
    $stmt_enrollment->fetch();  // Get the Enrollment_ID

    if (!$enrollment_id) {
        $enrollment_id = "No Enrollment yet";  // Default if no enrollment
        $join_button_disabled = 'disabled'; // Disable the button if no enrollment
    } else {
        // If Enrollment_ID is found, enable the button
        $join_button_disabled = ''; // Enable the button
    }

    $stmt_enrollment->close();
} else {
    // If session username is not set, set default values
    $course_id = "No username found in session";
    $enrollment_id = "No Enrollment yet";
    $join_button_disabled = 'disabled'; // Disable the button if no session
}

?>
