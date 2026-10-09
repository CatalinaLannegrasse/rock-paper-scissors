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

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
    let choice = prompt("Choose between Rock, Paper and Scissors: ").toLowerCase();
    return choice;
}

// Step 6: Write the logic to play the entire game
function playGame() {
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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        const roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);
        console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Game Over: You won the entire game!");
    } else if (computerScore > humanScore) {
        console.log("Game Over: The computer won the entire game!");
    } else {
        console.log("Game Over: It's an overall tie!");
    }
}

playGame();