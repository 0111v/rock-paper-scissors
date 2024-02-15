// const compChoice = ["rock", "paper", "scissors"]
// const randomChoice = Math.floor(Math.random() * compChoice.length)

// console.log(compChoice[randomChoice])

// const months = ["January", "February", "March", "April", "May", "June", "July"];
// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);

// const a = getComputerChoice()
// const b = getComputerChoice()
// const c = getComputerChoice()



function getComputerChoice() {
    const compChoice = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * compChoice.length);
    return (compChoice[randomChoice])

}

function playGame(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock") {
        console.log("tie")
    } else
    if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("lose")
    } else
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("win")
    } else
    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("win")
    } else
    if (playerSelection === "paper" && computerSelection === "paper") {
        console.log("tie")
    } else
    if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("lose")
    } else
    if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("lose")
    } else
    if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("win")
    } else
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        console.log("tie")
    }
}

const computerSelection = getComputerChoice()
const playerSelection = prompt("choose rock, paper or scissors").toLowerCase()
const gameResult = playGame(playerSelection, computerSelection)
console.log(computerSelection)





