const humanSide = document.getElementById("human-choice");
const thisRoundResult = document.getElementById("round-result");
const computerChoiceText = document.getElementById("computer-choice");
const startGameButton = document.getElementById("start-game");
const roundsInput = document.getElementById("rounds-input");
const scoreDisplay = document.getElementById("score-display");

let humanScore = 0;
let computerScore = 0;
let currentRound = 0;
let totalRounds = 0;

function playRound(humanChoice) {
    if (currentRound >= totalRounds) return;

    const computerChoice = getComputerChoice();
    computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

    const winner = whoWins(humanChoice, computerChoice);
    if (winner === "human") {
        humanScore++;
        thisRoundResult.textContent = "You win this round!";
    } else if (winner === "computer") {
        computerScore++;
        thisRoundResult.textContent = "Computer wins this round!";
    } else {
        thisRoundResult.textContent = "It's a tie!";
    }

    currentRound++;
    updateScore();

    if (currentRound === totalRounds) {
        endGame();
    }
}

function updateScore() {
    scoreDisplay.textContent = `Round ${currentRound}/${totalRounds} - You: ${humanScore}, Computer: ${computerScore}`;
}

function endGame() {
    let finalResult = "Game Over! ";
    if (humanScore > computerScore) {
        finalResult += "You win the game!";
    } else if (humanScore < computerScore) {
        finalResult += "Computer wins the game!";
    } else {
        finalResult += "It's a tie game!";
    }
    thisRoundResult.textContent = finalResult;
}

function startGame() {
    totalRounds = parseInt(roundsInput.value);
    if (isNaN(totalRounds) || totalRounds <= 0) {
        alert("Please enter a valid number of rounds.");
        return;
    }
    
    humanScore = 0;
    computerScore = 0;
    currentRound = 0;
    updateScore();
    thisRoundResult.textContent = "Game started. Make your choice!";
}

startGameButton.addEventListener("click", startGame);

document.getElementById('rock').addEventListener('click', () => playRound("rock"));
document.getElementById('paper').addEventListener('click', () => playRound("paper"));
document.getElementById('scissors').addEventListener('click', () => playRound("scissors"));

//computer choice
function getComputerChoice(){
    let numbers= [1,2,3];
    let randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
    switch (randomNumber){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function whoWins(humanChoice , computerChoice){
    if (humanChoice == computerChoice){
        return  "tie";
        // thisRoundResult.textContent = "it's a tie!";
    }
    else{
        if(computerChoice=="rock"){
            if(humanChoice=="paper"){
                return "human";
                // thisRoundResult.textContent += " human";
            }else{
                return  "computer";
                // thisRoundResult.textContent += " computer";
            }
        }
        if(computerChoice=="paper"){
            if(humanChoice=="scissors"){
                return "human";
                // thisRoundResult.textContent += " human";
            }else{
                return "computer";
                // thisRoundResult.textContent += " computer";
            }
        }
        if(computerChoice=="scissors"){
            if(humanChoice=="rock"){
                return "human";
                // thisRoundResult.textContent += " human";
            }else{
                return "computer";
                // thisRoundResult.textContent += " computer";
            }
        }
    }
}