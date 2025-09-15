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

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
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

let roundsPlayed = 0;
const totalRounds = 5;

function endGame() {
    if (humanScore > computerScore) {
        return "Game over! You are the overall winner!";
    } else if (computerScore > humanScore) {
        return "Game over! The computer is the overall winner!";
    } else {
        return "Game over! It's an overall tie!";
    }
}

function finalResult() {
    document.getElementById('result').innerHTML = ""; // Clear previous results
    // document.getElementById('score').innerHTML = ""; // Clear previous scores
    document.getElementById('result').innerHTML += `<p>${endGame()}</p>`;
    // Disable buttons after game ends
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// 3 buttons for rock, paper, scissors
document.getElementById('rock').addEventListener('click', () => {
    const result = playRound('rock');
    document.getElementById('result').innerHTML = ""; // Clear previous results
    document.getElementById('score').innerHTML = ""; // Clear previous scores
    document.getElementById('result').innerHTML += `<p>${result}</p>`;
    document.getElementById('score').innerHTML += `<p>Scores => Human: ${humanScore}, Computer: ${computerScore}</p>`;
    roundsPlayed++;
    document.getElementById('round-number').innerHTML = `<p>${roundsPlayed} / ${totalRounds}</p>`;
    if (roundsPlayed === totalRounds) finalResult();
});

document.getElementById('paper').addEventListener('click', () => {
    const result = playRound('paper');
    document.getElementById('result').innerHTML = ""; // Clear previous results
    document.getElementById('score').innerHTML = ""; // Clear previous scores
    document.getElementById('result').innerHTML += `<p>${result}</p>`;
    document.getElementById('score').innerHTML += `<p>Scores => Human: ${humanScore}, Computer: ${computerScore}</p>`;
    roundsPlayed++;
    document.getElementById('round-number').innerHTML = `<p>${roundsPlayed} / ${totalRounds}</p>`;
    if (roundsPlayed === totalRounds) finalResult();
});
document.getElementById('scissors').addEventListener('click', () => {
    const result = playRound('scissors');
    document.getElementById('result').innerHTML = ""; // Clear previous results
    document.getElementById('score').innerHTML = ""; // Clear previous scores
    document.getElementById('result').innerHTML += `<p>${result}</p>`;
    document.getElementById('score').innerHTML += `<p>Scores => Human: ${humanScore}, Computer: ${computerScore}</p>`;
    roundsPlayed++;
    document.getElementById('round-number').innerHTML = `<p>${roundsPlayed} / ${totalRounds}</p>`;
    if (roundsPlayed === totalRounds) finalResult();
});

// reset button to restart the game
document.getElementById('reset').addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    document.getElementById('result').innerHTML = "";
    document.getElementById('score').innerHTML = "";
    document.getElementById('round-number').innerHTML = `<p>${roundsPlayed} / ${totalRounds}</p>`;
    // Enable buttons after reset
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
});