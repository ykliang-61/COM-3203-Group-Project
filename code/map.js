(() => {

// GEOJSON PATH
const geojsonPath = "./code/hkmap_formatted.geojson";  

// DATA FIELD NAME
const vacancyField = "Vacancy Rate";  

// SVG setup
const container = document.getElementById("vacancy-map");
const width = container.clientWidth;
const height = width*0.66;

const svg = d3.select("#vacancy-map")
.append("svg")
.attr("width", width)
.attr("height", height);

// Tooltip
const tooltip = d3.select("#map-tooltip");

// Color scale
const colorScale = d3.scaleLinear()
  .domain([0, 0.4])
.range(["#ffea00ff", "#ff0000ff"]);

// Load GeoJSON
d3.json(geojsonPath).then(data => {

  // Projection
const projection = d3.geoMercator()
    .fitSize([width, height], data);

const path = d3.geoPath().projection(projection);

svg.selectAll("path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("stroke", "#C1E8FF")
    .attr("stroke-width", 1.2)
    .attr("fill", d => {
    const v = d.properties[vacancyField];
    return colorScale(v || 0);
    })
    .on("mouseover", function (event, d) {
    const v = d.properties[vacancyField];
    const name = d.properties.name || "Unknown District";

    tooltip.style("opacity", 1)
        .html(`
        <strong>${name}</strong><br>
          Vacancy Rate: ${(v * 100).toFixed(1)}%
        `);
    })
    .on("mousemove", function (event) {
    tooltip.style("left", (event.offsetX + 20) + "px")
            .style("top", (event.offsetY + 20) + "px");
    })
    .on("mouseout", function () {
    tooltip.style("opacity", 0);
    });
});
})();