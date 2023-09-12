
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    switch (ranNum) {
        case 0:
            return "Rock";
            break;  
        case 1: 
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    console.log(playerSelection);
    if (playerSelection === "Rock" && computerSelection === "Rock" || 
    playerSelection === "Paper" && computerSelection === "Paper" || 
    playerSelection === "Scissors" && computerSelection === "Scissors") {
        return "It's a tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
    playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors" ||
    playerSelection === "Scissors" && computerSelection === "Rock" ||
    playerSelection === "Rock" && computerSelection === "Paper") { 
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
    else return "Type your choice correctly!"
}   


let comp = getComputerChoice();

console.log(comp);
console.log(playRound("rock", comp));