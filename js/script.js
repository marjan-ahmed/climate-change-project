// Fetching data from CSV
fetch('data/ghg_center_data.csv')
    .then(response => response.text())
    .then(data => {
        const parsedData = parseCSV(data);
        createLineChart(parsedData);
    })
    .catch(error => console.error('Error fetching the data:', error));

// Function to parse CSV data
function parseCSV(data) {
    const lines = data.split('\n').slice(1); // Remove header
    const labels = [];
    const co2Levels = [];
    
    lines.forEach(line => {
        const [year, co2] = line.split(',');
        if (year && co2) {
            labels.push(year.trim());
            co2Levels.push(parseFloat(co2));
        }
    });
    
    return { labels, co2Levels };
}

// Function to create a line chart using Chart.js
function createLineChart(data) {
    const ctx = document.getElementById('co2Chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'CO2 Levels (ppm)',
                data: data.co2Levels,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                tension: 0.1,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'CO2 Levels (ppm)'
                    },
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Year: ${context.label}, CO2: ${context.raw} ppm`;
                        }
                    }
                }
            }
        }
    });
}
