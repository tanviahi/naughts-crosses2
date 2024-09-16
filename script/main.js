console.log("hii");           

// const userInput=prompt("enter something");
// console.log(userInput)


// const userName ="tanvi";
// console.log(`hello ${userName}`);

// function Double(){
//     const userInput=Number(prompt("enter value"));
//     Console inputDouble = prompt
//     console.log(nu1)
// }

const resetBtn = document.querySelector(".btn-reset");
const gameGrid = document.querySelector(".game-grid");

const colors =["pink","orange","red","yellow","black","purpule"];

let count = 0;
resetBtn.addEventListener("click",function(){
    console.log(count)
    if(count >5)
        count = count -6;
    // console.log("hii");
    // resetBtn.addEventListener.remove("active")
    gameGrid.style.backgroundColor =colors[count];
    count=count+1;
});
// resetBtn.style.backgroundColor="red";