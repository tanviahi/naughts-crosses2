// for import another js file  used(./)
import chances from "./chances.js";

console.log(chances);
// =======DOM selection=======
const headingEl = document.querySelector(".heading");
const currentPlayerEl = document.querySelector(".current-player");
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".btn-reset");

// console.log(currentPlayerEl);
// dom players x o
const player = ["O", "X"];
let currentPlayer;
let virtualGrid;
currentPlayerEl.textContent = currentPlayer;
// function

function getPlayer() {
  const rn = Math.floor(Math.random() * 2);
  return player[rn];
}
function swapPlayer() {
  const newPlayer = currentPlayer === "O" ? "X" : "O";
  currentPlayer = newPlayer;
  currentPlayerEl.textContent = newPlayer;
}

// =======start the game =======
function startGame() {
  // current player set random player
  currentPlayer = getPlayer();
  // virtual grid
  virtualGrid = new Array(9).fill("");
  currentPlayerEl.textContent = currentPlayer;
}

function handleBoxClick(input) {
  if (virtualGrid[input] === "") {
    console.log(input);
    boxes[input].textContent = currentPlayer;
    boxes[input].style.cursor = "auto";
    virtualGrid[input] = currentPlayer;
    console.log(virtualGrid);
    swapPlayer();
  }
}
console.log(boxes);

boxes.forEach(function (_, index) {
  _.addEventListener("click", function () {
    handleBoxClick(index);
  });
});

function handleReset() {
  alert(1);
}
resetBtn.addEventListener("click", handleBoxClick);
resetBtn.addEventListener("click", handleReset);
//

//
document.addEventListener("DOMContentLoaded", startGame);
