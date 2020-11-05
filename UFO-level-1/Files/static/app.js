var ufoTable = d3.select("#ufo-table");
var tBody = d3.select("tbody");

console.log(data);

data.forEach((ufoSighting) => {
    var row = tBody.append("tr");
    Object.entries(ufoSighting).forEach(([key,value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");

var form = d3.select("#filters");

var inputElement = d3.select("#datetime");
var inputState = d3.select("#state");
button.on("click", () => {
    d3.event.preventDefault();
    var iValue = inputElement.property("value");
    var sValue = inputState.property("value");
    console.log(inputValue);
    console.log(stateValue);
    tBody.remove();
    tBody = ufoTable.append("tbody");

    var filtered = data.filter(data => (data.datetime == iValue || data.state == sValue)) 
            filtered.forEach(ufoSighting => {
            var row = tableBody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
})
