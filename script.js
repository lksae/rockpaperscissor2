let humanScore = 0;
let computerScore = 0;
let counter = 0;


function getComputerChoice() {
    let computerChoice = "not defined";
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        computerChoice = "Rock";
    } else if (randomNumber < 0.66){
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissor";
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("What is your choice?");
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    let inputHuman = humanChoice.toLowerCase();
    let inputComputer = computerChoice.toLowerCase();

    if (inputHuman == "rock" && inputComputer == "scissor") {
        console.log("You won! Rock beats scissor.");
        humanScore += 1;
    } else if (inputHuman == "scissor" && inputComputer == "paper") {
        console.log("You won! Scissor beats paper.");
        humanScore += 1;
    } else if (inputHuman == "paper" && inputComputer == "rock") {
        console.log("You won! Paper beats rock.");
        humanScore += 1;
    } else if (inputHuman == "scissor" && inputComputer == "rock") {
        console.log("You lost! Rock beats scissor.");
        computerScore += 1;
    } else if (inputHuman == "paper" && inputComputer == "scissor") {
        console.log("You lost! Scissor beats paper.");
        computerScore += 1;
    } else if (inputHuman == "rock" && inputComputer == "paper") {
        console.log("You lost! Paper beats rock.");
        computerScore += 1;
    } else {
        console.log ("It's a draw. How lame.")
    }
    counter += 1;
}

/*
function playGame(){
    while (counter < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("Congrats! You beat the computer")
    } else if (humanScore < computerScore) {
        console.log("How could you lose against a computer? I am so ashamed...")
    } else {
        console.log("It's a draw. Again...")
    }
}*/

//playGame()
        //console.log(humanScore);
        //console.log(computerScore);

const pressedButton = document.querySelector('#choices');
const humanScoreText = document.querySelector("#humanScore");
const computerScoreText = document.querySelector("#computerScore");

pressedButton.addEventListener("click", function(event) {
    let computerChoice = getComputerChoice();
    let humanChoice = "";
    
    
    let target = event.target;

    switch(target.id) {
        case "rock": 
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissor":
            humanChoice = "scissor";
            break;
        }
    playRound(humanChoice,computerChoice);

    humanScoreText.textContent = "Your Score: " + humanScore;
    computerScoreText.textContent = "Computer Score: " + computerScore;

    computerChoiceDiv = document.querySelector("#computerChoice");
    computerChoiceDiv.textContent = "Computer choose: " + computerChoice;

    if(computerScore == 5) {
        alert("Computer won! Refresh the page to play again.")
    }

    if(humanScore == 5) {
        alert("You won! Refresh the page to play again.")
    }

    })
