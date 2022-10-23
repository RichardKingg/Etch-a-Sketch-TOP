const container = document.getElementById("container");
let userInput = document.getElementById("userInput");
const sizeText = document.getElementById("sizeText");
const colorBtn = document.getElementById("colorBtn");
const clrBtn = document.getElementById("clrBtn");
const colorInput = document.getElementById("colorInput");
// let rows = document.getElementsByClassName("gRow");
// let cols = document.getElementsByClassName("cell");

let gSize = 16;
let defaultColor = "#000000";

userInput.onmousemove = (e) => sliderText(e.target.value);
userInput.onchange = (e) => grdSize(e.target.value);
colorInput.oninput = (e) => changeColor(e.target.value);
clrBtn.onclick = () => reloadContainer();

//function for grid size, input from user
function grdSize(userInput) {
  gSize = userInput;

  container.style.gridTemplateColumns = `repeat(${gSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gSize}, 1fr)`;

  for (let i = 0; i < gSize * gSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cells");
    container.appendChild(cell);
    cell.addEventListener("mouseover", paintCell);
    cell.addEventListener("mousedown", paintCell);
  }
}

function reloadContainer() {
  clrContainer();
  grdSize(gSize);
}

function clrContainer() {
  container.innerHTML = "";
}

function changeColor(newColor) {
  defaultColor = newColor;
}

function paintCell(e) {
  if (e.type === "mouseover" && !"mousedown") return;

  e.target.style.backgroundColor = defaultColor;
}

function sliderText(userInput) {
  sizeText.textContent = `${userInput} x ${userInput}`;
}

window.onload = () => {
  grdSize(16);
};

//when user moves slider, executes function
userInput.addEventListener("mouseup", function () {
  clrContainer();
  grdSize(userInput);
});

// function mkRows(gSize) {
//   //this loop is for rows
//   for (let r = 0; r < gSize; r++) {
//     let row = document.createElement("div");
//     container.appendChild(row).className = "gRow";
//   }
// }

// function mkCols(gSize) {
//   //this loop is for columns
//   for (let c = 0; c < rows.length; c++) {
//     for (let j = 0; j < gSize; j++) {
//       let cols = document.createElement("div");
//       rows[j].appendChild(cols).className = "cell";
//     }
//   }
// }
