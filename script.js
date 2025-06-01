function getComputerChoice () {
    choices = ["rock", "paper", "scissor"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}
console.log(getComputerChoice());

function getHumanChoice() {
    const userChoice = prompt("Choisissez : rock, paper ou scissors")
    console.log(userChoice);
}
getHumanChoice()
