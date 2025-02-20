let computerScore = 0, humanScore = 0, round = 0;

function getComputerChoice() {
    let compuChoice = Math.floor(Math.random() * 3) + 1;
    return compuChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Type in rock or paper or scissors.");
    humanChoice = humanChoice.toLowerCase();
    while ((humanChoice != "rock" && humanChoice != "r") && 
    (humanChoice != "paper" && humanChoice != "p") && 
    (humanChoice != "scissors" && humanChoice != "s")) {
        humanChoice = prompt("Make sure to type in rock or paper or scissors or r/p/s.");
        humanChoice = humanChoice.toLowerCase();
    }
    if (humanChoice == "rock" || humanChoice == "r") return 1;
    else if (humanChoice == "paper" || humanChoice == "p") return 2;
    else return 3;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let compuChoice = getComputerChoice();
    round ++;
    if (humanChoice == 1 && compuChoice == 3) {
        humanScore ++;
        console.log(`Round ${round}`);
        console.log("You win! Rock beats Scissors");
    }
    else if (humanChoice == 3 && compuChoice == 1) {
        computerScore ++;
        console.log(`Round ${round}`);
        console.log("You lose! Rock beats Scissors");
    }
    else if (humanChoice == compuChoice) {
        console.log(`Round ${round}`);
        if (humanChoice == 1) console.log("Draw.. Both chose Rock.");
        else if (humanChoice == 2) console.log("Draw.. Both chose Paper.");
        else console.log("Draw.. Both chose Scissors.");
    }
    else if (humanChoice > compuChoice) {
        humanScore ++;
        console.log(`Round ${round}`);
        if (humanChoice == 2) console.log("You win! Paper beats Rock");
        else if (humanChoice == 3) console.log("You win! Scissors beats Paper");
    }
    else if (humanChoice < compuChoice) {
        computerScore ++;
        console.log(`Round ${round}`);
        if (humanChoice == 1) console.log("You lose! Paper beats Rock");
        else if (humanChoice == 2) console.log("You lose! Scissors beats Paper");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Me = ${humanScore} : Computer = ${computerScore}`);
        console.log("");
    }
    if (humanScore > computerScore) {
        console.log(`You won the game with a score of ${humanScore} to ${computerScore}!`);
    }
    else if (humanScore < computerScore) {
        console.log(`You lost the game with a score of ${humanScore} to ${computerScore}`);
    }
    else {
        console.log(`It's a tie! And the scores are ${humanScore} to ${computerScore}`);
    }
}

playGame();