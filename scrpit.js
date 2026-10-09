// Step 1: Setup the project structure
console.log("Hello World!");

// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (
        (humanChoice === "rock" && computerChoice === "scissors") || 
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore += 1;
        return `Congratulations! You won. ${humanChoice} beats ${computerChoice}`;
    } else if (humanChoice === computerChoice) {
        return `It´s a tie. Both chose ${humanChoice}`;
    } else {
        computerScore += 1;
        return `Sorry! Computer won. ${computerChoice} beats ${humanChoice}`;
    }
}

// Create buttons and results containers dynamically in JavaScript
const rockButton = document.createElement("button");
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

// Create a results div and score div for the DOM
const resultsDiv = document.createElement("div");
resultsDiv.textContent = "Make your choice to play!";

const scoreDiv = document.createElement("div");
scoreDiv.style.fontWeight = "bold";
scoreDiv.textContent = `Score -> Human: ${humanScore} | Computer: ${computerScore}`;

const winnerDiv = document.createElement("div");
winnerDiv.style.color = "blue";

document.body.appendChild(resultsDiv);
document.body.appendChild(scoreDiv);
document.body.appendChild(winnerDiv);

// Helper function to check if someone reached 5 points
function checkWinner() {
    if (humanScore === 5) {
        winnerDiv.textContent = "You won the game by reaching 5 points!";
        disableButtons();
    } else if (computerScore === 5) {
        winnerDiv.textContent = "Computer won the game by reaching 5 points!";
        disableButtons();
    }
}

// Helper function to disable buttons when the game ends
function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

// Event listeners calling playRound and updating DOM elements
rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("rock", computerSelection);
    
    resultsDiv.textContent = result;
    scoreDiv.textContent = `Score -> Human: ${humanScore} | Computer: ${computerScore}`;
    checkWinner();
});

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("paper", computerSelection);
    
    resultsDiv.textContent = result;
    scoreDiv.textContent = `Score -> Human: ${humanScore} | Computer: ${computerScore}`;
    checkWinner();
});

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("scissors", computerSelection);
    
    resultsDiv.textContent = result;
    scoreDiv.textContent = `Score -> Human: ${humanScore} | Computer: ${computerScore}`;
    checkWinner();
});