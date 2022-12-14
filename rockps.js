// getComputerChoice - When called you get a random selection of "Rock" "Paper" or "Scissors"

// Have computer chose a random number between 1, 2, or 3
function generateRandomNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1
}

function getComputerChoice() {
    // Have computer chose a random number between 1, 2, or 3
    let randomNumber = generateRandomNumber(3)
    // pick rock if 1, paper if 2, and scissors if 3
    let options = ["Rock", "Paper", "Scissors"]
    return options[randomNumber - 1]
}

// Play a single round of rpm
// take two variables, player choice and computer choice
// let playerInput = prompt("Please choose Rock, Paper, or Scissors.", "Rock")
// let computerChoice = "Rock"
// change player choice to always be all proper noun case
function capitalize(string) {
    // lower case everything
    let lower = string.toString().toLowerCase()
    // capitalize the first letter
    let upper = lower[0].toUpperCase()
    return lower.replace(lower[0], upper)
}
// let playerChoice = capitalize(playerInput)
// compare player choice and computer choice
function playRound(playerChoice, computerChoice) {
    // if player is the same as computer, it's a tie
    if (playerChoice === computerChoice) {
        return "It's a tie!"
    }
    // if player is rock and computer is paper, computer wins
    if (playerChoice === "Rock" && computerChoice === "Paper") {
        computerScore += 1
        return "You lose! Paper beats Rock"
    }
    // if player is rock and computer is scissors, player wins
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        playerScore += 1
        return "You Win! Rock beats Scissors"
    }
    // if player is paper and computer is scissors, comsputer wins
    if (playerChoice === "Paper" && computerChoice === "Scissors") {
        computerScore += 1
        return "You lose! Scissors beats Paper"
    }
    // if player is paper and computer is rock, player wins
    if (playerChoice === "Paper" && computerChoice === "Rock") {
        playerScore += 1
        return "You Win! Paper beats Rock"
    }
    // if player is scissors and computer is paper, player wins
    if (playerChoice === "Scissors" && computerChoice === "Paper") {
        playerScore += 1
        return "You Win! Scissors beats Paper"
    }
    // if player is scissors and computer is rock, computer wins
    if (playerChoice === "Scissors" && computerChoice === "Rock") {
        computerScore += 1
        return "You lose! Rock beats Scissors"
    }
    else {
        return "I'm sorry, looks like you didn't type in a valid choice."
    }
}
// create a game function where you can play 5 times, it keeps score, and it declares a winners
let playerScore = 0
let computerScore = 0
let playerInput = ""
function game() {
    // for loop 5 times
    for(let i = 0; i < 5; i++){
        playerInput = prompt("Please choose Rock, Paper, or Scissors.", "Rock")
        let playerChoice = capitalize(playerInput)
        console.log(playRound(playerChoice, getComputerChoice()))
    }
    // see who has more points and declare a winner
    if (playerScore > computerScore) {
        console.log("Congratulations, you beat the computer!")
    }
    else {
        console.log("Looks like you lost to the computer, better luck next time.")
    }
}
// make a button that has an event that triggers one round of the game and records the results
// get all elements in the dom
let compChoiceSpan = document.querySelector(".computerChoice")
let playerChoiceSpan = document.querySelector(".playerChoice")
let resultSpan = document.querySelector(".result")
let compScoreSpan = document.querySelector(".compScore")
let playerScoreSpan = document.querySelector(".playerScore")
let buttons = document.querySelectorAll("button")

// add evenet listener for click and then execute one round
buttons.forEach(item => {
    item.addEventListener('click', e => {
        // if you select this button, this button is your selection
        playerInput = item.className;
        let playerChoice = capitalize(playerInput);
        let computerSelection = getComputerChoice();
        // play round
        resultSpan.textContent = playRound(playerChoice, computerSelection);
        // check for a winner
        checkWinner();
        // show all the changes on the page
        setTextContent(playerChoice, computerSelection);
    })
})

// show all the changes on the page
function setTextContent(playChoice, compChoice) {
    compChoiceSpan.textContent = compChoice;
    playerChoiceSpan.textContent = playChoice;
    compScoreSpan.textContent = computerScore;
    playerScoreSpan.textContent = playerScore;

}

function checkWinner(){
    if (playerScore === 5) {
        alert("Congratulations! you win the game!");
        reset();
    }
    if (computerScore === 5) {
        alert("Wow! Looks like you lost the game to the computer!");
        reset()
    }
}

function reset(){
    playerScore = 0;
    computerScore = 0;
}