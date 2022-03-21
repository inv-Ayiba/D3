// var data = ["12:32", "21:05", "24:56", "36:30", "45:14", "71:11"];
// var specifier = "%M:%S";
// var svg = d3.select("svg");
// var parsedData = data.map(function(d) {
//   return d3.timeParse(specifier)(d)
// });
// var scale = d3.scaleTime()
//   .domain(d3.extent(parsedData))
//   .range([30, 470]);
// var axis = d3.axisBottom(scale)
//   .tickValues(parsedData)
//   .tickFormat(function(d, i) {
//     return data[i]
//   });
// var gX = svg.append("g")
//   .attr("transform", "translate(0,50)")
//   .call(axis)
// <script src="https://d3js.org/d3.v5.min.js"></script>
// <svg width="500" height="100"></svg>

var data = ["12:32", "21:05", "24:56", "36:30", "45:14", "71:11"];
var specifier = "%M:%S";
var svg = d3.select("svg");
var parsedData = data.map(function(d) {
  return d3.timeParse(specifier)(d)
});
var scale = d3.scaleTime()
  .domain(d3.extent(parsedData))
  .range([30, 470]);
var axis = d3.axisBottom(scale)
  .tickValues(parsedData)
  .tickFormat(function(d, i) {
    return data[i]
  });

