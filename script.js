const container = document.getElementById("container");
let rows = document.getElementsByClassName("gRow");
let cols = document.getElementsByClassName("gCol");

//function for grid size, input from user
function grdSize() {
  gSize = parseInt(prompt("Insert grid size"));
  if (gSize >= 100) {
    alert("please select a number below 100");
    location.reload();
  }
}

function mkRows(gSize) {
  //this loop is for rows
  for (let r = 0; r < gSize; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gRow";
  }
}

function mkCols(gSize) {
  //this loop is for columns
  for (let c = 0; c < rows.length; c++) {
    for (let j = 0; j < gSize; j++) {
      let cols = document.createElement("div");
      rows[j].appendChild(cols).className = "gCol";
    }
  }
}

//when page loads, execute the function
window.addEventListener("load", function () {
  grdSize();
  mkRows(gSize);
  mkCols(gSize);
});
