class LeafletMap {
    constructor(containerId, center, zoom) {
        this.map = L.map(containerId, {
            center: center,
            zoom: zoom,
            dragging: false,
            scrollWheelZoom: false,
            touchZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            keyboard: false
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
        const icons = {
            red: '../images/red-location-marker-icon-on-a-white-background-isolated-transparent-png.png',
            green: '../images/3d-realistic-icon-style-green-glossy-location-map-pin-gps-pointer-markers-illustration-for-destination-geo-tag-isolated-transparent-png.png',
            blue: '../images/bright-blue-location-marker-on-a-white-background-isolated-transparent-png.png',
        };
        
        const icon = L.icon({
            iconUrl: icons[status] || icons.red,  // Default to red if no status is matched
            iconSize: [32, 32],  // Adjust this size if necessary, based on your image dimensions
            iconAnchor: [16, 32], // Anchor the icon at the bottom center
            popupAnchor: [0, -32], // Popup appears above the marker
        });

        const marker = L.marker([lat, lng], { icon }).addTo(this.map);
        marker.bindPopup(classroom);
    }

    loadMarkers() {
        const markers = [
            { latitude: 8.3605454, longitude: 124.8675960, classroom: "SAS", status: "red" },
            { latitude: 8.359179, longitude: 124.868468, classroom: "Clinic", status: "red" },
            { latitude: 8.3604764, longitude: 124.86752632, classroom: "ASO", status: "red" },
            { latitude: 8.3596696, longitude: 124.8691893, classroom: "IT Evaluation and Dean", status: "red" },
            { latitude: 8.3609328, longitude: 124.8694682, classroom: "Billing", status: "red" },
            { latitude: 8.3593220, longitude: 124.8691061, classroom: "Registrar", status: "red" }
        ];

        markers.forEach(marker => {
            this.addMarker(marker.latitude, marker.longitude, marker.classroom, marker.status);
        });
    }
}

// Initialize the map with a center and zoom level
const myMap = new LeafletMap('map', [8.360004, 124.868419], 18);

// Load static markers with statuses
myMap.loadMarkers();
