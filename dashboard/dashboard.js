function updateSummary() {
    const region = document.getElementById('region').value;
    const gas = document.getElementById('gas').value;
    const variable = document.getElementById('variable').value;

    console.log('Region:', region);
    console.log('Gas:', gas);
    console.log('Variable:', variable);

    // Placeholder data, replace with actual API calls or data processing
    const summaryData = {
        'global': {
            'co2': {
                'temperature': 'Global average temperature has increased by 1.1°C since the pre-industrial era.',
                'sea-level': 'Global sea level has risen by about 20 cm since 1900.',
                'emissions': 'Global CO2 emissions reached a record high of 36.44 billion tonnes in 2019.'
            },
            'methane': {
                'temperature': 'Methane contributes to about 16% of global greenhouse gas emissions.',
                'sea-level': 'Methane’s impact on sea level rise is indirect through temperature increase.',
                'emissions': 'Global methane emissions have increased by 150% since 1750.'
            },
            'nitrous-oxide': {
                'temperature': 'Nitrous oxide contributes to about 6% of global greenhouse gas emissions.',
                'sea-level': 'Nitrous oxide’s impact on sea level rise is indirect through temperature increase.',
                'emissions': 'Global nitrous oxide emissions have increased by 20% over the past 30 years.'
            }
        }
        // Add similar data for other regions
    };

    const additionalData = {
        'co2': 'Carbon dioxide (CO₂): A naturally occurring gas, CO₂ is also a byproduct of burning fossil fuels (such as oil, gas, and coal), of burning biomass, of land-use changes (LUCs) and of industrial processes (e.g., cement production). It is the main gas contributing to climate change.',
        'methane': 'Methane (CH₄): A greenhouse gas that is the major component of natural gas and is associated with all hydrocarbon fuels. Significant human-caused methane emissions also occur as a result of some agriculture activities. Methane is also produced naturally where organic matter decays under anaerobic (without oxygen) conditions, such as in wetlands.',
        'nitrous-oxide': 'Nitrous oxide (N₂O): A greenhouse gas that is produced by soil cultivation practices, especially the use of commercial and organic fertilizers, fossil fuel combustion, nitric acid production, and biomass burning.'
    };

    const regionData = summaryData[region];
    const gasData = regionData ? regionData[gas] : null;
    const summary = gasData ? gasData[variable] : 'No data available for the selected options.';
    const gasInfo = additionalData[gas] ? additionalData[gas] : '';

    console.log('Summary:', summary);
    document.getElementById('summary-content').innerHTML = `<p>${summary}</p><p>${gasInfo}</p>`;
}
