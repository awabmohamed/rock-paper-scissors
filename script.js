let choiceArray = ["rock", "paper", "scissors"];

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
        console.log("It is a Tie! the round will be re-played");
        do {
            let playerSelection = prompt("Enter a new choice:");
            let computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
            break;
        } while (playerSelection.toLowerCase() === computerSelection.toLowerCase());
    }
  }
   
  function game(){
    let computerWins = 0;
    let playerWins = 0;

    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Enter your choice:");
        let computerSelection = getComputerChoice();
        console.log("You chose: " + playerSelection + " and the computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        
        if(playRound(playerSelection, computerSelection) === "You Win! Rock beats Scissors" || playRound(playerSelection, computerSelection) === "You Win! Rock beats Scissors" || playRound(playerSelection, computerSelection) === "You Win! Scissors beats Paper"){
            playerWins++;
        }else{
            computerWins++;
        }
    }
    if(computerWins > playerWins){
        console.log("The computer won " + computerWins + " times, while the player won " + playerWins + " times");
        console.log("The computer is the winner!");
    }else{
        console.log("The player won " + playerWins + " times, while the computer won " + computerWins + " times");
        console.log("The player is the winner!");
    }
  }

  console.log(game());