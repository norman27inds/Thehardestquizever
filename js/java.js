
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


let questions = [
  {
    question: "What commonly used data types do not include?",
    choiceA: "strings",
    choiceB: "booleans",
    choiceC: "numbers",
    choiceD: "alerts",
    correct: "D",
  },
  {
    question: "Arrays in javascript can be used to store___",
    choiceA: "numbers and strings",
    choiceB: "other arrays",
    choiceC: "booleans",
    choiceD: "all of the above",
    correct: "D",
  },
  {
    question: "The condition in an if/else statement is enclosed within___",
    choiceA: "quotes",
    choiceB: "curly brackets",
    choiceC: "parentheses",
    choiceD: "square brackets",
    correct: "C",
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables.",
    choiceA: "commas",
    choiceB: "curly brackets",
    choiceC: "quotes",
    choiceD: "parenthesis",
    correct: "C",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is?",
    choiceA: "Javascript",
    choiceB: "terminal/bash",
    choiceC: "for loop",
    choiceD: "console log",
    correct: "D",
  },
  
];



const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; 

let TIMER;
let score = 0;


function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);


function startQuiz() {

  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1500); 
}


function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}



function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;

    count++;
  } else {
    count = 0;
   
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      
      clearInterval(TIMER);
      scoreRender();
    }
  }
}



function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    score++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }
  count = -10;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    clearInterval(TIMER);
    scoreRender();
  }
}


function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";

}


function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";

}


function scoreRender() {
  scoreDiv.style.display = "block";



  const scorePerCent = Math.round((100 * score) / questions.length);
 
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}
