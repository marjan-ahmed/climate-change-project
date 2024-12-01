document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-blur');
        } else {
            navbar.classList.remove('navbar-blur');
        }
    });
});

fetch('data/ghg_center_data.csv')
    .then(response => response.text())
    .then(data => {
        const parsedData = parseCSV(data);
        createLineChart(parsedData);
    })
    .catch(error => console.error('Error fetching the data:', error));


function parseCSV(data) {
    const lines = data.split('\n').slice(1);
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
                        label: function (context) {
                            return `Year: ${context.label}, CO2: ${context.raw} ppm`;
                        }
                    }
                }
            }
        }
    });
}

const co2Chart = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    o2Levels: [209.5, 209.7, 209.6, 209.8, 209.9]
};




function createO2Chart(data) {
    const ctx = document.getElementById('o2Chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'O2 Levels (ppm)',
                data: data.o2Levels,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
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
                        text: 'O2 Levels (ppm)'
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
                        label: function (context) {
                            return `Year: ${context.label}, O2: ${context.raw} ppm`;
                        }
                    }
                }
            }
        }
    });
}

const o2Data = {
    labels: [
        '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
        '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
        '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
        '2020', '2021', '2022', '2023', '2024'
    ],
    o2Levels: [
        208.5, 208.9, 209.3, 209.2, 209.1, 209.0, 208.9, 208.8, 208.7, 208.6,
        208.5, 208.4, 208.3, 208.2, 208.1, 208.0, 207.9, 207.8, 207.7, 207.6,
        207.5, 207.4, 207.3, 207.2, 207.1, 207.0, 206.9, 206.8, 206.7, 206.6,
        206.5, 206.4, 206.3, 206.2, 206.1, 206.0, 205.9, 205.8, 205.7, 205.6,
        205.5, 205.4, 205.3, 205.2, 203.1
    ]
};

createO2Chart(o2Data);

function createO2Chart(data) {
    const ctx = document.getElementById('o2Chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'O2 Levels (ppm)',
                data: data.o2Levels,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
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
                        text: 'O2 Levels (ppm)'
                    },
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `Year: ${context.label}, O2: ${context.raw} ppm`;
                        }
                    }
                }
            }
        }
    });
}

const methaneData = {
    labels: [
        '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
        '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
        '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
        '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
        '2020', '2021', '2022', '2023', '2024'
    ],
    methaneLevels: [
        1650, 1660, 1670, 1680, 1690, 1700, 1710, 1720, 1730, 1740,
        1750, 1760, 1770, 1780, 1790, 1800, 1810, 1820, 1830, 1840,
        1850, 1860, 1870, 1880, 1890, 1900, 1910, 1920, 1930, 1940,
        1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030, 2040,
        2050, 2060, 2070, 2080, 2090
    ]
};


createMethaneChart(methaneData);

function createMethaneChart(data) {
    const ctx = document.getElementById('methaneChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: 'Methane Levels (ppb)',
                data: data.methaneLevels,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
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
                        text: 'Methane Levels (ppb)'
                    },
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `Year: ${context.label}, CH₄: ${context.raw} ppb`;
                        }
                    }
                }
            }
        }
    });
}
