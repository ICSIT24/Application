<?php
session_start();  // Start the session to access the logged-in username
include('C:/xampp/htdocs/ICSIT24/Application/db_connection.php');  // Include the database connection

// Ensure user is logged in
if (!isset($_SESSION['username'])) {
    header("Location: login.php"); // Redirect to login page if not logged in
    exit();
}

$username = $_SESSION['username'];  // Get the logged-in username

// Fetch the Course_ID from the eval_acc table
$query = "SELECT Course_ID FROM eval_acc WHERE Username = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $username);
$stmt->execute();
$stmt->bind_result($course_id);
$stmt->fetch();  // Fetch the Course_ID

$stmt->close();  // Close the statement

// If no course is found, you can handle it accordingly
if (!$course_id) {
    $course_id = "No Course Found";
}

// Close the database connection
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>PROJECT EVENT DRIVEN PROGRAMMING</title>
</head>

<body>
    <div class="container">
        <h1>Welcome, <?php echo htmlspecialchars($username); ?>!</h1>
        <div class="table-responsive">
            <table class="table table-bordered">
                <thead class="table-dark">
                    <tr>
                        <th>Course ID:</th>
                        <th>Current Enrollment:</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><?php echo $course_id; ?></td> <!-- Display Course_ID here -->
                        <td>No Enrollment yet</td>
                        <td>
                            <button id="join-button" class="btn btn-primary ms-3 py-1 w-auto" disabled>Join</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
