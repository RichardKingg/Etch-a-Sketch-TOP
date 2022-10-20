const container = document.getElementById("container");
let rows = document.createElement("div");
let cols = document.createElement("div");

//function for grid size
function grdSize() {
  gSize = parseInt(prompt("Insert grid size"));
  rows = gSize;
  cols = gSize;
}

//function for calculation of rows and columns
function squares(rows, cols) {
  let grd = cols * rows;
}

//when page loads, execute the function
window.addEventListener("load", function () {
  grdSize();
  squares(rows, cols);
});
