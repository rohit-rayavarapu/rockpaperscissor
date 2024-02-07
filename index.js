function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3); // Generate random number between 0 and 2
    return choices[randomNumber];
  }
  



  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make case-insensitive
  
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  


  function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    const rounds = 5; // Number of rounds
  
    for (let i = 0; i < rounds; i++) {
      const playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase();
      const computerSelection = getComputerChoice();
      const roundResult = playRound(playerSelection, computerSelection);
  
      console.log(`Round ${i + 1}: ${roundResult}`);
  
      if (roundResult.includes("win")) {
        playerScore++;
      } else if (roundResult.includes("lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("You win the game!");
    } else if (computerScore > playerScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie!");
    }
  }

  playGame()