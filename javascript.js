let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    let randomString = Math.ceil(Math.random()*3);
    let randomChoice = "";
    switch (randomString){
        case 1:
            randomChoice = "rock";
            break;
        case 2:
            randomChoice = "paper";
            break;
        case 3:
            randomChoice = "scissor";
            break;
        default:
            break;
    }
    return randomChoice
}

function getHumanChoice() {
    let humanAnswer = prompt("Please enter a value: ")
    return humanAnswer.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    console.log(`Player chose ${humanChoice} and the computer chose ${computerChoice}`);
    if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("It's a draw!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("The Computer wins!");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissor"){
        console.log("The Player wins!");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("The Player wins!");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("It's a draw!");
    }
    else if(humanChoice === "paper" && computerChoice === "scissor"){
        console.log("The Computer wins!");
        computerScore++;
    }
    else if(humanChoice === "scissor" && computerChoice === "rock"){
        console.log("The Computer wins!");
        computerScore++;
    }
    else if(humanChoice === "scissor" && computerChoice === "paper"){
        console.log("The Player wins!");
        humanScore++;
    }
    else if(humanChoice === "scissor" && computerChoice === "scissor"){
        console.log("It's a draw!")
    }
    else  {
        console.log("Invalid input");
    }
}

function playGame (){
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore){
        console.log("You Win!")
        console.log("The final score is player = " + humanScore + " and computer = " + computerScore);
    }
    else if (humanScore < computerScore){
        console.log("Computer Win!")
        console.log("The final score is player = " + humanScore + " and computer = " + computerScore);
    }
    else {
        console.log("Game ends in a draw!")
        console.log("The final score is player = " + humanScore + " and computer = " + computerScore);
    }
}

playGame();



