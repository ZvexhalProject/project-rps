let options=["rock","paper","scissors"];
let winsUser=0;
let winsComputer=0;

function computerPlay(){
    return options[Math.floor(Math.random()*3)];
}

function playRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(!options.includes(playerSelection)){
        return alert("Choose rock, paper, or scissors!")
    }
    if(playerSelection==computerSelection){
        return (`A Draw! Both of you chose ${playerSelection}`)
    } else if(playerSelection=="rock" && computerSelection =="paper"){
        winsUser++;
        return (`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection =="paper" && computerSelection =="rock"){
        winsUser++;
        return (`You Win! ${playerSelection} beats ${computerSelection}`)
    } else if (playerSelection =="scissors" && computerSelection =="paper"){
        winsUser++;
        return (`You Win! ${playerSelection} beats ${computerSelection}`)
    } else {
        winsComputer++;
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)
    }
}

function game(){
    for(let i=0;i<5;i++){
        console.log(playRound(prompt("Chose your Input"),computerPlay()))
    }
    (winsUser>winsComputer)?console.log(`You won after 5 rounds with a score of ${winsComputer} to ${winsUser}`):console.log(`You lost after 5 rounds with a score of ${winsComputer} to ${winsUser}`)
}