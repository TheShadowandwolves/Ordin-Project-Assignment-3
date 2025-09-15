function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// console.log(getComputerChoice());

function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let userInput = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while (!choices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return userInput;
}
// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        // document.getElementById('gameContainer').innerHTML += `<p>You win! ${humanChoice} beats ${computerChoice}.</p>`;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        // document.getElementById('gameContainer').innerHTML += `<p>You lose! ${computerChoice} beats ${humanChoice}.</p>`;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// console.log(playRound(humanSelection, computerSelection));
// console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);

function playGame() {
    document.getElementById('gameContainer').style.display = 'block';
    document.getElementById('gameContainer').innerHTML = ''; // Clear previous game results
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log(`Scores => Human: ${humanScore}, Computer: ${computerScore}`);
        document.getElementById('gameContainer').innerHTML += `<p>Round ${i + 1}: ${playRound(humanSelection, computerSelection)}</p>`;
        document.getElementById('gameContainer').innerHTML += `<p>Scores => Human: ${humanScore}, Computer: ${computerScore}</p>`;
        
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
        document.getElementById('gameContainer').innerHTML += `<p>Congratulations! You won the game!</p>`;

    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer won the game.");
        document.getElementById('gameContainer').innerHTML += `<p>Sorry! The computer won the game.</p>`;
    } else {
        console.log("The game is a tie!");
        document.getElementById('gameContainer').innerHTML += `<p>The game is a tie!</p>`;
    }
}
// playGame();

document.getElementById('myButton').addEventListener('click', playGame);
