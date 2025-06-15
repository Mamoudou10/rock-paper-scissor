// Génère le choix aléatoire de l'ordinateur
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Récupère les boutons HTML
const buttons = {
    rock: document.getElementById('rock'),
    paper: document.getElementById('paper'),
    scissors: document.getElementById('scissors')
};

// Zone d'affichage des résultats
const resultsDiv = document.getElementById('results');

// Zone d'affichage du score
const scoreDiv = document.getElementById('score');

// Scores des joueurs
let humanScore = 0;
let computerScore = 0;

// Met en majuscule la première lettre d'un mot
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

// Affiche un message dans la zone des résultats
function showMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    resultsDiv.appendChild(p);
}

// Efface les anciens résultats
function clearResult() {
    resultsDiv.innerHTML = "";
}

// Met à jour dynamiquement l'affichage du score
function updateScore() {
    scoreDiv.textContent = `Score - You: ${humanScore}, Computer: ${computerScore}`;
}

// Désactive tous les boutons
function disableButtons() {
    Object.values(buttons).forEach(button => button.disabled = true);
}

// Joue un tour avec le choix du joueur et de l'ordinateur
function playRound(humanChoice, computerChoice) {
    // Si un joueur a déjà gagné, ne rien faire
    if (humanScore >= 5 || computerScore >= 5) return;

    // Nettoie les anciens messages
    clearResult();

    // Affiche les choix
    showMessage(`You chose: ${capitalize(humanChoice)}`);
    showMessage(`Computer chose: ${capitalize(computerChoice)}`);

    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Vérifie les résultats
    if (humanChoice === computerChoice) {
        showMessage("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        showMessage(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
        computerScore++;
    } else {
        showMessage(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
        humanScore++;
    }

    // Met à jour le score à l'écran
    updateScore();

    // Vérifie si la partie est terminée
    if (humanScore >= 5 || computerScore >= 5) {
        const winner = humanScore > computerScore
            ? "You win the game! 🎉"
            : "Computer wins the game! 🤖";
        showMessage(winner);
        disableButtons(); // Empêche de jouer après la fin
    }
}

// Écouteurs d'événements sur les boutons
buttons.rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

buttons.paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

buttons.scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});
