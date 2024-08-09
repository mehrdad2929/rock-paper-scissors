function random() {
    let numbers= [1,2,3];
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function getComputerChoice(){
    let randomNumber = random();
    switch (randomNumber){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }     
}
function getHumanChoice(){
    let choice = prompt("enter ur choice:").toLowerCase();
    while(!(choice =="rock" || choice =="paper" || choice == "scissors")){
        // alert("invalid choice you have to choose between 'rock','paper','scissors'");
        choice = prompt("invalid choice you have to choose between 'rock','paper','scissors' pls try again:").toLowerCase();        
    }
    return choice;
}
function whoWins(humanChoice,computerChoice){
    if (humanChoice==computerChoice){
        return "tie";
    }
    else{
        if(computerChoice=="rock"){
            if(humanChoice=="paper"){
                return "human"
            }else{
                return "computer"
            }
        }
        if(computerChoice=="paper"){
            if(humanChoice=="scissors"){
                return "human"
            }else{
                return "computer"
            }
        }
        if(computerChoice=="scissors"){
            if(humanChoice=="rock"){
                return "human"
            }else{
                return "computer"
            }
        }
    }
}
function playRounds(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let whoWon = whoWins(humanChoice,computerChoice); 
    
    if(whoWon == "human"){
        alert(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    if(whoWon == "computer"){
        alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    if(whoWon=="tie"){
        alert("this round is tie.")
    }
    return whoWon;

}
function playGame(){
    let humanScore =0;
    let computerScore =0;
    let roundsNumber = prompt("hi this is rock paper scissors game how many rounds do you wish to play?");
    for(let i =0;i<roundsNumber;i++){
        let roundsResult = playRounds();
        if (roundsResult== "computer"){
            computerScore++;
        }
        if(roundsResult == "human"){
            humanScore++;
        }
        if(roundsResult=="tie"){
            computerScore++;
            humanScore++;
        }
    }
    if(humanScore>computerScore){
        alert(`congrats you have won ${humanScore}-${computerScore}`)
    }
    if(computerScore>humanScore){
        alert(`sorry you lost ${humanScore}-${computerScore}`)
    }
    if(computerScore==humanScore){
        alert(`its a tie.${computerScore}-${humanScore}`)
    }
}