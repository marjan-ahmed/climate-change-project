// Example dataset (You would replace this with actual data)
const climateData = {
    "north-america": {
        "co2": "North America contributes significantly to CO2 emissions due to transportation, industrial activities, and energy production from fossil fuels. Urban areas face significant emissions from vehicles and heating, while efforts are underway to shift to renewable energy sources.",
        "ch4": "Methane emissions in North America primarily originate from agriculture, particularly livestock farming, as well as natural gas production and landfills. There is an increasing focus on reducing these emissions through better management practices.",
        "n2o": "Nitrous oxide emissions are primarily from agricultural practices, particularly the use of nitrogen-based fertilizers. Efforts to improve soil management and crop rotations are being promoted to mitigate these emissions."
    },
    "europe": {
        "co2": "Europe has implemented several policies aimed at reducing CO2 emissions, resulting in significant decreases in emissions in recent years. The European Union’s Emissions Trading System has been pivotal in this effort.",
        "ch4": "Methane emissions remain a concern, especially in the agricultural sector, with livestock production being a major source. Initiatives to improve livestock management and reduce food waste are being explored.",
        "n2o": "Nitrous oxide emissions are monitored and regulated, with policies in place to promote sustainable agricultural practices that minimize fertilizer use, thus reducing emissions from this sector."
    },
    "asia": {
        "co2": "Asia is the largest emitter of CO2 globally, primarily from coal-fired power plants, rapid industrialization, and increased energy demands. However, there is a growing investment in renewable energy sources across many Asian countries.",
        "ch4": "Methane emissions arise from agricultural activities, waste management, and fossil fuel extraction. Some countries are adopting policies to improve waste management and reduce emissions from agriculture.",
        "n2o": "Nitrous oxide emissions are increasing due to intensive agricultural practices and the use of fertilizers. Efforts to enhance nitrogen management practices are underway in several countries."
    },
    "africa": {
        "co2": "Africa's contribution to CO2 emissions is lower compared to other continents, but it is growing rapidly due to urbanization and industrial growth. Deforestation also contributes significantly to CO2 levels.",
        "ch4": "Methane emissions come from livestock farming, landfills, and rice cultivation. Addressing livestock management practices and enhancing waste treatment facilities can help mitigate these emissions.",
        "n2o": "Nitrous oxide emissions are rising due to agricultural expansion and the use of nitrogen-based fertilizers. Sustainable agricultural practices are being promoted to mitigate these emissions."
    },
    "south-america": {
        "co2": "Deforestation in South America, particularly in the Amazon rainforest, significantly contributes to CO2 emissions. Land-use changes for agriculture and cattle ranching exacerbate this issue.",
        "ch4": "Methane emissions mainly stem from agriculture, particularly livestock, and from landfills. Sustainable farming practices are being encouraged to reduce methane output.",
        "n2o": "Nitrous oxide emissions are increasing, primarily due to the extensive use of agricultural fertilizers. Programs to promote sustainable fertilizer practices are essential in mitigating these emissions."
    },
    "australia": {
        "co2": "Australia is a significant contributor to CO2 emissions, mainly from coal-fired power generation and transportation. Recent policies aim to transition towards cleaner energy sources and reduce reliance on coal.",
        "ch4": "Methane emissions primarily come from agriculture, particularly livestock, as well as landfills. The government is focusing on strategies to manage emissions in the agricultural sector.",
        "n2o": "Nitrous oxide emissions are primarily from agricultural activities, particularly the application of fertilizers. Efforts to implement more efficient farming practices are crucial for reducing these emissions."
    },
    "antarctica": {
        "co2": "Antarctica itself does not significantly contribute to CO2 emissions; however, climate change affects its ice sheets and glaciers, which in turn impacts global sea levels.",
        "ch4": "Methane emissions are negligible in Antarctica due to the extreme environment. However, permafrost thawing in other regions could release trapped methane, influencing global climate patterns.",
        "n2o": "Nitrous oxide emissions in Antarctica are not significant, but changes in global climate can impact nutrient cycling and greenhouse gas emissions in surrounding ecosystems."
    }
};


// Event listener for the button click
document.getElementById('submit-btn').addEventListener('click', function() {
    const selectedRegion = document.getElementById('region').value;
    const selectedGas = document.getElementById('gas-type').value;
    const summary = climateData[selectedRegion][selectedGas];

    // Display the summary
    document.getElementById('summary').innerText = summary;
});
