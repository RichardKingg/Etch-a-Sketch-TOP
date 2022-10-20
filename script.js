const container = document.getElementById("container");
let rows = document.createElement("div");
let cols = document.createElement("div");

function grdSize() {
  gSize = parseInt(prompt("Insert grid size"));
  rows = gSize;
  cols = gSize;
}

function squares(rows, cols) {
  let grd = cols * rows;
}
