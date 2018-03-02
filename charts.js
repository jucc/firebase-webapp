const dataset = [10, 20, 30, 25, 15];

d3.select(".title").style("color", "grey"); 

d3.select("#tableContainer")
  .selectAll("p")
  .data(dataset)
  // if there were any "p"s in the div, their texts could be set here
  .enter() // outputs all the data that is not yet attached to a DOM element
  .append("p")
  .text(function(d){return d})


const width = 300;
const height = 300;
const cl_turq = "rgba(22, 187, 151, 0.87)"

var svg = d3.select("#svgcontainer")
     .append("svg")
     .attr("width", width)
     .attr("height", height);

var g = svg.append("g");

g.append("line")
   .attr("x1", 100)
   .attr("y1", 200)
   .attr("x2", 200)
   .attr("y2", 100)
   .style("stroke", cl_turq)
   .style("stroke-width", 2);

g.append("ellipse")
   .attr("cx", 200)
   .attr("cy", 50)
   .attr("rx", 100)
   .attr("ry", 50)
   .attr("fill", cl_turq)
   .attr("transform", "translate(90, -80) rotate(45)")

g.attr("transform", "rotate(-15) translate(-80, 90)")


tester = document.getElementById('chartContainer');
Plotly.plot( tester, [{
x: [1, 2, 3, 4, 5],
y: [1, 2, 4, 8, 16] }], {
margin: { t: 0 } } );