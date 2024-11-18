class LeafletMap {
    constructor(containerId, center, zoom) {
        this.map = L.map(containerId).setView(center, zoom);
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
myMap.loadMarkersFromJson('Pins.json');