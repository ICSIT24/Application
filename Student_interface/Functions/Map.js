class LeafletMap {
    constructor(containerId, center, zoom) {
        this.map = L.map(containerId, {
            center: center,
            zoom: zoom,
            dragging: false,           // Disable dragging (panning)
            scrollWheelZoom: false,    // Disable zoom with the mouse wheel
            touchZoom: false,          // Disable zoom on touch devices
            doubleClickZoom: false,    // Disable zoom on double-click
            boxZoom: false,            // Disable zoom with a box selection
            tap: false,                // Disable tap to zoom on mobile devices
            zoomControl: false         // Disable zoom control (buttons)
        });
        this.initTileLayer();
    }

    initTileLayer() {
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);
    }

    addMarker(lat, lng, classroom) {
        const marker = L.marker([lat, lng]).addTo(this.map);
        
        marker.on('click', () => {
            // Store clicked marker in localStorage
            localStorage.setItem('clickedMarker', classroom);
            // Navigate to the classroom page
            window.location.href = 'Classroom.html';
        });
        
        marker.bindPopup(classroom);
    }

    loadMarkersFromJson(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                data.forEach(marker => {
                    this.addMarker(marker.latitude, marker.longitude, marker.classroom);
                });
            })
            .catch(error => console.error('Error loading markers:', error));
    }
}

/* Instantiate for map zoomed coordinates referencing the containerId, center, zoom */
const myMap = new LeafletMap('map', [8.360004, 124.868419], 18);

/* JSON for loading markers */
myMap.loadMarkersFromJson('/ICSIT24/Application/Student_interface/Functions/Pins.json');
