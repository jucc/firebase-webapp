const dataset = [10, 20, 30, 25, 15];

// let bars = d3.select("body")
//              .selectAll("p")
//              .data(dataset)
//              .enter()
//              .append("div")
//              .attr("class", "bar")
//              .style("height", (d) => (d*6 + "px"));

d3.select("#hotdogStatus")
  .style("color", "grey");
  

d3.select(".chart")
  .selectAll("p")
  .data(dataset)
  .text(function(d){return d;})
  .enter()    
  .append("p")
  .text(function(d){return d})