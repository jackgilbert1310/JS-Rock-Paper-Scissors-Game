// Set up variables
var countdownTimerEl = document.getElementById('countdownTimer');
var startBtnEl = document.getElementById('startBtn');
var optionsBlockEl = document.getElementById('options');
var userScoreEl = document.getElementById('userScore');
var oppScoreEl = document.getElementById('oppScore');
var confirmedOptionTextEl = document.getElementById('confirmedOptionText');
var oppConfirmedOptionTextEl = document.getElementById('oppConfirmedOptionText');

var oppConfirmedOption = "";
var confirmedOption = "";
var options = ["rock", "paper", "scissors"];

var userScore = 0;
var oppScore = 0;

// var canChoose = false;

// Set up functions
function startTimer() {
    setTimeout(() => {
        countdownTimerEl.innerHTML = "3";
        startBtnEl.style.display = "none";
    }, 0);
    setTimeout(() => { countdownTimerEl.innerHTML = "2"; }, 1000);
    setTimeout(() => { countdownTimerEl.innerHTML = "1"; }, 2000);
    setTimeout(() => {
        countdownTimerEl.innerHTML = "Go!";
        optionsBlockEl.style.display = "block";
        // canChoose = true;
    }, 3000);
}

function setOption(option) {
    if (option == "rock") {
        confirmedOption = "rock";
    }
    if (option == "paper") {
        confirmedOption = "paper";
    }
    if (option == "scissors") {
        confirmedOption = "scissors";
    }
    confirmedOptionTextEl.innerHTML = `You have chosen: ${confirmedOption}!`;
    oppChoseOption();
}

function oppChoseOption() {
    var randomPos = Math.floor(Math.random() * options.length);
    oppConfirmedOption = options[randomPos];
    oppConfirmedOptionTextEl.innerHTML = `Your opponent has chosen: ${oppConfirmedOption}!`;
    checkWhoWon();
}

function checkWhoWon() {
    // Draw cases
    if (confirmedOption == oppConfirmedOption) {
        console.log('You have drawn!');
    }
    // User win cases
    if (confirmedOption == "rock" && oppConfirmedOption == "scissors") {
        userScore++;
    }
    if (confirmedOption == "paper" && oppConfirmedOption == "rock") {
        userScore++;
    }
    if (confirmedOption == "scissors" && oppConfirmedOption == "paper") {
        userScore++;
    }
    // Opp win cases
    if (oppConfirmedOption == "rock" && confirmedOption == "scissors") {
        oppScore++;
    }
    if (oppConfirmedOption == "paper" && confirmedOption == "rock") {
        oppScore++;
    }
    if (oppConfirmedOption == "scissors" && confirmedOption == "paper") {
        oppScore++;
    }
    updateScore();
}

function updateScore() {
    userScoreEl.innerHTML = `You: ${userScore}`;
    oppScoreEl.innerHTML = `Opp : ${oppScore}`;
}

// Set defaults / Run functions / Set event listeners
optionsBlockEl.style.display = "none";
startBtnEl.addEventListener("click", startTimer);