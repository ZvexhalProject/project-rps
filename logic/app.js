let options = ["Rock", "Paper", "Scissors"];
let winsUser = 0;
let winsComputer = 0;
let currentResult = document.querySelector(".resultText");
let sumResult = document.querySelector(".resultScore");
let modal= document.querySelector(".modal")
let modaltext=document.querySelector(".modalText");


function resultcheck(winsUser, winsComputer) {
    if(winsComputer==5){
        sumResult.textContent = `Current score is ${winsUser}:${winsComputer} in favor of the computer`;
        modal.style.display = "flex";
        modaltext.textContent =`You lose the competition! The Computer won with a score of ${winsComputer}:${winsUser}`
        return;
    }
    if(winsUser==5){
        sumResult.textContent = `Current score is ${winsUser}:${winsComputer} in favor of you`;
        modal.style.display = "flex";
        modaltext.textContent =`You win the competition! You won with a score of ${winsUser}:${winsComputer}`
        return;
    }
    return (winsUser > winsComputer) ? sumResult.textContent = `Current score is ${winsUser}:${winsComputer} in favor of you` : (winsUser < winsComputer) ? sumResult.textContent = `Current score is ${winsUser}:${winsComputer} in favor of the computer` : sumResult.textContent = `Current score is ${winsUser}:${winsComputer} in favor of no one`;
}

function computerPlay() {
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    resultcheck(winsUser, winsComputer);
    if (!options.includes(playerSelection)) {
        return currentResult.textContent = "Choose Rock, Paper, or Scissors!";
    }
    if (playerSelection == computerSelection) {
        resultcheck(winsUser, winsComputer);
        return currentResult.textContent = `A Draw! Both of you chose ${playerSelection}`;
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        winsUser++;
        resultcheck(winsUser, winsComputer);
        return currentResult.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        winsUser++;
        resultcheck(winsUser, winsComputer);
        return currentResult.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        winsUser++;
        resultcheck(winsUser, winsComputer);
        return currentResult.textContent = `You win this round! ${playerSelection} beats ${computerSelection}`;
    } else {
        winsComputer++;
        resultcheck(winsUser, winsComputer);
        return currentResult.textContent = `You Lose this round! ${computerSelection} beats ${playerSelection}`;
    }


}

// function game(){
//     for(let i=0;i<5;i++){
//         console.log(playRound(prompt("Chose your Input"),computerPlay()))
//     }
//     (winsUser>winsComputer)?console.log(`You won after 5 rounds with a score of ${winsComputer} to ${winsUser}`):console.log(`You lost after 5 rounds with a score of ${winsComputer} to ${winsUser}`)
// }


const optionRock = document.querySelector(".rockDiv");
optionRock.addEventListener("click", () => {
    console.log(playRound("Rock", computerPlay()))
});

const optionPaper = document.querySelector(".paperDiv");
optionPaper.addEventListener("click", () => {
    console.log(playRound("Paper", computerPlay()))
});

const optionScissors = document.querySelector(".scissorsDiv");
optionScissors.addEventListener("click", () => {
    console.log(playRound("Scissors", computerPlay()))
});


const restart = document.querySelector(".modalButton");
restart.addEventListener("click", () => {
    modal.style.display = "none";
    currentResult.textContent="Who will win?";
    sumResult.textContent="Current score is 0:0 in favor of no one";
    winsUser = 0;
    winsComputer = 0;
});
