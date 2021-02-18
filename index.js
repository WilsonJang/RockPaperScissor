
let player = 0;
let computer = 0;


function computerPlay() {
    const hands = ["rock", "paper", "scissor"];

const random = Math.floor(Math.random() * hands.length);
//console.log(random, hands[random]);
return hands[random]
}


function playRound(playerSelection, computerSelection) {
    console.log("computer chose: " ,computerSelection)
    console.log("player chose: ", playerSelection)
    if (playerSelection==computerSelection) {
        return "tie";
    } else if (
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) {
        computer++;
        return "Computer wins";
    
        } else {
           player++;
        return "player wins";

        } 
               
    }

function game() {
    while (player < 5 && computer < 5){
        playRound(playerSelection,computerSelection);
        computerSelection=computerPlay();
        console.log("playerScore: ",player)
        console.log("computerScore: ",computer)
    }
    
      //console.log(playRound(playerSelection,computerSelection))
    


    if (player == 5){
        return "winner"

        
        
    
    }else if (computer == 5){
        return "loser"
    }
}




const playerSelection = "rock";
let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection))
console.log (game())