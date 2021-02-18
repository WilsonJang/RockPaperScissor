
let player= 0;
let computer = 0;

function computerPlay() {
    choice = Math.floor(Math.random() * Math.floor(3));
   
    if (choice==0) {
        choice = "rock"
    }else if (choice==1) {
        choice = "paper"
    } else if (choice==2){
        choice = "sissor"
    } else {
    return choice;
    
}
console.log(choice)
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection==computerSelection) {
        return "tie";
    } else if 
        (playerSelection == "rock" && computerSelection == "paper"||
        playerSelection == "sissor" && computerSelection == "rock" ||
        playerSelection == "paper" && computerSelection == "sissor") 
        
        {
            computer ++;
        return "Computer wins";
    
        } else if 
            (playerSelection== "paper" && computerSelection == "rock"||
        playerSelection == "rock" && computerSelection == "sissor" ||
        playerSelection == "sissor" && computerSelection == "paper")
        {
            player ++;
        return "player wins";
        } else {
            return 0;
        }    
        
}

function game() {
    while (player < 5 && computer < 5){
        playRound(playerSelection,computerSelection)
        //console.log(player)
        //console.log(computer)
    }

    if (player == 5){
        return "winner"
        
    
    }else if (computer==5){
        return "loser"
    }else{
        return 0;
    }
}


const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection))
//console.log (game())