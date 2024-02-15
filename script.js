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
        return "tie"
    } else
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "lose"
    } else
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "win"
    } else
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "win"
    } else
    if (playerSelection === "paper" && computerSelection === "paper") {
        return "tie"
    } else
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "lose"
    } else
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "lose"
    } else
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "win"
    } else
    if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "tie" 
    }
}

function score(result){
    if (result === "win") {
        return playerScore++
    } else
    if (result === "lose") {
        return computerScore++
    }
}


function playGame5(){
    console.log(playerScore)
}

let playerScore = 0
let computerScore = 0

const computerPlay = getComputerChoice()
const playerPlay = prompt("choose rock, paper or scissors").toLowerCase()
const gameResult = playGame(playerPlay, computerPlay);
const gameScore = score(gameResult)
// const gameResult5 = playGame5()
console.log(computerPlay)
console.log(gameResult)
console.log(playerScore)
console.log(computerScore)






