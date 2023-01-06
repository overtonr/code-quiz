
var startPage = document.querySelector("#start-page");
var startButton = document.querySelector("#start-btn");
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

//when a question is answered, a new question is presented
//an incorrect guess subtracts 5 seconds from the clock
//game ends when either the time reaches 0 OR all questions are answered
//when game is over, you can save initials and score
// var gameBody = document.querySelector("body");


startButton.addEventListener("click", startCountdown());

//Start button: starts the quiz: starts the timer
    function startCountdown(){
        var timeInterval = setInterval (function() {
            timeLeft--;
            countdownBox.textContent = "time left: " + timeLeft + " secs";
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            gameFinished();
        }
        },1000);
    }

//Questions displayed
//Iterates through each question and its options
//Iterates through one at a time until either all the questions are answered or the timer runs out
questions = {
    question: "which of the following is considered a correct example of camel case for variable naming?" [
        {choices: ["super-cool-new-variable-name","superCoolNewVariableName","supercool.newvariable.name","Supercoolnewvariablename"],
        correctChoice:"superCoolNewVariableName",
        }],
    question: "what is the correct way to refer to a class in CSS?"[
        {choices: ["$(“class”) {}","#class {}", ".class {}", "-class {}"],
        correctChoice:".class{}",
        }],
    question: "which of the following allows you to provide instructions when the conditions are true AND when they are false?" [
        {choices: ["if/else", "first/then", "first/else", "if/then"],
        correctChoice:"if/else",
        }],
    question: "which of the following can be stored in the ::root pseudoclass in CSS?" [
        {choices: ["text-align","border-radius","neither","both"],
        correctChoice:"both",
        }],
    question: "which of the following would you NOT expect to see when using the “typeof” operator?" [
        {choices: ["string","undefined","boolean","null"],
        correctChoice:"null",
        }],
    question: "what is the correct range of numbers returned in the math.random() method?" [
        {choices: ["0.0 to 1.0","0.0 to 100", "1.0 to 2.0","-1.0 to 1.0"],
        correctChoice:"0.0 to 1.0",
        }],
    question: "wwhat is the correct key code range for letters “A” - “Z” on the keyboard?" [
        {choices: ["0 to 25","1-26","40-65","65-90"],
        correctChoice:"65-90",
        }],
    question: "which of the following is NOT an example of a self closing tag?" [
        {choices: ["<br />","<hr />","<h1 />","<img />"],
        correctChoice:"<h1 />",
        }],
    question: "which of the following is used to remove any leading and trailing spaces?" [
        {choices: ["clear()","cut()", "trim()","snip()"],
        correctChoice:"trim()",
        }],
    question: "which comparison operator means “not equal”?" [
        {choices: ["?=", "!=", "*=","^="],
        correctChoice:"!=",
        }],
}

//function that decrements 10 seconds from time from the countdown if the correctChoice is not chosen and then ...
// if correct choice is clicked, then move on to the next question in the list
// else take 10 seconds off of the time and then move on to the next question on the list


function resetGame(){
    gameOver = false;
    timeLeft = 60;
//something to do with the array of questions (starting from the begining or "deleting"(?) all of the record of any progress if the timer runs out)
    clearInterval(timeInterval);
//the ability to start the game again with the start button
}

//Using JSON.strigify(), converts object into a string
//store string into the localStorage as a key-value pair

//localStorage.setItem("playerInitialsStrigify",JSON.stringify(playerInitials));
//localStorage.setItem("playerScoreStrigify",JSON.stringify(playerScore));

// function enterLeaderboard();
//     if ((timeLeft !== 0) && gameOver) {
//         document.getElementById("initials-input");
//         //something to do with the time left(the score);
//     }

//submitButton.addEventListener("click",function(event)) {
//     event.preventDefault();
//     saveRanking()?;
//     enterLeaderboard()?;
// });


//scores and initials stored, (ranked with highest score at the top)
//option to clear rankings

//todo:
//how to set default elements when page is loaded
//game starts and only one question is displayed at a time
//hide? elements that are not in use