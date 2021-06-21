// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the data from data.js
console.log(data);

// // Use d3 to update each cell's text with
data.forEach(function(UFOinfo) {
    console.log(UFOinfo);
    var row = tbody.append("tr");
    Object.entries(UFOinfo).forEach(function([key, value]) {
      console.log(key, value);
 //     // Append a cell to the row for each value
 //     // in the object
      var cell = row.append("td");
      cell.text(value);
    });
  });
 // Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#click-me");
// We can use d3 to see the object that dispatched the event inline
button.on("click", function() {
    console.log("Hi, a button was clicked!");
    console.log(d3.event.target);
  });
  