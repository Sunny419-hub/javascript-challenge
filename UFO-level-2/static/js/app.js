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

// Getting a reference to the input element on the page with the id property set to 'input-field' Using multiple input tags to set multiple filters and search for UFO sightings
var inputdatetm = d3.select("#datetime");
var inputcity = d3.select("#city");
var inputstate = d3.select("#state");
var inputcountry = d3.select("#country");
var inputshape = d3.select("#shape");

// We can use d3 to see the object that dispatched the event inline
button.on("click", function() {
    
    tbody.html("");
    var filteredata = data.filter(selectvalues);
        //console.log(filteredata);
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

// Function => Using multiple input tags to set multiple filters and search for UFO sightings

// Create a date/time filtering function
function selectvalues(values) {
    //console.log(input.node().value);
    return values.datetime == inputdatetm.node().value && values.city == inputcity.node().value && values.state == inputstate.node().value &&
    values.country == inputcountry.node().value && values.shape == inputshape.node().value;
}
