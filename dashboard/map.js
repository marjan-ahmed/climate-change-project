// Initialize the map
const map = L.map('map').setView([20, 0], 2); // Default initial view

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Function to update the map based on user input location
function updateMap(location) {
    const apiKey = 'a4470dfa0fac4d909865b01b44fe27a0'; // Replace with your OpenCage API key
    const geocodeUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`;

    fetch(geocodeUrl)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                const coordinates = data.results[0].geometry;
                const lat = coordinates.lat;
                const lng = coordinates.lng;

                // Set the map view to the new location
                map.setView([lat, lng], 10);
                L.marker([lat, lng]).addTo(map)
                    .bindPopup(`Location: ${location}`)
                    .openPopup();
            } else {
                alert('Location not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching geocoding data:', error);
            alert('Error fetching location data. Please check the console for more information.');
        });
}
