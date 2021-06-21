// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");
// Console.log the data from data.js
//console.log(data);

// // Use d3 to update each cell's text with
data.forEach(function(UFOinfo) {
    //console.log(UFOinfo);
    var row = tbody.append("tr");
    Object.entries(UFOinfo).forEach(function([key, value]) {
      //console.log(key, value);
 //     // Append a cell to the row for each value
 //     // in the object
      var cell = row.append("td");
      cell.text(value);
    });
  });
 // Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'
var input = d3.select("#datetime");
// We can use d3 to see the object that dispatched the event inline
button.on("click", function() {
    
    tbody.html("");
    var filteredata = data.filter(selectdatetime);
    console.log(filteredata);
    filteredata.forEach(function(UFOinfo) {
        //console.log(UFOinfo);
        var row = tbody.append("tr");
        Object.entries(UFOinfo).forEach(function([key, value]) {
          //console.log(key, value);
     //     // Append a cell to the row for each value
     //     // in the object
          var cell = row.append("td");
          cell.text(value);
        });
      });
  });
// Create a custom filtering function
function selectdatetime(datetm) {
    console.log(input.node().value);
    return datetm.datetime == input.node().value;
}