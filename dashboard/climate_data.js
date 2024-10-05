const climateDataApiKey = 'YOUR_CLIMATE_DATA_API_KEY'; // Replace with your climate data API key

// Function to fetch climate data based on user input
async function fetchClimateData(location, gasType) {
    const response = await axios.get(`https://api.climate-data.org/v1/data/${location}/?type=${gasType}`, {
        headers: {
            'Authorization': `Bearer ${climateDataApiKey}`,
        },
    });

    return response.data; // Assuming API returns JSON data
}

// Fetch climate data and display summary
async function showSummary(location, gasType) {
    try {
        const data = await fetchClimateData(location, gasType);
        const summaryElement = document.getElementById('summary');
        
        // Clear the summary element
        summaryElement.innerHTML = '';

        if (data) {
            summaryElement.innerHTML = `
                <h2>Climate Change Summary for ${location}</h2>
                <p>CO2 Levels: ${data.co2} ppm</p>
                <p>CH4 Levels: ${data.ch4} ppm</p>
                <p>N2O Levels: ${data.n2o} ppm</p>
            `;
            // Update the map with the location
            updateMap(location);
        } else {
            summaryElement.innerHTML = `<p>No data available for ${location}</p>`;
        }
    } catch (error) {
        console.error('Error fetching climate data:', error);
        alert('Error fetching climate data. Please check the console for more information.');
    }
}

// Event listener for show summary button
document.getElementById('show-summary').addEventListener('click', function () {
    const locationInput = document.getElementById('location').value;
    const gasType = document.getElementById('gas-type').value;

    // Show the summary
    showSummary(locationInput, gasType);
});
