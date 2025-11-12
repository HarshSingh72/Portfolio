let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
     let options = ["rock","paper","scissors"];
     const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
};

const drawGame = () => {
    //console.log("game was Draw");
    msg.innerText = "Game Draw";
};

const showWinner = (userWin , userChoice , compChoice) => {
   if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    //console.log("You Win");
    msg.innerText = `You Win ${userChoice} beats ${compChoice}`; 
   }else{
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("Computer Win");
    msg.innerText = `Computer Win ${compChoice} beats your ${userChoice}`;
   }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice)
    const compChoice = genComputerChoice();
    console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
       drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked",userChoice);
        playGame(userChoice)
    });
});