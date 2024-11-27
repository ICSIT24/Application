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


    <title>PROJECT EVENT DRIVEN PROGRAMMING</title>

</head>

<body>
    <div id="navbar-container"></div>
    <!--Aside-->

    <div style="display: flex;">
    <div id="sidebar-container"></div>
      

        <!--Table-->

        <div class="con-table" style="flex-grow: auto; margin:2rem">

            <div class="combo-box2">

                <a href="contact.html" class="button3"><Data>Archive Enrollment</Data></a>

            </div>



            <table class="table">
                <tr class="label">
                    <!--Row Label-->
                    <th class="col2">Enrollment</th>
                    <th class="col2">Semester</th>
                    <th class="col2">Date</th>
                    <th class="col2">Enrollees</th>
                   
                </tr>
                <!--Row Contents-->
                <tr>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
               
                </tr>
            </table>

        </div>

        <form class="form-info" style="flex-grow: 1;">
            <div class="margin-top">
                <label for="firstname">School Year</label>
                <button class="sep-button" type="submit">Start</button>
                <input type="text" id="schoolyear" name="schoolyear" required>

                <label for="middlename">Semester</label>
                <select class="input2" id="semester" name="semester" required>
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                    <option value="3">Semester 3</option>
                </select>
                <input type="text" id="plainfield" name="plainfield" required>

                <label for="birthday">Enrollment Day</label>
                <input type="date" id="Enrollment" name="Enrollment" required>
                <input type="text" id="plainfield" name="plainfield" required>

            </div>
        </form>

    </div>
</body>
<script src="RegNav.js"></script>
<script src="SideNav.js"></script>
</html>