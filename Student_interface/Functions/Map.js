class LeafletMap {
    constructor(containerId, center, zoom) {
        // Initialize the map with unzoomable and unpannable settings
        this.map = L.map(containerId, {
            center: center,
            zoom: zoom,
            dragging: false, // Disable dragging
            scrollWheelZoom: false, // Disable zooming with mouse wheel
            touchZoom: false, // Disable zooming with touch gestures
            doubleClickZoom: false, // Disable zooming on double click
            boxZoom: false, // Disable zooming with box
            keyboard: false // Disable keyboard zooming
        });
        this.initTileLayer();
    }

    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(this.map);
    }

    addMarker(lat, lng, classroom, status) {
        // Path to your custom marker images based on the status
        const icons = {
            red: 'images/red-location-marker-icon-on-a-white-background-isolated-transparent-png.png', // Custom red marker for unsigned
            green: 'images/3d-realistic-icon-style-green-glossy-location-map-pin-gps-pointer-markers-illustration-for-destination-geo-tag-isolated-transparent-png.png', // Custom green marker
            blue: 'images/bright-blue-location-marker-on-a-white-background-isolated-transparent-png.png', // Custom blue marker for "Next"
        };

        // Create a Leaflet icon with the selected image based on the status
        const icon = L.icon({
            iconUrl: icons[status] || icons.red,  // Default to red if no status is matched
            iconSize: [32, 32],  // Adjust this size if necessary, based on your image dimensions
            iconAnchor: [16, 32], // Anchor the icon at the bottom center
            popupAnchor: [0, -32], // Popup appears above the marker
        });

        // Create a marker with the custom icon and bind a popup
        const marker = L.marker([lat, lng], { icon }).addTo(this.map);
        marker.bindPopup(classroom);
    }

    // Load markers from a JSON source
    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the response to check the data
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.classroom, marker.status);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }
}

// Initialize the map with a center and zoom level
const myMap = new LeafletMap('map', [8.360004, 124.868419], 18);

// Load markers from the provided URL
myMap.loadMarkersFromJson('/ICSIT24/Application/Student_interface/Functions/Pins.php');
