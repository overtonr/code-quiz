//Start button: starts the quiz: starts the timer, displays question
//when a question is answered, a new question is presented
//an incorrect guess subtracts 5 seconds from the clock
//game ends when either the time reaches 0 OR all questions are answered
//when game is over, you can save initials and score
// var gameBody = document.querySelector("body");
var startPage = document.querySelector("#start-page");
var startButton = document.querySelector(".start-game");
var gameBox = document.querySelector("#game-box");
var countdownBox = document.querySelector("#countdown-box");
var questionSection = document.querySelector("#question-section");
var answerChoices = document.querySelector("#answer-choices");
var endPage = document.querySelector("#end-page");
var initialsInput = document.querySelector("#initials-input");
var submitButton = document.querySelector("#submit-button");
var rankPage = document.querySelector("#rank-page");
var scoreRank = document.querySelector("#score-rank");
var clearScores = document.querySelector("#clear-scores");

var gameOver = true;
var timeLeft = 60;
var timeInterval;
//var localSavedScore = localStorage.getItem("initials","timeLeft")

startButton.addEventListener("click", game);

function resetGame(){
    gameOver = false;
    timeLeft = 60;
//something to do with the array of questions
}

function countdown(){
    if(!gameOver) {
        if (timeLeft > 0) {
            countdownBox.textContent = "time left: " + timeLeft;
//decrements time when time > 0
            timeLeft--;
        } else {
            gameOver = true;
//something to navigate to highsores page
        }
    }
}


