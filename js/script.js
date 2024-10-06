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

const co2Chart = {
    labels: ['2018', '2019', '2020', '2021', '2022'], // Sample years
    o2Levels: [209.5, 209.7, 209.6, 209.8, 209.9] // Sample O2 levels in ppm
};




function createO2Chart(data) {
    const ctx = document.getElementById('o2Chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels, // Year labels for the X-axis
            datasets: [{
                label: 'O2 Levels (ppm)', // Label for the dataset
                data: data.o2Levels, // O2 level data for the Y-axis
                backgroundColor: 'rgba(153, 102, 255, 0.2)', // Background color for the area under the line
                borderColor: 'rgba(153, 102, 255, 1)', // Color of the line
                borderWidth: 2, // Width of the line
                tension: 0.1, // Smoothness of the line
                fill: true, // Fill area under the line
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year' // Title for the X-axis
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10 // Limit the number of ticks on the X-axis
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'O2 Levels (ppm)' // Title for the Y-axis
                    },
                    beginAtZero: true // Start Y-axis at zero
                }
            },
            plugins: {
                legend: {
                    display: true, // Show legend
                    position: 'top' // Position of the legend
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Year: ${context.label}, O2: ${context.raw} ppm`; // Tooltip label formatting
                        }
                    }
                }
            }
        }
    });
}

const o2Data = {
    labels: ['2018', '2019', '2020', '2021', '2022'], // Sample years
    o2Levels: [209.5, 209.7, 209.6, 209.8, 209.9] // Sample O2 levels in ppm
};
// Load your O2 data

createO2Chart(o2Data);

function createMethaneChart(data) {
    const ctx = document.getElementById('methaneChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels, // Year labels for the X-axis
            datasets: [{
                label: 'Methane Levels (ppb)', // Label for the dataset
                data: data.methaneLevels, // Methane level data for the Y-axis
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Background color for the area under the line
                borderColor: 'rgba(255, 99, 132, 1)', // Color of the line
                borderWidth: 2, // Width of the line
                tension: 0.1, // Smoothness of the line
                fill: true, // Fill area under the line
            }]
        },
        options: {
            responsive: true, // Make the chart responsive
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Year' // Title for the X-axis
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10 // Limit the number of ticks on the X-axis
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Methane Levels (ppb)' // Title for the Y-axis
                    },
                    beginAtZero: true // Start Y-axis at zero
                }
            },
            plugins: {
                legend: {
                    display: true, // Show legend
                    position: 'top' // Position of the legend
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Year: ${context.label}, CH₄: ${context.raw} ppb`; // Tooltip label formatting
                        }
                    }
                }
            }
        }
    });
}

// Sample Data
const methaneData = {
    labels: ['2018', '2019', '2020', '2021', '2022'], // Replace with real data
    methaneLevels: [1850, 1860, 1870, 1880, 1890] // Replace with real data
};

// Create the Methane levels chart
createMethaneChart(methaneData);
