<?php
// Include PHP script to handle login logic
include('./Functions/script.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Bootstrap Libraries Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

    <!-- Reference your custom CSS file -->
    <link rel="stylesheet" href="styles.css">

    <title>PROJECT EVENT DRIVEN PROGRAMMING</title>
</head>

<body>
    <div class="login-container">
        <div class="login-card">
            <h5>Student Enrollment Evaluation</h5>
            <img src="./images/nbsc-logo.png" alt="School Logo" class="school-logo">
            
            <!-- Form starts here -->
            <form action="" method="POST" onsubmit="return validateLogin()">
                <div class="form-group">
                    <label for="eval-id">Evaluator ID:</label>
                    <input type="text" id="eval-id" name="eval-id" class="form-control" required>
                </div>

                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" class="form-control" required>
                </div>

                <div class="form-group form-check">
                    <input type="checkbox" id="show-password" onclick="togglePasswordVisibility()" class="form-check-input">
                    <label for="show-password" class="form-check-label">Show Password</label>
                </div>

                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>

    <!-- Add the script reference here -->
    <script src="./Functions/script.php"></script>
</body>
</html>