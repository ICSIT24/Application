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
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32],
        });

        const marker = L.marker([lat, lng], { icon }).addTo(this.map);

        // Bind a popup to the marker
        const popupContent = (status === 'blue') ? "Here Next" : classroom;
        marker.bindPopup(popupContent);

        // Automatically open the popup if the pin color is blue
        if (status === 'blue') {
            marker.openPopup();
        }
    }

    // Updates the next status to "Next" if the current one is "Signed"
    updateClearanceStatus(clearanceData) {
        const clearanceOrder = ["SAS", "ASO", "Medical", "Evaluator", "Billing", "Registrar"];
        for (let i = 0; i < clearanceOrder.length; i++) {
            const currentStatus = clearanceOrder[i];
            const nextStatus = clearanceOrder[i + 1];

            if (clearanceData[currentStatus] === "Signed" && nextStatus) {
                if (clearanceData[nextStatus] === "Unsigned" || !clearanceData[nextStatus]) {
                    clearanceData[nextStatus] = "Next";
                }
            }
        }
    }

    loadMarkers() {
        // Step 1: Get the logged-in student from localStorage
        const loggedInStudent = JSON.parse(localStorage.getItem('loggedInStudent'));
        if (!loggedInStudent) {
            console.log("No student logged in");
            return;
        }

        // Step 2: Fetch the clearance data from localStorage for the logged-in student
        const storedStudents = JSON.parse(localStorage.getItem('students'));
        const student = storedStudents.find(s => s.studentId === loggedInStudent.studentId);

        if (!student) {
            console.log("Student not found in clearance data");
            return;
        }

        const clearanceData = student.clearanceData || {};

        // Step 3: Update the clearance statuses
        this.updateClearanceStatus(clearanceData);

        // Save the updated clearance data back to localStorage
        student.clearanceData = clearanceData;
        localStorage.setItem('students', JSON.stringify(storedStudents));

        // Step 4: Define the marker data based on clearance status
        const markers = [
            { latitude: 8.3605454, longitude: 124.8675960, classroom: "SAS", status: clearanceData.SAS || 'Next' },
            { latitude: 8.359179, longitude: 124.868468, classroom: "Clinic", status: clearanceData.Medical || 'Next' },
            { latitude: 8.3604764, longitude: 124.86752632, classroom: "ASO", status: clearanceData.ASO || 'Next' },
            { latitude: 8.3596696, longitude: 124.8691893, classroom: "IT Evaluation and Dean", status: clearanceData.Evaluator || 'Next' },
            { latitude: 8.3609328, longitude: 124.8694682, classroom: "Billing", status: clearanceData.Billing || 'Next' },
            { latitude: 8.3593220, longitude: 124.8691061, classroom: "Registrar", status: clearanceData.Registrar || 'Next' }
        ];

        // Step 5: Loop through and add markers based on student clearance status
        markers.forEach(marker => {
            this.addMarker(marker.latitude, marker.longitude, marker.classroom, this.getPinColor(marker.status));
        });
    }

    // Get pin color based on clearance status
    getPinColor(status) {
        switch (status) {
            case 'Signed':
                return 'green';
            case 'Next':
                return 'blue';
            case 'Unsigned':
                return 'red';
            default:
                return 'red';  // Default to red
        }
    }
}

// Initialize the map and load markers
const myMap = new LeafletMap('map', [8.360004, 124.868419], 18);
myMap.loadMarkers();
