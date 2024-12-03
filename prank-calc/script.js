const allButtonsElm = document.querySelectorAll(".btn");
const displayElm = document.querySelector(".display")
let strToDisplay="";
const operators = ["%","-","+","/","*"]

let lastOperator="";

//load the audio
const audio = new Audio("prank-122485.mp3");

const buttonAction = (value)=>{

    displayElm.classList.remove("prank");
   



    if (value==="AC") {
        strToDisplay="";
        return display(strToDisplay)
    }

    if (value==="=" || value==="Enter") {
        lastOperator="";
        //get the last char of the string
        const lastChar = strToDisplay[strToDisplay.length - 1]
        if (operators.includes(lastChar)) {
            strToDisplay=strToDisplay.slice(0,-1);
        }
        return displayTotal()
    }

    if (value==="C") {
        strToDisplay=strToDisplay.slice(0,-1);
        return display(strToDisplay);
    }

//show only last operator

if (operators.includes(value)) {
    lastOperator=value;
    const lastChar = strToDisplay[strToDisplay.length - 1]
        if (operators.includes(lastChar)) {
            strToDisplay=strToDisplay.slice(0,-1);
        }   
}


//handle . checkk

if (value===".") {
    const lastOperatorIndex=strToDisplay.lastIndexOf(lastOperator);

    const lastNumberset=strToDisplay.slice(lastOperatorIndex);

    if (lastNumberset.includes(".")) {
        return;
        
    }

    if(!lastOperator && strToDisplay.includes(".")){
        return;
    }
}

    strToDisplay+= value;
    display(strToDisplay);
}


allButtonsElm.forEach((btn)=>{

    btn.addEventListener("mousedown",()=>{
        btn.style.scale=".9";
    })

    btn.addEventListener('click',()=>{
        const value = btn.innerText;
        buttonAction(value);
        btn.style.scale="1";
        
    })



})


const display = (str) => {
    displayElm.innerText=str  || "0.0";
}
const displayTotal = ()=>{
    const extraValue = randomValue();
    if (extraValue) {
        displayElm.classList.add("prank");
        audio.play();
        
    }
    const total=eval(strToDisplay) + extraValue;

    strToDisplay = total.toString();

    display(strToDisplay)
}


const randomValue = ()=>{
    const num = Math.round(Math.random()  * 10)
    return num < 3 ? num : 0;
}


//binding keyboard with browser 

document.addEventListener("keypress",(e)=>{
    const value = e.key;
    if(e.code.includes("Key")){
        return;
    }

    buttonAction(value);
})