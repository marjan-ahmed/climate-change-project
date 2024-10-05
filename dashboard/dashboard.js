// Real-time search suggestions
const locationInput = document.getElementById('location');
const suggestionsContainer = document.getElementById('suggestions');

locationInput.addEventListener('input', async () => {
    const query = locationInput.value;

    if (query.length > 0) {
        const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${query}&key=YOUR_OPENCAGE_API_KEY`); // Replace with your OpenCage API key
        const results = response.data.results;

        // Clear previous suggestions
        suggestionsContainer.innerHTML = '';

        // Populate suggestions
        results.forEach(result => {
            const li = document.createElement('li');
            li.textContent = result.formatted_address;
            li.onclick = () => {
                locationInput.value = result.formatted_address; // Set input value to selected suggestion
                suggestionsContainer.innerHTML = ''; // Clear suggestions
            };
            suggestionsContainer.appendChild(li);
        });
    } else {
        suggestionsContainer.innerHTML = ''; // Clear suggestions if input is empty
    }
});
