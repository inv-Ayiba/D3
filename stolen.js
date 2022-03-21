console.clear();
const padding = 50;
const h = 650;
const w = 1200;
let dataset;

let svg = d3
  .select("body")
  .attr("id", "body")
  .append("svg")
  .attr("width", w + "px")
  .attr("height", h + "px")
  .attr("id", "chart");

let box = d3
  .select("body")
  .append("div")
  .attr("class", "vis");

let tooltip = box
  .append("div")
  .attr("class", "toolTip")
  .attr("id", "tooltip");

let xScale = d3.scaleTime(
  [new Date("1947-01-01"), new Date("2015-10-01")],
  [padding, w - padding]
);

let yScale = d3.scaleLinear(
  [18100, 0], 
  [padding, h - padding]
);

let xAxis = d3.axisBottom(xScale);
let yAxis = d3.axisLeft(yScale);

svg
  .append("g")
  .attr("id", "x-axis")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .call(xAxis);

svg
  .append("g")
  .attr("id", "y-axis")
  .attr("transform", "translate(" + padding + ", 0)")
  .call(yAxis);

fetch(
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
)
  .then((res) => res.json())
  .then((res) => {
    dataset = res.data;
    drawChart();
  });

function drawChart() {
  svg
    .selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
  .attr("data-date", (d) => d[0])
    .attr("data-gdp", (d) => d[1])
    .attr("x", (d) => xScale(new Date(d[0])))
    .attr("y", (d) => yScale(d[1]))
    .attr("width", 4)
    .attr("height", (d) => h - yScale(d[1]) - padding)
    .attr("class", "bar")
    
    .on("mouseover", (d) =>
      tooltip
        .style("display", "inline-block")
        .html("Date: " + d[0])
        .attr("data-date", d[0])
    )
    .on("mouseout", (d) => tooltip.style("display", "none"))
    .append("title")
    .text((d) => d[1]);
}
