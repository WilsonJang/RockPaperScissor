
let player = 0;
let computer = 0;



function rock() {
    playerSelection="rock";
    game();

}
function paper() {
    playerSelection="paper";
    game();
}

function scissor() {
    playerSelection="scissor";
    game();
}



//this function chooses random selection to be computers hand
function computerPlay() {
    const hands = ["rock", "paper", "scissor"];

const random = Math.floor(Math.random() * hands.length);
//console.log(random, hands[random]);
return hands[random]
}


//determines winner
function playRound(playerSelection, computerSelection) {
    console.log("computer chose: " ,computerSelection)
    console.log("player chose: ", playerSelection)
    if (playerSelection==computerSelection) {
        document.getElementById("computerChose").innerHTML = computerSelection;
        document.getElementById("playerChose").innerHTML = playerSelection;
        document.getElementById("result").innerHTML = "Its a tie round!";
    } else if (
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "scissor" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
      ) {
        computer++;
        document.getElementById("computerChose").innerHTML = computerSelection;
        document.getElementById("playerChose").innerHTML = playerSelection;
        document.getElementById("result").innerHTML = "Computer wins the round!";
    
        } else {
           player++;
        document.getElementById("computerChose").innerHTML = computerSelection;
        document.getElementById("playerChose").innerHTML = playerSelection;
        document.getElementById("result").innerHTML = "Player win the round!";
        } 
               
    }

function game() {
    if (player>=5 || computer>=5) {
        return;
    }
    
        playRound(playerSelection,computerSelection); //re runs the game
        document.getElementById("playerScore").innerHTML = player;
        document.getElementById("computerScore").innerHTML = computer;
        computerSelection=computerPlay(); //chooses new hand
        console.log("playerScore: ",player)
        console.log("computerScore: ",computer)

    
      //console.log(playRound(playerSelection,computerSelection))

    if (player == 5){
        document.getElementById("final").innerHTML = "PLAYER WINS THE GAME! Congratulations!"; 
        document.getElementById("playagain").style.visibility = "visible"; 
        
    }else if (computer == 5){
        document.getElementById("final").innerHTML = "COMPUTER WINS THE GAME! Try again!"
        document.getElementById("playagain").style.visibility = "visible"; 
    }
}
function playagain() { //for future play again
    player = 0;
    computer = 0;
    computerSelection=computerPlay();
    playerSelection="";
    document.getElementById("playerScore").innerHTML = player;
    document.getElementById("computerScore").innerHTML = computer;
    document.getElementById("final").innerHTML = "";
    document.getElementById("computerChose").innerHTML = "";
    document.getElementById("playerChose").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("playagain").style.visibility = "hidden"; 
}

let playerSelection = "";
let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection))
