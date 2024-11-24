let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")

const genCompChoice = () => {
    const options =["rock","paper","scissors"]
   const ranIndex= Math.floor(Math.random() * 3 )
   return options[ranIndex]
}

const drawGame=() => {
  
      msg.innerText = " Game was draw. play again"
      msg.style.backgroundColor="#081b31"
}

const showWinner = (userWin ,compChoice,userChoice) =>{
    if(userWin){
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
        userScore++;
        userScorepara.innerText=userScore
    }else{
         msg.innerText = `you loose ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
        compScore++;
        compScorepara.innerText=compScore
    }

}


const playgame = (userChoice) =>{
    const compChoice = genCompChoice();
  

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true
       if (userChoice==="rock") {
        userWin = compChoice === "paper"? false : true ;
        
       }else if(userChoice==="paper"){
       userWin= compChoice==="scissors"? false : true;
       }else{
        userWin= compChoice==="rock"? false : true;
       }
       console.log(userWin)
       showWinner(userWin , compChoice , userChoice)
    }

   

}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice)

    })
})