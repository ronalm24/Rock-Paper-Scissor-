function getComputerChoice () {
    var computerChoice = ['Rock', 'Paper', 'Scissor'];
    return computerChoice[Math.floor(Math.random()*computerChoice.length)]
}

getComputerChoice();

function checkResult (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!"
    } else if ( 
    (playerSelection === "Rock" && computerSelection === "Scissor") || 
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissor" && computerSelection === "Paper")) {
        return "Player"
    } else if ( 
    (playerSelection === "Scissor" && computerSelection === "Rock") || 
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissor")) {
        return "Computer"
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkResult(playerSelection, computerSelection)
    if (result === "Tie!") {
        return "It's a Tie!"
    } else if (result === "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}` 
    } else if (result === "Computer") {
        return `Computer Won! ${computerSelection} beats ${playerSelection}`
    } else {
        return "Please Enter the correct choice (Rock/ Paper/ Scissor)"
    }
}

function playerInput() {
    let input = prompt ("Choose you weapon (Rock, Paper, Scissor)");
    return input.charAt().toUpperCase() + input.slice(1);
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = playerInput();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if(checkResult (playerSelection, computerSelection) == "Player") {

            playerScore++;

        } else if (checkResult (playerSelection, computerSelection) == "Computer") {

            computerScore++; 

        } 
    console.log(`Score is ${playerScore} - ${computerScore}`)
    console.log(">")
} 
if (playerScore > computerScore) {
    console.log(`Player Won the game with a total score of ${playerScore}`)
} else if (computerScore > playerScore) {
    console.log(`Computer Won the game with a total score of ${computerScore}`)
}

console.log("Game Over!")
}

game();




