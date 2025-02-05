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

function getHumanChoice(){
    var userstring = prompt("Enter Your Choice");
    return userstring;
}


function playGame(){
    function playRound(humanChoice,ComputerChoice){
        humanChoice.toLowerCase();
    
        if(humanChoice == 'rock' && ComputerChoice == 'Scissor'){
            console.log("You Win! Rock beats Scissor")
            humanScore += 1;
        }
        else if(humanChoice == 'scissor' && ComputerChoice == 'Paper'){
            console.log("You Win! Scissor beats Paper")
            humanScore += 1;
        }
        else if(humanChoice == 'paper' && ComputerChoice == 'Rock'){
            console.log("You Win! Paper beats Rock")
            humanScore += 1;
        }
        else if(humanChoice == 'rock' && ComputerChoice == 'Paper'){
            console.log("You Loose! Paper beats Rock")
            computerScore +=1
        }
        else if(humanChoice == 'scissor' && ComputerChoice == 'Rock'){    
            console.log("You Loose! Rock beats Scissor")
            computerScore +=1
        }
        else if(humanChoice == 'paper' && ComputerChoice == 'Scissor'){
            console.log("You Loose! Scissor beats Paper")
            computerScore +=1
        }
        else{
            console.log("Draw");
        }
    
    }

    for(i=0;i<5;i++){
        playRound(getHumanChoice(),getComputerChoice());
    }

    if(humanScore > computerScore){
        console.log("You won!")
    }
    else if(computerScore > humanScore){
        console.log("Computer Wins!")
    }
    else{
        console.log("Draw")
    }

    console.log("Your Score = " + humanScore + "  Computer Score = "+ computerScore);

}


playGame();
