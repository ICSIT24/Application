<?php
include('./Functions/Fetcher.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Bootstrap Libraries Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
    <!-- Custom CSS (ensure this path is correct based on your file structure) -->
    <link rel="stylesheet" href="path_to_your_css/login-style.css"> <!-- Change the path as needed -->

    <!-- Bootstrap JS bundle (ensure it's included after Bootstrap CSS) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

    <title>PROJECT EVENT DRIVEN PROGRAMMING</title>
</head>

<body>
    <!-- Your Custom Navbar (Navbar retained here) -->
    <div id="navbar-container">
        <!-- Navbar will be handled by RegNav.js -->
    </div>

    <!-- Main Container -->
    <div class="d-flex vh-100">

        <!-- Main Content Section (Table) -->
        <div class="flex-grow-1 p-3">
            <!-- Row with First Table section -->
            <div class="d-flex justify-content-center">
                <!-- Table Section with scrollbars -->
                <div class="table-responsive flex-fill" style="max-height: 500px; overflow-y: auto; width: 100%;">
                    <table class="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Course ID:</th>
                                <th>Current Enrollment:</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><?php echo $course_id; ?></td> <!-- Dynamically displaying Course_ID -->
<td><?php echo $enrollment_id; ?></td> <!-- Dynamically displaying Enrollment_ID -->
<td>
    <!-- Button: Join (Disabled by default or enabled based on enrollment ID) -->
    <button id="join-button" class="btn btn-primary ms-3 py-1 w-auto" <?php echo $join_button_disabled; ?>>Join</button>
</td>
                            </tr>
                            <!-- More rows can be dynamically added here -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Row with Second Table section (placed below the first table) -->
            <div class="d-flex justify-content-center mt-4">
                <!-- Table Section with scrollbars -->
                <div class="table-responsive flex-fill" style="max-height: 500px; overflow-y: auto; width: 100%;">
                    <table class="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <!-- Headers for the second table -->
                                <th>Yearlevel_ID</th>
                                <th>Yearlevel</th>
                                <th>Enrolled_count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Example rows for the second table -->
                            <tr>
                                <td>1</td>
                                <td>Freshman</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Sophomore</td>
                                <td>180</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Junior</td>
                                <td>160</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Senior</td>
                                <td>140</td>
                            </tr>
                            <!-- More rows can be dynamically added here -->
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    </div>

    <!-- Include RegNav.js at the bottom to make sure the navbar script runs correctly -->
    <script src="./Functions/RegNav.js"></script>

</body>

</html>
