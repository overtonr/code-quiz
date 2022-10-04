//Start button: starts the quiz: starts the timer, displays question
//when a question is answered, a new question is presented
//an incorrect guess subtracts 5 seconds from the clock
//game ends when either the time reaches 0 OR all questions are answered
//when game is over, you can save initials and score
var gameBody = document.querySelector("body");
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

