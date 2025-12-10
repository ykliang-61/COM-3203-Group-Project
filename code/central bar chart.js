// Data
const cwData = [
    { name: 'Queen Street Cooked Food Market', vacancy: 0, isHK: true },
    { name: 'Sheung Wan Market', vacancy: 11, isHK: true },
    { name: 'Smithfield Market', vacancy: 4, isHK: true },
    { name: 'Shek Tong Tsui Market', vacancy: 13, isHK: true },
    { name: 'Average HK Public Market', vacancy: 17, isHK: false }
];

const cwSvg = d3.select('#cw-bar-chart');
const cwMargin = { top: 40, right: 30, bottom: 120, left: 60 };
const container = document.getElementById("cw-bar-chart");
const fullWidth = container.clientWidth;

const cwWidth = fullWidth - cwMargin.left - cwMargin.right;
const cwHeight = 600 - cwMargin.top - cwMargin.bottom;


const cwX = d3.scaleBand()
    .domain(cwData.map(d => d.name))
    .range([0, cwWidth])
    .padding(0.2);

const cwY = d3.scaleLinear()
    .domain([0, d3.max(cwData, d => d.vacancy) + 5])
    .range([cwHeight, 0]);

const cwG = cwSvg.append('g')
    .attr('transform', `translate(${cwMargin.left},${cwMargin.top})`);

// Bars
cwG.selectAll('.cw-bar')
    .data(cwData)
    .enter()
    .append('rect')
    .attr('class', 'cw-bar')
    .attr('x', d => cwX(d.name))
    .attr('y', d => cwY(d.vacancy))
    .attr('width', cwX.bandwidth())
    .attr('height', d => cwHeight - cwY(d.vacancy))
    .attr('fill', d => d.isHK ? 'steelblue' : 'orange');

// Data labels
cwG.selectAll('.cw-label')
    .data(cwData)
    .enter()
    .append('text')
    .attr('class', 'cw-label')
    .attr('x', d => cwX(d.name) + cwX.bandwidth() / 2)
    .attr('y', d => cwY(d.vacancy) - 5)
    .text(d => d.vacancy + '%');

// Axes
cwG.append('g')
    .attr('transform', `translate(0,${cwHeight})`)
    .call(d3.axisBottom(cwX))
    .selectAll('text')
    .attr('text-anchor', 'end')
    .attr('transform', 'rotate(-40)')
    .attr('dx', '-0.5em')
    .attr('dy', '0.5em');

cwG.append('g')
    .call(d3.axisLeft(cwY));

// Axis labels
cwSvg.append('text')
    .attr('class', 'cw-axis-label')
    .attr('x', cwMargin.left + cwWidth / 2)
    .attr('y', cwHeight + cwMargin.top + 100)
    .attr('text-anchor', 'middle')
    .text('Market');

cwSvg.append('text')
    .attr('class', 'cw-axis-label')
    .attr('transform', 'rotate(-90)')
    .attr('x', -cwMargin.top - cwHeight / 2)
    .attr('y', 20)
    .attr('text-anchor', 'middle')
    .text('Vacancy Rate (%)');

    window.addEventListener('resize', () => {
    location.reload();
});
