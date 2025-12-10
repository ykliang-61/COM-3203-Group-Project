(function(){
// Data
        const marketData = [
            { market: "YUE WAN MARKET", income: 32500, vacancy: 15.00 },
            { market: "CHAI WAN MARKET", income: 32500, vacancy: 19.00 },
            { market: "KUT SHING STREET COOKED FOOD MARKET", income: 32500, vacancy: 18.00 },
            { market: "JAVA ROAD MARKET", income: 32500, vacancy: 31.00 },
            { market: "ELECTRIC ROAD MARKET", income: 32500, vacancy: 40.00 },
            { market: "SAI WAN HO MARKET", income: 32500, vacancy: 9.00 },
            { market: "QUARRY BAY MARKET", income: 32500, vacancy: 51.00, highlight: "red" },
            { market: "NORTH POINT MARKET", income: 32500, vacancy: 19.00 },
            { market: "ALDRICH BAY MARKET", income: 32500, vacancy: 28.00 },
            { market: "BOWRINGTON ROAD MARKET", income: 40800, vacancy: 16.00 },
            { market: "TANG LUNG CHAU MARKET", income: 40800, vacancy: 26.00 },
            { market: "WONG NAI CHUNG MARKET", income: 40800, vacancy: 20.00 },
            { market: "LOCKHART ROAD MARKET", income: 40800, vacancy: 25.00 },
            { market: "WAN CHAI MARKET", income: 40800, vacancy: 2.00 },
            { market: "CAUSEWAY BAY MARKET", income: 40800, vacancy: 4.00 },
            { market: "SHEUNG WAN MARKET", income: 42400, vacancy: 11.00 },
            { market: "SAI YING PUN MARKET", income: 42400, vacancy: 17.00 },
            { market: "CENTRE STREET MARKET", income: 42400, vacancy: 28.00 },
            { market: "SMITHFIELD MARKET", income: 42400, vacancy: 4.00 },
            { market: "SHEK TONG TSUI MARKET", income: 42400, vacancy: 13.00 },
            { market: "QUEEN STREET COOKED FOOD MARKET", income: 42400, vacancy: 0.00 },
            { market: "ABERDEEN MARKET", income: 36000, vacancy: 17.00 },
            { market: "NAM LONG SHAN ROAD COOKED FOOD MARKET", income: 36000, vacancy: 39.00 },
            { market: "TIN WAN MARKET", income: 36000, vacancy: 18.00 },
            { market: "YUE KWONG ROAD MARKET", income: 36000, vacancy: 27.00 },
            { market: "AP LEI CHAU MARKET", income: 36000, vacancy: 3.00 },
            { market: "STANLEY WATERFRONT MART", income: 36000, vacancy: 80.00, highlight: "purple" },
            { market: "TAI O MARKET", income: 31000, vacancy: 8.00 },
            { market: "PENG CHAU MARKET", income: 31000, vacancy: 17.00 },
            { market: "MUI WO MARKET", income: 31000, vacancy: 6.00 },
            { market: "CHEUNG CHAU MARKET", income: 31000, vacancy: 6.00 },
            { market: "MUI WO COOKED FOOD MARKET", income: 31000, vacancy: 0.00 },
            { market: "CHEUNG CHAU COOKED FOOD MARKET", income: 31000, vacancy: 6.00 },
            { market: "FEHD SUNLIGHT MARKET", income: 24200, vacancy: 19.00 },
            { market: "NGAU TAU KOK MARKET", income: 24200, vacancy: 24.00 },
            { market: "SHUI WO STREET MARKET", income: 24200, vacancy: 17.00 },
            { market: "YEE ON STREET MARKET", income: 24200, vacancy: 57.00 },
            { market: "TSUN YIP COOKED FOOD MARKET", income: 24200, vacancy: 5.00 },
            { market: "SZE SHAN STREET COOKED FOOD MARKET", income: 24200, vacancy: 31.00 },
            { market: "TUNG YUEN STREET COOKED FOOD MARKET", income: 24200, vacancy: 0.00 },
            { market: "LEI YUE MUN MARKET", income: 24200, vacancy: 10.00 },
            { market: "TO KWA WAN MARKET", income: 31100, vacancy: 16.00 },
            { market: "KOWLOON CITY MARKET", income: 31100, vacancy: 20.00 },
            { market: "HUNG HOM MARKET", income: 31100, vacancy: 5.00 },
            { market: "ON CHING ROAD FLOWER MARKET", income: 31100, vacancy: 0.00 },
            { market: "NGAU CHI WAN MARKET", income: 25600, vacancy: 17.00 },
            { market: "TAI SHING STREET MARKET", income: 25600, vacancy: 13.00 },
            { market: "SHEUNG FUNG STREET MARKET", income: 25600, vacancy: 12.00 },
            { market: "FA YUEN STREET MARKET", income: 29000, vacancy: 22.00 },
            { market: "MONG KOK COOKED FOOD MARKET", income: 29000, vacancy: 21.00 },
            { market: "TAI KOK TSUI MARKET", income: 29000, vacancy: 7.00 },
            { market: "PO ON ROAD MARKET", income: 24500, vacancy: 21.00 },
            { market: "PEI HO STREET MARKET", income: 24500, vacancy: 10.00 },
            { market: "TUNG CHAU STREET TEMPORARY MARKET", income: 24500, vacancy: 14.00 },
            { market: "LAI WAN MARKET", income: 24500, vacancy: 3.00 },
            { market: "HAIPHONG ROAD TEMPORARY MARKET", income: 29000, vacancy: 25.00 },
            { market: "KWUN CHUNG MARKET", income: 29000, vacancy: 37.00 },
            { market: "YAU MA TEI MARKET", income: 29000, vacancy: 24.00 },
            { market: "WING FONG STREET MARKET", income: 24500, vacancy: 25.00 },
            { market: "KA TING COOKED FOOD MARKET", income: 24500, vacancy: 36.00 },
            { market: "WO YI HOP ROAD COOKED FOOD MARKET", income: 25500, vacancy: 39.00 },
            { market: "NORTH KWAI CHUNG MARKET", income: 25500, vacancy: 20.00 },
            { market: "CHEUNG TAT ROAD COOKED FOOD MARKET", income: 25500, vacancy: 25.00 },
            { market: "KWAI SHUN STREET COOKED FOOD MARKET", income: 25500, vacancy: 18.00 },
            { market: "TSING YI MARKET", income: 25500, vacancy: 10.00 },
            { market: "YEUNG UK ROAD MARKET", income: 34200, vacancy: 16.00 },
            { market: "HEUNG CHE STREET MARKET", income: 34200, vacancy: 6.00 },
            { market: "CHAI WAN KOK COOKED FOOD MARKET", income: 34200, vacancy: 25.00 },
            { market: "TSUEN WAN MARKET", income: 34200, vacancy: 19.00 },
            { market: "SHAM TSENG TEMPORARY MARKET", income: 34200, vacancy: 31.00 },
            { market: "LAM TEI MARKET", income: 26200, vacancy: 14.00 },
            { market: "HUNG CHEUNG COOKED FOOD MARKET", income: 26200, vacancy: 27.00 },
            { market: "KIN WING COOKED FOOD MARKET", income: 26200, vacancy: 0.00 },
            { market: "SAN HUI MARKET", income: 26200, vacancy: 6.00 },
            { market: "YAN OI MARKET", income: 26200, vacancy: 9.00 },
            { market: "TSING YEUNG COOKED FOOD MARKET", income: 26200, vacancy: 11.00 },
            { market: "KAM TIN MARKET", income: 30000, vacancy: 0.00 },
            { market: "LAU FAU SHAN MARKET", income: 30000, vacancy: 36.00 },
            { market: "KIK YEUNG ROAD COOKED FOOD MARKET", income: 30000, vacancy: 0.00 },
            { market: "TAI KIU MARKET", income: 30000, vacancy: 9.00 },
            { market: "TAI TONG ROAD COOKED FOOD MARKET", income: 30000, vacancy: 0.00 },
            { market: "KIN YIP STREET COOKED FOOD MARKET", income: 30000, vacancy: 0.00 },
            { market: "HUNG SHUI KIU TEMPORARY MARKET", income: 30000, vacancy: 55.00 },
            { market: "TUNG YICK MARKET", income: 25800, vacancy: 64.00 },
            { market: "FEHD SKYLIGHT MARKET", income: 25800, vacancy: 0.00 },
            { market: "SHA TAU KOK MARKET", income: 25800, vacancy: 3.00 },
            { market: "SHEK WU HUI MARKET", income: 25800, vacancy: 5.00 },
            { market: "KWU TUNG MARKET SHOPPING CENTRE", income: 25800, vacancy: 9.00 },
            { market: "LUEN WO HUI MARKET", income: 25800, vacancy: 4.00 },
            { market: "TAI PO HUI MARKET", income: 31300, vacancy: 1.00 },
            { market: "PLOVER COVE ROAD MARKET", income: 31300, vacancy: 26.00 },
            { market: "SAI KUNG MARKET", income: 41200, vacancy: 13.00 },
            { market: "SHA TIN MARKET", income: 31000, vacancy: 5.00 },
            { market: "TAI WAI MARKET", income: 31000, vacancy: 4.00 },
            { market: "FO TAN COOKED FOOD MARKET (EAST)", income: 31000, vacancy: 0.00 },
            { market: "FO TAN COOKED FOOD MARKET (WEST)", income: 31000, vacancy: 7.00 }
        ];


// Svg set up
const svg = d3.select("#scatter-plot")
    .append("svg")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .attr("viewBox", "0 0 900 600")
    .classed("svg-content", true);

const margin = { top: 60, right: 120, bottom: 80, left: 80 };
const width = 900 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;

const chart = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);


// Scales
const x = d3.scaleLinear()
    .domain([d3.min(marketData, d => d.income) * 0.95, d3.max(marketData, d => d.income) * 1.05])
    .range([0, width]);

const y = d3.scaleLinear()
    .domain([0, d3.max(marketData, d => d.vacancy) * 1.1])
    .range([height, 0]);


// Trend line calculation
function calculateTrendLine(data) {
    const n = data.length;
    const sumX = d3.sum(data, d => d.income);
    const sumY = d3.sum(data, d => d.vacancy);
    const sumXY = d3.sum(data, d => d.income * d.vacancy);
    const sumX2 = d3.sum(data, d => d.income * d.income);

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    return { slope, intercept };
}

const trend = calculateTrendLine(marketData);
const x1 = d3.min(marketData, d => d.income);
const x2 = d3.max(marketData, d => d.income);
const y1 = trend.slope * x1 + trend.intercept;
const y2 = trend.slope * x2 + trend.intercept;


// Trend line
chart.append("line")
    .attr("x1", x(x1))
    .attr("y1", y(y1))
    .attr("x2", x(x2))
    .attr("y2", y(y2))
    .style("stroke", "#e53e3e")
    .style("stroke-width", 2)
    .style("stroke-dasharray","5.5");


// X-axis
chart.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).tickFormat(d => `HK$${d3.format(",")(d)}`))
    .append("text")
    .attr("x", width / 2)
    .attr("y", 45)
    .attr("fill", "#333")
    .style("text-anchor", "middle")
    .text("Household Income (HKD)");


// Y-axis
chart.append("g")
    .call(d3.axisLeft(y).tickFormat(d => `${d}%`))
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -50)
    .attr("fill", "#333")
    .style("text-anchor", "middle")
    .text("Vacancy Rate (%)");


// Tooltip
const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


// Scatter points
chart.selectAll(".dot")
    .data(marketData)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.income))
    .attr("cy", d => y(d.vacancy))
    .attr("r", 6)
    .style("fill", d => {
        if (d.highlight === "red") return "#e53e3e";
        if (d.highlight === "purple") return "#805ad5";
        return "#3182ce";
    })
    .style("opacity", d => d.highlight ? 0.9 : 0.7)
    .style("stroke", d => {
        if (d.highlight === "red") return "#c53030";
        if (d.highlight === "purple") return "#6b46c1";
        return "#2c5282";
    })
    .style("stroke-width", d => d.highlight ? 2 : 1)
    .on("mouseover", function (event, d) {
        tooltip.transition().duration(200).style("opacity", 0.95);
        tooltip.html(`
            <strong>${d.market}</strong><br/>
            Household Income: HK$${d3.format(",")(d.income)}<br/>
            Vacancy Rate: ${d.vacancy}%
        `)
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 28) + "px");

        d3.select(this).transition().duration(200).attr("r", 8);
    })
    .on("mouseout", function (event, d) {
        tooltip.transition().duration(300).style("opacity", 0);
        d3.select(this).transition().duration(200).attr("r", 6);
    });


        // Label highlighted points
        marketData.filter(d => d.highlight).forEach(d => {
        chart.append("text")
        .attr("x", x(d.income) + 10)
        .attr("y", y(d.vacancy) - 10)
        .text(d.market)
        .style("font-size", "14px")
        .style("fill", d.highlight === "red" ? "#e53e3e" : "#805ad5");
    });


        // Add legend
        const legend = d3.select("#legend");

        const legendItems = [
            { label: "Regular Markets", color: "#3182ce", size: 6 },
            { label: "QUARRY BAY MARKET", color: "#e53e3e", size: 6 },
            { label: "STANLEY WATERFRONT MART", color: "#805ad5", size: 6 },
            { label: "Trend Line", color: "#e53e3e", dash: true }
        ];

        legendItems.forEach(item => {
            const legendItem = legend.append("div").attr("class", "legend-item");

            legendItem.append("div")
                .attr("class", "legend-color")
                .style("background-color", item.color)
                .style("border", item.dash ? "2px dashed #e53e3e" : "none")
                .style("width", item.dash ? "20px" : `${item.size * 2}px`)
                .style("height", item.dash ? "0" : `${item.size * 2}px`)
                .style("border-radius", item.dash ? "0" : "50%");

            legendItem.append("span")
                .text(item.label)
                .classed("highlight-market", item.label.includes("QUARRY BAY") || item.label.includes("STANLEY"));
        });


        // Calculate statistics
        const avgIncome = d3.mean(marketData, d => d.income);
        const avgVacancy = d3.mean(marketData, d => d.vacancy);
        const totalMarkets = marketData.length;
        const highlightedMarkets = marketData.filter(d => d.highlight).length;


        // Update statistics display
        document.getElementById("avg-income").textContent = `HK$${d3.format(",")(Math.round(avgIncome))}`;
        document.getElementById("avg-vacancy").textContent = `${avgVacancy.toFixed(1)}%`;
        document.getElementById("total-markets").textContent = totalMarkets;
        document.getElementById("highlighted-markets").textContent = highlightedMarkets;


        // Add chart title
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", -25)
            .attr("text-anchor", "middle")
            .style("font-size", "18px")
            .style("font-weight", "bold")
            .style("fill", "#1a365d")
            .text("Hong Kong Markets: Household Income vs Vacancy Rate (2024)");


        // Add trend line label
        svg.append("text")
            .attr("x", x(x2) - 10)
            .attr("y", y(y2) - 10)
            .attr("text-anchor", "end")
            .style("font-size", "12px")
            .style("fill", "#e53e3e")
            .style("font-style", "italic")
            .text("Trend Line");
    })();