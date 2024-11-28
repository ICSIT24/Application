<?php
include('./Functions/Page2tbl.php');
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

    <script src="./Functions/age.js"></script>
    <title>PROJECT EVENT DRIVEN PROGRAMMING</title>

    <!-- Include formValidation.js script -->
    <script src="./Functions/formValidation.js"></script>
</head>

<body>
    <!-- Your Custom Navbar with RegNav.js -->
    <div id="navbar-container">
        <!-- Navbar will be handled by RegNav.js -->
    </div>

    <!-- Main Container -->
    <div class="d-flex vh-100">

        <!-- Sidebar Section (moved from second code) -->
        <div id="sidebar-container" class="bg-dark text-white d-flex flex-column p-3" style="width: 300px;">
            <div class="text-center mb-4">
                <!-- Logo (smaller image) -->
                <img src="./images/nbsc-logo.png" alt="School Logo" class="img-fluid mb-4" style="max-width: 120px;">
            </div>

            <h3 class="h5 text-center">NBSC Registrar</h3>

            <!-- Button Container -->
            <div class="d-flex flex-column w-100 mt-3">
                <a href="page1.php" class="btn btn-light text-dark mb-2">Student Registration</a>
                <a href="page2.php" class="btn btn-light text-dark mb-2">Start Enrollment</a>
                <a href="page6.html" class="btn btn-light text-dark mb-2">Clearance Distribution</a>
                <a href="page9.html" class="btn btn-light text-dark mb-2">Archives</a>
            </div>
        </div>

        <!-- Main Content Section (Table & Form) -->
        <div class="flex-grow-1 p-3">
            <!-- Row with Table and Form side by side -->
            <div class="d-flex">
                <!-- Table Section with scrollbars -->
                <div class="table-responsive flex-fill me-3" style="max-height: 500px; overflow-y: auto;">
                    <table class="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Enrollment</th>
                                <th>Semester</th>
                                <th>Date</th>
                                <th>Enrollees</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            foreach ($enrollment as $enrollments) {
                                echo "<tr>";
                                echo "<td>" . $enrollments['Enrollment_ID'] . "</td>";
                                echo "<td>" . $enrollments['Semester'] . "</td>";
                                echo "<td>" . $enrollments['Enrollment_date'] . "</td>";
                                echo "<td>" . $enrollments['Enrolled_count'] . "</td>";
                                echo "</tr>";
                            }
                            ?>
                        </tbody>
                    </table>
                </div>

                <!-- Form Section -->
                <div class="d-flex flex-column w-100" style="max-width: 28%; height: 100%;">
                    <form id="Enrollementadd" action="./Functions/Startenro.php" method="POST" class="form-info d-flex flex-column" style="overflow-y: auto; max-height: 550px;">
                        <div class="mb-3">
                            <label for="schoolyear" class="form-label">School Year</label>
                            <input type="text" id="schoolyear" name="schoolyear" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="semester" class="form-label">Semester</label>
                            <select class="form-select" id="semester" name="semester" required>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <button class="btn btn-primary" type="submit">Start</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Remove SideNav.js reference (no longer needed) -->
    <!-- Removed <script src="SideNav.js"></script> here -->

    <!-- Include RegNav.js at the bottom to make sure the navbar script runs correctly -->
    <script src="./Functions/RegNav.js"></script>

</body>

</html>
