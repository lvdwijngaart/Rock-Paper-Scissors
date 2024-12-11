
const choices = ["Rock", "Paper", "Scissors"];
const winningChoices = JSON.stringify([[choices[0], choices[2]], [choices[1], choices[0]], [choices[2], choices[1]]]);
const winningScore = 3;

let computerScore = 0;
let playerScore = 0;

let menu = document.querySelector("#choice-menu");
let playerScoreDiv = document.querySelector("#player-score");
let computerScoreDiv = document.querySelector("#computer-score");
let winnerMessageContainer = document.querySelector("#winner-message-container");
let newGameButton = document.querySelector("#new-game");

menu.addEventListener("click", (event) => {
    console.log("You reached the click event");
    let target = event.target;

    switch (target.id) {
        case "rock": 
            playRound(choices[0], getComputerChoice());
            break;
        case "paper": 
            playRound(choices[1], getComputerChoice());
            break;
        case "scissors":
            playRound(choices[2], getComputerChoice());    
            break;
        default:
            alert("an invalid option was selected. Try again. ")
            break;
    }

    changeScoreDivs();
    winnerCheck();
});

function changeScoreDivs() {
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}

function winnerCheck() {
    if (playerScore >= winningScore && playerScore > computerScore) {
        winnerMessageContainer.textContent = `You were the first to reach ${winningScore} points and are the winner!`;
        
        menu.style.display = "none"; //Remove the choice buttons since the game has been won and is over. 
        newGameButton.style.display = "initial";

    } else if (computerScore >= winningScore && computerScore >playerScore) {
        winnerMessageContainer.textContent = `The computer was the first to reach ${winningScore} points and is the winner!`;
        
        menu.style.display = "none";menu.style.display = "none"; //Remove the choice buttons since the game has been won and is over. 
        newGameButton.style.display = "initial";
    }

    return;
}

//When player decides to play again, reset the scores and show choices again. 
newGameButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    changeScoreDivs();
    winnerMessageContainer.textContent = "";
    menu.style.display = "initial";
    newGameButton.style.display = "none";
});

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
    const max = choices.length;
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
