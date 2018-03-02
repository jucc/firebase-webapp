const dataset = [10, 20, 30, 25, 15];

d3.select("#title")
  .style("color", "grey"); 

d3.select(".chart")
  .selectAll("p")
  .data(dataset)
  // if there were any "p"s in the div, their texts could be set here
  .enter() // outputs all the data that is not yet attached to a DOM element
  .append("p")
  .text(function(d){return d})