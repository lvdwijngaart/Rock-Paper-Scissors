
const choices = ["Rock", "Paper", "Scissors"];
const winningChoices = JSON.stringify([[choices[0], choices[2]], [choices[1], choices[0]], [choices[2], choices[1]]]);
const winningScore = 3;

let computerScore = 0;
let playerScore = 0;

playGame();

function playGame() {
    
    while (computerScore < winningScore && playerScore < winningScore) {
        const playerChoice = getPlayerChoice();
        const computerChoice = getComputerChoice();
        console.log("Computer:" + computerChoice);
    
        playRound(playerChoice, computerChoice);
        console.log(`Player score: ${playerScore}, Computer score: ${computerScore}`);
    }
    let winner = "";
    if (playerScore > computerScore) {
        winner = "Player";
    } else {
        winner = "Computer";
    }
    console.log(`The winner of the game is: ${winner} with a score of ` + Math.max(playerScore, computerScore));
    
}

function playRound(playerChoice, computerChoice) {
    console.log("Test:" + [playerChoice, computerChoice])
    
    if (winningChoices.includes(JSON.stringify([playerChoice, computerChoice]))) {
        console.log("Player wins!");
        playerScore++;
    } else if (winningChoices.includes(JSON.stringify([computerChoice, playerChoice]))) {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("You chose the same option so it's a draw");
    }
    
}

// 
function getComputerChoice() {
    const max = 3;
    return choices[Math.floor(Math.random()*max)];
}

// 
function getPlayerChoice() {
    let playerChoice = prompt("Pick one: \"Rock\", \"Paper\" or \"Scissors\"");
    switch (playerChoice.toLowerCase()) {
        case "rock": 
            console.log("Player: Rock");
            return choices[0];
        case "paper":
            console.log("Player: Paper");
            return choices[1];
        case "scissors":
            console.log("Player: Scissors");
            return choices[2];
        default: 
            console.log("You chose an invalid choice, try again. ");
            getPlayerChoice();
            break;
    }
}
