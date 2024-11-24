let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let heading = document.querySelector("#winInfo")

let turnO = true ;

let winningPatterns = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Main diagonal
    [2, 4, 6]  // Anti-diagonal
];

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
    if (turnO) {
        box.innerText="O"
        turnO=false;
        }else{
        box.innerText="X"
        turnO=true;
        
        }
        box.disabled = true ;
        checkWinner();
    });   
});

const checkWinner = () => {
    let allBoxesFilled = true;

    // Check if all boxes are filled
    boxes.forEach(box => {
        if (box.innerText === "") {
            allBoxesFilled = false;
        }
    });

    if (allBoxesFilled) {
        heading.innerText="Match draw";
        resetBtn.innerText="New Game";
    }
    for (let pattern of winningPatterns){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

    if (pos1Val!= "" && pos2Val!= "" && pos3Val!="") {
        if (pos1Val==pos2Val && pos2Val==pos3Val) {
        let a = `winner is player ${pos1Val}`
        boxes.forEach(box => {
            box.disabled=true
        })
        heading.innerText=a
        resetBtn.innerText="New game"
        } 
    }
    }
}


resetBtn.addEventListener("click",()=>{
    heading.innerText=""
    resetBtn.innerText="Reset"

    boxes.forEach(box => {
        
        box.innerText=""
        box.disabled=false
    })})

