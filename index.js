
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
        default:
            console.error('Error: Unexpected random number generated.');
            return null;
    }
}

const computerChoice = getComputerChoice();
console.log('Computer\'s choice:', computerChoice);


function playRound(playerSelection, computerSelection) {
  
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection.toLowerCase()) {
        return 'It\'s a tie!';
    } else if (
        (playerChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerChoice === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerChoice === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        return `You Win! ${playerChoice} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
    }
}

const playerSelection = 'Rock'; 
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);


function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
  
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();

    
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes('Win')) {
            playerScore++;
        } else if (roundResult.includes('Lose')) {
            computerScore++;
        }
    }


    if (playerScore > computerScore) {
        console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
        console.log('Sorry, you lose the game.');
    } else {
        console.log('It\'s a tie. No winner.');
    }
}


playGame();
