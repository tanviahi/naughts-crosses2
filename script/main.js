// =======DOM selection=======
const headingEl = document.querySelector(".heading")
const currentPlayerEl = document.querySelector(".current-player")
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".btn-reset")

// console.log(currentPlayerEl);
// dom players x o
const player=["o","x"];
let currentPlayer=getPlayer();

currentPlayerEl.textContent=currentPlayer;
// function

function getPlayer(){
    const rn = math.floor(math.random() *2);
    return players[rn];
}
function swapPlayer(){
    currentPlayer = currentPlayer === "o"? "x":"o";
}

function handleClick(input){
    input.textContent =currentPlayer;
    swapPlayer();
    currentPlayerEl.textContent=currentPlayer;
}
// 
boxes.forEach(function (box){
    box.addEventListener("click", function(){
    handleClick(box)
    });
});


