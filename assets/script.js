// vars set to query selectors to manipulate DOM
var countdownEl = document.getElementById("countdown-box");
var viewEl = document.getElementById("view-score");

var startCon = document.getElementById("start-page");
var startBtn = document.getElementById("start-btn");


var questionCon = document.getElementById("question-card");
var questionEl = document.getElementById("question");
var answerBtn = document.getElementById("ans");

var gameOver = true;
var timeLeft = 60;
var timeInterval;

//start button click event listener

startBtn.addEventListener("click", startQuiz());

//game counter time el

function timerFun() {
    var timeInterval = setInterval(function () {
        timeLeft--;
        countdownEl.textContent = timeLeft + " seconds left";
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            gameFinished();
        }
    }, 1000);
}

//start game function
function startQuiz() {
    startCon.classList.add("hide");
    shuffleQues = questions.sort(() => Math.random() - .5)
    currentQues = 0
    questionCon.classList.remove("hide");
    timerFun();
    nextQues();
}

//after answer is selected, go to next question
function nextQues() {
    resetState();
    showQues(shuffleQues[currentQues]);
};

//DOM manipulation that displays questions
function showQues(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsEl.appendChild(button)
    })
};
//reset state

//select answer element target

