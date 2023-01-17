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
var submitInitial = document.getElementById("submit-btn");
//high scores page elements
var leaderCon = document.getElementById("leaderboard");
var savedCon = document.getElementById("saved");
var savedInitial = document.getElementById("in");
var newGameBtn = document.getElementById("new-game");
var clearBtn = document.getElementById("clear");

var ansReturn = document.getElementById("ans-return");

//question var as an array that contains object representing each question, the possible ans, and boolean of whether the answer is the correct choice
var quesArr = [
  {
    prompt:
      "which of the following is considered a correct example of camel case for variable naming?",
    answers: [
      { text: "super-cool-new-variable-name", correct: false },
      { text: "superCoolNewVariableName", correct: true },
      { text: "supercool.newvariable.name", correct: false },
      { text: "Supercoolnewvariablename", correct: false },
    ],
    correctAns: "superCoolNewVariableName",
  },
  {
    prompt: "what is the correct way to refer to a class in CSS?",
    answers: [
      { text: "$(“class”) {}", correct: false },
      { text: "#class {}", correct: false },
      { text: ".class {}", correct: true },
      { text: "-class {}", correct: false },
    ],
    correctAns: ".class {}",
  },
  {
    prompt:
      "which of the following allows you to provide instructions when the conditions are true AND when they are false?",
    answers: [
      { text: "if/else", correct: true },
      { text: "first/then", correct: false },
      { text: "first/else", correct: false },
      { text: "if/then", correct: false },
    ],
    correctAns: "if/else",
  },
  {
    prompt:
      "which of the following can be stored in the ::root pseudoclass in CSS?",
    answers: [
      { text: "text-align", correct: false },
      { text: "border-radius", correct: false },
      { text: "neither a or b", correct: false },
      { text: "both a and b", correct: true },
    ],
    correctAns: "both a and b",
  },
  {
    prompt:
      "which of the following would you NOT expect to see when using the “typeof” operator?",
    answers: [
      { text: "string", correct: false },
      { text: "undefined", correct: false },
      { text: "boolean", correct: false },
      { text: "null", correct: true },
    ],
    correctAns: "null",
  },
  {
    prompt:
      "what is the correct range of numbers returned in the math.random() method?",
    answers: [
      { text: "0.0 to 1.0", correct: true },
      { text: "0 to 100", correct: false },
      { text: "1.0 to 2.0", correct: false },
      { text: "-1.0 to 1.0", correct: false },
    ],
    correctAns: "0.0 to 1.0",
  },
  {
    prompt:
      "what is the correct key code range for letters “A” - “Z” on the keyboard?",
    answers: [
      { text: "0 - 25", correct: false },
      { text: "1 - 26", correct: false },
      { text: "40 - 65", correct: false },
      { text: "65 - 90", correct: true },
    ],
    correctAns: "65 - 90",
  },
  {
    prompt: "which of the following is NOT an example of a self closing tag?",
    answers: [
      { text: "<br />", correct: false },
      { text: "<hr />", correct: false },
      { text: "<h1 />", correct: true },
      { text: "<img />", correct: false },
    ],
    correctAns: "<h1 />",
  },
  {
    prompt:
      "which of the following is used to remove any leading and trailing spaces?",
    answers: [
      { text: "clear()", correct: false },
      { text: "cut()", correct: false },
      { text: "trim()", correct: true },
      { text: "snip()", correct: false },
    ],
    correctAns: "trim()",
  },
  {
    prompt: "which comparison operator means “not equal”?",
    answers: [
      { text: "?=", correct: false },
      { text: "!=", correct: true },
      { text: "*=", correct: false },
      { text: "^=", correct: false },
    ],
    correctAns: "!=",
  },
];

var timeLeft = 80;
var timeInterval;
var currentQues;

//start button click event listener
startBtn.addEventListener("click", startQuiz);
//event listener for new game
// newGameBtn.addEventListener("click", restartQuiz);

//game counter time el
function timerFun() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    countdownEl.textContent = timeLeft + " seconds left";
    if (timeLeft === 0 || currentQues === quesArr.length - 1) {
      clearInterval(timeInterval);
      console.log("3");
      countdownEl.textContent = "time up!";
      end();
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

//DOM manipulation that displays questions
function showQues(question) {
  setQues(question.prompt);
  setAns(question.answers);
}

//text content set to questio
function setQues(question) {
  questionEl.textContent = question;
}

//appends button for each answer option
function setAns(ans) {
  //clears content before reappending buttons
  ansBtns.innerHTML = " ";
  for (i in ans) {
    var ansOpt = document.createElement("button");
    ansBtns.appendChild(ansOpt);
    ansOpt.setAttribute("class", "ans");
    ansOpt.textContent = ans[i].text;
    ansOpt.addEventListener("click", function (e) {
      ansSelect(e.target);
    });
  }
}

function ansSelect(target) {
//   if (currentQues === quesArr.length - 1 || timeLeft === 0) {
//     end();
//     clearInterval(timeInterval);
//     console.log("2");
//   } else{
  checkAns(target);
  nextQues();
  };

//after answer is selected, go to next question
function nextQues() {
  currentQues++;
  showQues(quesArr[currentQues]);
}

function checkAns(target) {
  //checks to see if selected ans is equal to correct ans
  if (target.textContent === quesArr[currentQues].correctAns) {
    ansReturn.textContent = "correct!";
  } else {
    ansReturn.textContent = "incorrect";
    //decrement time as a penalty for selecting wrong answer
    timeLeft -= 10;
  }
}

var finalScore;
  //reset state
// function finalRes(){
//     finalScore = timeLeft;
//     clearTimeout(timeInterval);
//     countdownEl.textContent = "quiz finished!";
//     score.textContent = "your final score is " + finalScore;
//     return;
// }
  function end() {
    // finalRes();
    questionCon.classList.add("hide");
    resultsCon.classList.remove("hide");
    currentQues = 0;
    finalScore = timeLeft;
    clearInterval(timeInterval);
    countdownEl.textContent = "quiz finished!";
    score.textContent = "your final score is " + finalScore;
  };


//   function showResults

//select answer element target
