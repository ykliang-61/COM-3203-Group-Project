(function(){
    // Data
    const vacancyData = [
        { district: "Northern", values: [1.75, 3.50, 5.25] },
        { district: "Tai Po", values: [11.50, 12.50, 13.50] },
        { district: "Eastern", values: [16.56, 19.89, 25.56] },
        { district: "Kwun Tong", values: [17.13, 19.00, 20.57] },
        { district: "Wong Tai Sin", values: [12.00, 14.67, 14.00] },
        { district: "Kowloon City", values: [7.00, 8.25, 10.25] },
        { district: "Kwai Tsing", values: [14.86, 19.29, 24.71] },
        { district: "Islands", values: [6.50, 8.43, 8.86] },
        { district: "Southern", values: [13.60, 18.83, 30.67] },
        { district: "Tsuen Wan", values: [12.20, 12.00, 19.40] },
        { district: "Sha Tin", values: [2.75, 2.50, 4.00] },
        { district: "Sham Shui Po", values: [20.25, 20.33, 12.00] },
        { district: "Tuen Mun", values: [12.00, 7.50, 11.17] },
        { district: "Wan Chai", values: [11.17, 13.50, 15.50] },
        { district: "Sai Kung", values: [8.00, 10.00, 13.00] },
        { district: "Yau Tsim Mong", values: [16.50, 20.17, 22.67] },
        { district: "Yuen Long", values: [16.67, 17.11, 18.22] },
        { district: "Central and Western", values: [10.17, 12.00, 12.17] },
        { district: "Hong Kong", values: [12.64, 14.20, 16.99] }
    ];

    const years = [2022, 2023, 2024];

    const colorScale = d3.scaleOrdinal()
        .domain(vacancyData.map(d => d.district))
        .range([
            '#3182ce', '#805ad5', '#38a169', '#d69e2e', '#e53e3e',
            '#319795', '#d53e4f', '#b7791f', '#44337a', '#742a2a',
            '#4c51bf', '#9f7aea', '#38b2ac', '#ed8936', '#ecc94b',
            '#48bb78', '#0bc5ea', '#4299e1', '#1a365d'
        ]);

    const margin = { top: 60, right: 120, bottom: 80, left: 80 };
    const width = 1000 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    const svg = d3.select("#line-chart")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const x = d3.scalePoint()
        .domain(years)
        .range([0, width])
        .padding(0.5);

    const y = d3.scaleLinear()
        .domain([0, d3.max(vacancyData, d => d3.max(d.values)) * 1.1])
        .range([height, 0]);

    const line = d3.line()
        .x((d, i) => x(years[i]))
        .y(d => y(d))
        .curve(d3.curveMonotoneX);

    // Grid lines
    svg.selectAll(".vertical-grid")
        .data(years)
        .enter()
        .append("line")
        .attr("class", "grid-line")
        .attr("x1", d => x(d))
        .attr("x2", d => x(d))
        .attr("y1", 0)
        .attr("y2", height);

    const yTicks = y.ticks(8);
    svg.selectAll(".horizontal-grid")
        .data(yTicks)
        .enter()
        .append("line")
        .attr("class", "grid-line")
        .attr("x1", 0)
        .attr("x2", width)
        .attr("y1", d => y(d))
        .attr("y2", d => y(d));

    // Axes
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .append("text")
        .attr("class", "axis-label")
        .attr("x", width / 2)
        .attr("y", 45)
        .attr("fill", "#333")
        .style("text-anchor", "middle")
        .text("Year");

    svg.append("g")
        .call(d3.axisLeft(y).tickFormat(d => `${d}%`))
        .append("text")
        .attr("class", "axis-label")
        .attr("transform", "rotate(-90)")
        .attr("x", -height / 2)
        .attr("y", -50)
        .attr("fill", "#333")
        .style("text-anchor", "middle")
        .text("Vacancy Rate (%)");

    const tooltip = d3.select("#tooltip");

    let selectedDistricts = new Set(["Hong Kong"]);

    const checkboxContainer = d3.select("#district-checkboxes");

    // Generate checkboxes
    vacancyData.forEach((districtData, i) => {
        const checkboxItem = checkboxContainer.append("div")
            .attr("class", "checkbox-item");

        const checkbox = checkboxItem.append("input")
            .attr("type", "checkbox")
            .attr("id", `district-${i}`)
            .attr("value", districtData.district)
            .property("checked", districtData.district === "Hong Kong")
            .on("change", function () {
                const district = this.value;
                if (this.checked) {
                    selectedDistricts.add(district);
                } else if (district !== "Hong Kong") {
                    selectedDistricts.delete(district);
                } else {
                    this.checked = true;
                }
                updateChart();
            });

        checkboxItem.append("label")
            .attr("for", `district-${i}`)
            .text(districtData.district)
            .style("color", colorScale(districtData.district))
            .style("font-weight", districtData.district === "Hong Kong" ? "bold" : "normal");
    });

    // Draw chart
    function updateChart() {
        svg.selectAll(".line-path").remove();
        svg.selectAll(".data-point").remove();

        vacancyData.forEach(districtData => {
            if (selectedDistricts.has(districtData.district)) {
                // Line
                svg.append("path")
                    .datum(districtData.values)
                    .attr("class", `line-path ${districtData.district === "Hong Kong" ? "hong-kong-line" : ""}`)
                    .attr("fill", "none")
                    .attr("stroke", colorScale(districtData.district))
                    .attr("stroke-width", districtData.district === "Hong Kong" ? 3.5 : 2)
                    .attr("stroke-opacity", districtData.district === "Hong Kong" ? 1 : 0.8)
                    .attr("d", line);

                // Points
                districtData.values.forEach((value, i) => {
                    svg.append("circle")
                        .attr("class", "data-point")
                        .attr("cx", x(years[i]))
                        .attr("cy", y(value))
                        .attr("r", 4)
                        .attr("fill", colorScale(districtData.district))
                        .attr("stroke", "white")
                        .attr("stroke-width", 1.5)
                        .on("mouseover", function (event) {
                            tooltip.style("opacity", 1)
                                .html(`
                                    <h3>${districtData.district}</h3>
                                    <p><strong>Year:</strong> ${years[i]}</p>
                                    <p><strong>Vacancy Rate:</strong> ${value.toFixed(2)}%</p>
                                    ${districtData.district === "Hong Kong" ? '<p><em>Hong Kong Overall Average</em></p>' : ''}
                                `)
                                .style("left", (event.pageX + 15) + "px")
                                .style("top", (event.pageY - 350) + "px");

                            d3.select(this)
                                .transition()
                                .duration(200)
                                .attr("r", 6);
                        })
                        .on("mouseout", function () {
                            tooltip.style("opacity", 0);
                            d3.select(this)
                                .transition()
                                .duration(200)
                                .attr("r", 4);
                        });
                });
            }
        });
    }

    // Init
    updateChart();

    // Title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", -25)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-weight", "bold")
        .style("fill", "#1a365d")


    // Control functions 
    window.selectAllDistricts = function() {
        vacancyData.forEach(d => {
            selectedDistricts.add(d.district);
            d3.select(`input[value="${d.district}"]`).property("checked", true);
        });
        updateChart();
    }

    window.deselectAllDistricts = function() {
        selectedDistricts.clear();
        selectedDistricts.add("Hong Kong");
        vacancyData.forEach(d => {
            if (d.district !== "Hong Kong") {
                d3.select(`input[value="${d.district}"]`).property("checked", false);
            }
        });
        updateChart();
    }

    window.resetToDefault = function() {
        window.deselectAllDistricts();
    }
})();
