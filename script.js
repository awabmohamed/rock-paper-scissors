let choiceArray = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){    
    let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)]
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === choiceArray[0].toLowerCase() && computerSelection.toLowerCase() === choiceArray[1].toLowerCase()){
        return "You Lose! Paper beats Rock";
    }else if(playerSelection.toLowerCase() === choiceArray[0].toLowerCase() && computerSelection.toLowerCase() === choiceArray[2].toLowerCase()){
        return "You Win! Rock beats Scissors";
    }else if(playerSelection.toLowerCase() === choiceArray[1].toLowerCase() && computerSelection.toLowerCase() === choiceArray[0].toLowerCase()){
        return "You Win! Paper beats Rock";
    }else if(playerSelection.toLowerCase() === choiceArray[1].toLowerCase() && computerSelection.toLowerCase() === choiceArray[2].toLowerCase()){
        return "You Lose! Scissors beats Paper";
    }else if(playerSelection.toLowerCase() === choiceArray[2].toLowerCase() && computerSelection.toLowerCase() === choiceArray[0].toLowerCase()){
        return "You Lose! Rock beats Scissors";
    }else if(playerSelection.toLowerCase() === choiceArray[2].toLowerCase() && computerSelection.toLowerCase() === choiceArray[1].toLowerCase()){
        return "You Win! Scissors beats Paper";
    }else if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "It's a tie!"
    }
  }
   
   
  function game() {
    let playerWins = 0;
    let computerWins = 0;
  
    const maxScore = 5; 
  
    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorsBtn = document.querySelector('#scissors');
    const results = document.querySelector('.results-div');
    const pScore = document.querySelector('#pScore');
    const cScore = document.querySelector('#cScore');
  
    function updateScores() {
      let playerScorePara = pScore.querySelector('p');
      if (!playerScorePara) {
        playerScorePara = document.createElement('p');
        pScore.appendChild(playerScorePara);
      }
      playerScorePara.textContent = playerWins;
  
      let computerScorePara = cScore.querySelector('p');
      if (!computerScorePara) {
        computerScorePara = document.createElement('p');
        cScore.appendChild(computerScorePara);
      }
      computerScorePara.textContent = computerWins;
    }
  
    function displayResults(res) {
      let messageParagraph = results.querySelector('p');
      if (!messageParagraph) {
        messageParagraph = document.createElement('p');
        results.appendChild(messageParagraph);
      }
      messageParagraph.textContent = "Results: " + res;
    }
  
    function checkGameOver() {
      if (playerWins === maxScore || computerWins === maxScore) {
        const winner = playerWins === maxScore ? "Player" : "Computer";
        const gameOverMessage = `${winner} wins! Game Over!`;
        displayResults(gameOverMessage);
  
        // Disable buttons after game over
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
      }
    }
  
    function playGame(playerSelection) {
      const computerSelection = getComputerChoice();
      const res = playRound(playerSelection, computerSelection);
  
      if (res.includes("You Win")) {
        playerWins++;
      } else if (res.includes("You Lose")) {
        computerWins++;
      }
  
      displayResults(res);
      updateScores();
      checkGameOver();
    }
  
    rockBtn.addEventListener('click', () => playGame(choiceArray[0]));
  
    paperBtn.addEventListener('click', () => playGame(choiceArray[1]));
  
    scissorsBtn.addEventListener('click', () => playGame(choiceArray[2]));
  }
  
  game();
  
   
