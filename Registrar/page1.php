<?php
include('../db_connection.php');
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

    <script src="age.js"></script>
    <title>PROJECT EVENT DRIVEN PROGRAMMING</title>
</head>

<body>
    <!-- Your Custom Navbar with RegNav.js -->
    <div id="navbar-container">
        <!-- Navbar will be handled by RegNav.js -->
    </div>

    <!-- Main Container -->
    <div class="d-flex vh-100">

        <!-- Sidebar Section -->
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
            <!-- Combo Box and Search Section -->
            <div class="d-flex mb-4">
                <input type="text" id="additionalInfo" class="form-control me-2" placeholder="Search..." style="width: 250px;">
                <div class="me-2">
                    <!-- Removed ComboBox with Option1 -->
                </div>
                <div class="me-2">
                    <select id="option" name="option" class="form-select">
                        <option value="fall">Personal Info</option>
                        <option value="fall">Enrollment</option>
                    </select>
                </div>
            </div>

            <!-- Row with Table and Form side by side -->
            <div class="d-flex">
                <!-- Table Section with scrollbars -->
                <div class="table-responsive flex-fill me-3" style="max-height: 500px; overflow-y: auto;">
                    <table class="table table-bordered table-striped">
                        <thead class="table-dark">
                            <tr>
                                <th>Student_ID</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Birthday</th>
                                <th>Email</th>
                                <th>Contact#</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            foreach ($students as $student) {
                                echo "<tr>";
                                echo "<td>" . $student['Student_id'] . "</td>";
                                echo "<td>" . $student['Name'] . "</td>";
                                echo "<td class='age'></td>";  // Placeholder for age
                                echo "<td>" . $student['Birthday'] . "</td>";
                                echo "<td>" . $student['Email'] . "</td>";
                                echo "<td>" . $student['Contact'] . "</td>";
                                echo "<td>" . $student['Status'] . "</td>";
                                echo "</tr>";
                            }
                            ?>
                        </tbody>
                    </table>
                </div>

                <!-- Form Section -->
                <div class="d-flex flex-column w-100" style="max-width: 28%; height: 100%;">
                    <form class="d-flex flex-column" style="overflow-y: auto; max-height: 550px;">
                        <div class="mb-3">
                            <label for="firstname" class="form-label">Firstname</label>
                            <input type="text" id="firstname" name="firstname" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="middlename" class="form-label">Middlename</label>
                            <input type="text" id="middlename" name="middlename" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="lastname" class="form-label">Lastname</label>
                            <input type="text" id="lastname" name="lastname" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" id="email" name="email" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="contact" class="form-label">Contact#</label>
                            <input type="tel" id="contact" name="contact" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="birthday" class="form-label">Birthday</label>
                            <input type="date" id="birthday" name="birthday" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="number" id="age" name="age" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label for="course" class="form-label">Course</label>
                            <input type="text" id="course" name="course" class="form-control" required>
                        </div>

                        <!-- Status ComboBox -->
                        <div class="mb-3">
                            <label for="status" class="form-label">Status</label>
                            <select id="status" name="status" class="form-select" required>
                                <option value="married">MARRIED</option>
                                <option value="single">SINGLE</option>
                            </select>
                        </div>

                        <!-- Register Button -->
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary w-100">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Include RegNav.js at the bottom to make sure the navbar script runs correctly -->
    <script src="RegNav.js"></script>
</body>

</html>
