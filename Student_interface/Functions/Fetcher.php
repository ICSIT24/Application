<?php
session_start();

if (!isset($_SESSION['username'])) {
    header("Location: ../index.php");
    exit();
}

$username = $_SESSION['username'];

include __DIR__ . '/../../db_connection.php';

$query = "SELECT CONCAT(Firstname, ' ', Middlename, ' ', Lastname) AS Name FROM stud_info WHERE Student_id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($name);
$stmt->fetch();
$stmt->close();

$username_safe = isset($username) ? htmlspecialchars($username) : 'Unknown User';
$name_safe = isset($name) ? htmlspecialchars($name) : 'Unknown Name';
?>