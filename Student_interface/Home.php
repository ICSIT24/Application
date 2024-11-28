<?php
include('./Functions/Fetcher.php');
?>
<!DOCTYPE html>
<html lang="en" style="background-color: rgb(29, 43, 77);">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Leaflet import -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
    <!-- Bootstrap Libraries Link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <style>
        html, body {
            height: 100%;
            margin: 0;
        }
        #map {
            height: 100%; 
            width: 100%; 
        }
    </style>
</head>
<body>

    <!-- Navbar will be injected here -->
    <div id="navbar"></div>

    <div class="container py-3">
        <h1 style="text-align: center; color:rgb(2, 2, 91);">AXIES</h1>
    </div>

    <!-- Student Information Table -->
    <div class="container my-4">
        <h3 class="text-center text-white mb-4">Student Information</h3>
        <table class="table table-bordered table-striped text-white">
            <thead class="table-dark">
                <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Year Level</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><?php echo htmlspecialchars($username); ?></td> <!-- Student ID -->
                    <td><?php echo htmlspecialchars($name); ?></td> <!-- Student Name -->
                    <td>Freshman</td> <!-- Modify this based on student data -->
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Instruction/Note -->
    <div class="container text-center">
        <h5 style="color:rgb(2, 2, 91); text-size-adjust: 40;">Note on Pins: Blue (start or where to go next), Green (Signed), Red (Not yet Available)</h5>
    </div>

    <!-- Map Container -->
    <div id="map"></div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    
    <!-- Navbar.js Script Reference -->
    <script src="./Functions/RegNav.js"></script>
    <script src="./Functions/Map.js"></script>
</body>
</html>
