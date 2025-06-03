function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const userChoice = prompt("Choisissez : rock, paper ou scissors");

    // Vérifie que l'utilisateur n'a pas cliqué sur "Annuler"
    if (userChoice === null) {
        alert("Aucune sélection. Partie annulée.");
        return null;
    }

    // Nettoie et retourne
    return userChoice.trim();
}

let humanScore = 0;
let computerScore = 0;

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(humanChoice, computerChoice) {
    // Vérification sécurité
    if (!humanChoice) {
        console.log("Aucun choix valide.");
        return;
    }

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
        computerScore++;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
        humanScore++;
    } else {
        console.log("Invalid input. Please choose rock, paper, or scissors.");
    }
}

const humanChoice = getHumanChoice();
if (humanChoice !== null) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
}
