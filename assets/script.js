// vars set to query selectors to manipulate DOM
//header elements
var countdownEl = document.getElementById("countdown-box");
var viewEl = document.getElementById("view-score");
//start page elements
var startCon = document.getElementById("start-page");
var startBtn = document.getElementById("start-btn");
//question page elements
var questionCon = document.getElementById("question-card");
var questionEl = document.getElementById("question");
var ansBtns = document.getElementById("answer-btns");
var ans = document.querySelector(".ans");
//results page elements
var resultsCon = document.getElementById("end-page");
var score = document.getElementById("player-score");
var initialInput = document.getElementById("initials");
var submitInitial = document.getElementById("submit-btn")
//high scores page elements
var leaderCon = document.getElementById("leaderboard");
var savedCon = document.getElementById("saved")
var savedInitial = document.getElementById("in");
var newGameBtn = document.getElementById("new-game");
var clearBtn = document.getElementById("clear");



//question var as an array that contains object representing each question, the possible ans, and boolean of whether the answer is the correct choice
var quesArr = [
    {
        prompt: "which of the following is considered a correct example of camel case for variable naming?",
        answers: [
            { text: "super-cool-new-variable-name", correct: false },
            { text: "superCoolNewVariableName", correct: true },
            { text: "supercool.newvariable.name", correct: false },
            { text: "Supercoolnewvariablename", correct: false },
        ]
    },
    {
        prompt: "what is the correct way to refer to a class in CSS?",
        answers: [
            { text: "$(“class”) {}", correct: false },
            { text: "#class {}", correct: false },
            { text: ".class {}", correct: true },
            { text: "-class {}", correct: false },
        ]
    },
    {
        prompt: "which of the following allows you to provide instructions when the conditions are true AND when they are false?",
        answers: [
            { text: "if/else", correct: true },
            { text: "first/then", correct: false },
            { text: "first/else", correct: false },
            { text: "if/then", correct: false },
        ]
    },
    {
        prompt: "which of the following can be stored in the ::root pseudoclass in CSS?",
        answers: [
            { text: "text-align", correct: false },
            { text: "border-radius", correct: false },
            { text: "neither a or b", correct: false },
            { text: "both a and b", correct: true },
        ]
    },
    {
        prompt: "which of the following would you NOT expect to see when using the “typeof” operator?",
        answers: [
            { text: "string", correct: false },
            { text: "undefined", correct: false },
            { text: "boolean", correct: false },
            { text: "null", correct: true },
        ]
    },
    {
        prompt: "what is the correct range of numbers returned in the math.random() method?",
        answers: [
            { text: "0.0 to 1.0", correct: true },
            { text: "0 to 100", correct: false },
            { text: "1.0 to 2.0", correct: false },
            { text: "-1.0 to 1.0", correct: false },
        ]
    },
    {
        prompt: "what is the correct key code range for letters “A” - “Z” on the keyboard?",
        answers: [
            { text: "0 - 25", correct: false },
            { text: "1 - 26", correct: false },
            { text: "40 - 65", correct: false },
            { text: "65 - 90", correct: true },
        ]
    },
    {
        prompt: "which of the following is NOT an example of a self closing tag?",
        answers: [
            { text: "<br />", correct: false },
            { text: "<hr />", correct: false },
            { text: "<h1 />", correct: true },
            { text: "<img />", correct: false },
        ]
    },
    {
        prompt: "which of the following is used to remove any leading and trailing spaces?",
        answers: [
            { text: "clear()", correct: false },
            { text: "cut()", correct: false },
            { text: "trim()", correct: true },
            { text: "snip()", correct: false },
        ]
    },
    {
        prompt: "which comparison operator means “not equal”?",
        answers: [
            { text: "?=", correct: false },
            { text: "!=", correct: true },
            { text: "*=", correct: false },
            { text: "^=", correct: false },
        ]
    }
];


var gameOver = true;
var timeLeft = 80;
var timeInterval;

//start button click event listener
startBtn.addEventListener("click", startQuiz);
//event listener for new game
// newGameBtn.addEventListener("click", restartQuiz);

//game counter time el
function timerFun() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        countdownEl.textContent = timeLeft + " seconds left";
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            gameOver = true;
            // gameOver();
        }
    }, 1000);
}

//start game function
function startQuiz() {
    startCon.classList.add("hide");
    //currentQues var works to return the question at the desired index
    currentQues = 0;
    questionCon.classList.remove("hide");
    timerFun();
    showQues(quesArr[currentQues]);
}

//after answer is selected, go to next question

//DOM manipulation that displays questions
function showQues(question) {
    setQues(question.prompt);
};

function setQues(question) {
    document.getElementById("question").textContent = question;

}


//reset state

//select answer element target

// startBtn.addEventListener("click", startQuiz());