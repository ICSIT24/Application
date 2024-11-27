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

    <!-- Additional Libraries Link -->

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>

    <!-- Css and Javacript Link-->

    <Link rel="stylesheet" href="./styles.css">
    <script src="age.js"></script>
    <title>PROJECT EVENT DRIVEN PROGRAMMING</title>

</head>

<body>
    <div id="navbar-container"></div>
    <!--Aside-->
    <div style="display: flex;">
        <div id="sidebar-container"></div>
        <!--Table-->
        <div class="con-table" style="flex-grow: auto; margin:2rem">
            <div class="combo-box3">
                <input type="text" id="additionalInfo" placeholder="">

                <div class="option1" style="margin-left: 1rem;">
                    <label for="option"></label>
                    <select id="option" name="option">
                        <option value="fall">Option1</option>
                    </select>
                </div>

                <div class="option1" style="margin-left: 1rem;">
                    <label for="option"></label>
                    <select id="option" name="option">
                        <option value="fall">Enrollment</option>
                    </select>
                </div>

                <a href="contact.html" class="button2"><Data>Delete</Data></a>

            </div>
            <table class="table">
                <tr class="label">
                    <th class="col2">Student_ID</th>
                    <th class="col2">Name</th>
                    <th class="col2">Age</th>
                    <th class="col2">Birthday</th>
                    <th class="col2">Email</th>
                    <th class="col2">Contact#</th>
                    <th class="col2">Status</th>
                </tr>
            
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
            </table>
        </div>

        <form class="form-info" style="flex-grow: 1;">
            <div class="margin-top">
                <label for="firstname">Firstname</label>
                <button style="padding-top: 1px;height: 2rem;margin-left: 135px; top: 95px; position: absolute;" type="submit">Clear</button>
                <input type="text" id="firstname" name="firstname" required>

                <label for="middlename">Middlename</label>
                <input class="input" type="text" id="middlename" name="middlename" required>

                <label for="lastname">Lastname</label>
                <input type="text" id="lastname" name="lastname" required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>

                <label for="contact">Contact#</label>
                <input type="tel" id="contact" name="contact" required>

                <label for="birthday">Birthday</label>
                <input type="date" id="birthday" name="birthday" required>

                <label for="age">Age</label>
                <input type="number" id="age" name="age" required>

                <label for="course">Course</label>
                <input type="text" id="course" name="course" required>
            </div>
            <button type="submit">Register</button>
        </form>

    </div>
</body>
    <script src="RegNav.js"></script>
    <script src="SideNav.js"></script>
</html>