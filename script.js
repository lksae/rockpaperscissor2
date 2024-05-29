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

console.log(getComputerChoice())