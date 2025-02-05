var humanScore=0 , computerScore =0;
function getComputerChoice(){
    var number = Math.random();
    var string = "";
    if(number < 0.34){
        string = "Rock";
    }
    else if(number <0.67){
        string = "Paper";
    }
    else{
        string = "Scissor";
    }
    return string;
}

const resultDiv = document.createElement("div");
resultDiv.classList.add("results");
document.body.appendChild(resultDiv);

function displayResult(message) {
    resultDiv.innerHTML = message;
}



const rock = document.querySelector(".Rock");
const paper = document.querySelector(".Paper");
const scissor = document.querySelector(".Scissor");

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            displayResult("You won! <br> Final Score: Your Score = " + humanScore + " | Computer Score = " + computerScore);
        } else {
            displayResult("Computer Wins! <br> Final Score: Your Score = " + humanScore + " | Computer Score = " + computerScore);
        }
        
        // Reset scores for a new game
        humanScore = 0;
        computerScore = 0;
    }
}


function playRound(humanChoice){
        let ComputerChoice = getComputerChoice();
        let message = '';
    
        if(humanChoice == 'rock' && ComputerChoice == 'Scissor'){
            message = `You Win! ${humanChoice} beats ${ComputerChoice}`;
            humanScore += 1;
        }
        else if(humanChoice == 'scissor' && ComputerChoice == 'Paper'){
            message = `You Win! ${humanChoice} beats ${ComputerChoice}`;
            humanScore += 1;
        }
        else if(humanChoice == 'paper' && ComputerChoice == 'Rock'){
            message = `You Win! ${humanChoice} beats ${ComputerChoice}`;
            humanScore += 1;
        }
        else if(humanChoice == 'rock' && ComputerChoice == 'Paper'){
            message = `You Lose! ${ComputerChoice} beats ${humanChoice}`;
            computerScore +=1
        }
        else if(humanChoice == 'scissor' && ComputerChoice == 'Rock'){    
            message = `You Lose! ${ComputerChoice} beats ${humanChoice}`;
            computerScore +=1
        }
        else if(humanChoice == 'paper' && ComputerChoice == 'Scissor'){
            message = `You Lose! ${ComputerChoice} beats ${humanChoice}`;
            computerScore +=1
        }
        else{
            message = "Draw";
        }
        displayResult(`${message} <br> Score: You = ${humanScore} | Computer = ${computerScore}`);
        checkWinner();
    
    }

rock.addEventListener("click", () => {
        playRound("rock");   
    })

paper.addEventListener("click", () => {
        playRound("paper") 
    })
    

scissor.addEventListener("click", () => {
        playRound("scissor")  
    })