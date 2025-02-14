const choices = ["rock","paper","scissors"]; //choices
const choiceEmoji = ["👊","🤚","✌️"];
let playerScore = 0; 
let computerScore =0;
let drawScore = 0;
const playerScoreDisplay = document.querySelector("#plr-scr");
const computerScoreDisplay = document.querySelector("#cmptr-scr");
//to display choices
const playerDisplay = document.querySelector("#plr-side");
const computerDisplay = document.querySelector("#cmptr-side");
const resultDisplay = document.querySelector("#result");
var computerChoice;
function play(playerInt){
  let playerChoice = choices[playerInt];
   let randInt = Math.floor(Math.random()*1001)%3;
    computerChoice = choices[randInt];
    let result ="";
    if(playerChoice === computerChoice){
      resultDisplay.textContent = "it's a draw";
      playerDisplay.textContent = choiceEmoji[playerInt];
      computerDisplay.textContent = choiceEmoji[randInt];
      drawScore++;
    } else{
      switch(playerChoice){
        case "rock":
          result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
          break;
        case "paper":
          result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
        case "scissors":
          result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
          break;
      }
      if(result === "YOU WIN!"){
        playerScore++;
      } else {
        computerScore++;
      }
      playerScoreDisplay.textContent = playerScore;
      computerScoreDisplay.textContent  = computerScore;
      resultDisplay.textContent = result;
      playerDisplay.textContent = choiceEmoji[playerInt];
      computerDisplay.textContent = choiceEmoji[randInt]; 
    }

}
