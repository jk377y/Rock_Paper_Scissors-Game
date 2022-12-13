let wins = 0;
let ties = 0;
let losses = 0;
let aiChoices = ["ROCK", "PAPER", "SCISSORS"];
let go = document.getElementById('go');
let userChoice = document.getElementById('userChoice');
let paper = document.getElementById('paper');
    function setPaper () {
    document.getElementById('userChoice').innerHTML = 'PAPER';
    }
    paper.addEventListener('click', setPaper);
let rock = document.getElementById('rock');
    function setRock () {
    document.getElementById('userChoice').innerHTML = 'ROCK';
    }
    rock.addEventListener('click', setRock);
let scissors = document.getElementById('scissors');
    function setScissors () {
    document.getElementById('userChoice').innerHTML = 'SCISSORS';
    }
    scissors.addEventListener('click', setScissors);
function aiPick () {
    let index = Math.floor(Math.random() * aiChoices.length);
    let aiChoice = aiChoices[index];
        document.getElementById('aiChoice').innerHTML = aiChoice;
    let userChoice = document.getElementById('userChoice');
    if ((userChoice.innerHTML == "ROCK" && aiChoice == "SCISSORS") || (userChoice.innerHTML == "PAPER" && aiChoice == "ROCK") || (userChoice.innerHTML == "SCISSORS" && aiChoice == "PAPER") ){wins++;}   
    else if (userChoice.innerHTML == aiChoice) {ties++;} 
    else {losses++;};
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('ties').innerHTML = ties;
        document.getElementById('losses').innerHTML = losses;
};
go.addEventListener('click', aiPick);
let resetScore = document.getElementById('resetScore');
    resetScore.addEventListener('click', () => {
    window.location.reload();
    });