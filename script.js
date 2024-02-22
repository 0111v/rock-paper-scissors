// const compChoice = ["rock", "paper", "scissors"]
// const randomChoice = Math.floor(Math.random() * compChoice.length)

// console.log(compChoice[randomChoice])

// const months = ["January", "February", "March", "April", "May", "June", "July"];
// const random = Math.floor(Math.random() * months.length);
// console.log(random, months[random]);

// const a = getComputerChoice()
// const b = getComputerChoice()
// const c = getComputerChoice()

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const resultText = document.getElementById("resultText")
const compText = document.getElementById("compText")
const playerScoreText = document.getElementById("playerScoreText")
const computerScoreText = document.getElementById("computerScoreText") 




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



// function playGame5(){
//     for (let i = 0; i < 5; i++) {
//         const computerPlay = getComputerChoice()
//         const playerPlay = prompt("choose rock, paper or scissors").toLowerCase()
//         const gameResult = playGame(playerPlay, computerPlay);
//         console.log(computerPlay)
//         console.log(gameResult)
//         if (gameResult === "win") {
//             playerScore++
//         } else
//         if (gameResult === "lose") {
//             computerScore++
//         }
//     }
// }


let playerScore = 0
let computerScore = 0



button1.onclick = function() {
    const compPlay = getComputerChoice()
    const gameRes = playGame("rock", compPlay)
    console.log(gameRes)
    resultText.innerText = gameRes
    compText.innerText = compPlay
    if (gameRes == 'win') {
        playerScore++
    } else if(gameRes == 'lose') {
        computerScore++
    }
    playerScoreText.innerText = playerScore
    computerScoreText.innerText = computerScore
    if (playerScore == 5) {
        alert('player win!')
    }
    if (computerScore == 5) {
        alert('computer win!')
    }
 }

 button2.onclick = function() {
    const compPlay = getComputerChoice()
    const gameRes = playGame("paper", compPlay)
    console.log(gameRes)
    resultText.innerText = gameRes
    compText.innerText = compPlay
    if (gameRes == 'win') {
        playerScore++
    } else if(gameRes == 'lose') {
        computerScore++
    }
    playerScoreText.innerText = playerScore
    computerScoreText.innerText = computerScore
    if (playerScore == 5) {
        alert('player win!')
    }
    if (computerScore == 5) {
        alert('computer win!')
    }
 }

 button3.onclick = function() {
    const compPlay = getComputerChoice()
    const gameRes = playGame("scissors", compPlay)
    console.log(gameRes)
    resultText.innerText = gameRes
    compText.innerText = compPlay
    if (gameRes == 'win') {
        playerScore++
    } else if(gameRes == 'lose') {
        computerScore++
    }
    playerScoreText.innerText = playerScore
    computerScoreText.innerText = computerScore
    if (playerScore == 5) {
        alert('player win!')
    }
    if (computerScore == 5) {
        alert('computer win!')
    }
 }



// const gameScore = score(gameResult)
// const gameResult5 = playGame5()
// console.log(computerPlay)
// console.log(gameResult)
// console.log(playerScore)
// console.log(computerScore)






