// Initial Data Questions
var question1 = {
  title: "Q1: Commonly used data types DO Not Include:",
  option1: ["1. strings", false],
  option2: ["2. booleans", false],
  option3: ["3. alerts", true],
  option4: ["4. numbers", false],
};
var question2 = {
  title:
    "Q2: The condition in an if / else statement is enclosed with ________.",
  option1: ["1. quotes", false],
  option2: ["2. curly brackets", false],
  option3: ["3. parenthesis", true],
  option4: ["4. square brackets", false],
};
var question3 = {
  title: "Q3: Arrays in JavaScript can be used to store ________.",
  option1: ["1. numbers and strings", false],
  option2: ["2. other arrays", false],
  option3: ["3. booleans", false],
  option4: ["4. all of the above", true],
};
var question4 = {
  title:
    "Q4: String values must be enclosed within ________ when being assigned to variables.",
  option1: ["1. commas", false],
  option2: ["2. curly brackets", false],
  option3: ["3. quotes", true],
  option4: ["4. parenthesis", false],
};

var question5 = {
  title:
    "Q5: A very useful tool used during development and debugging for printing content to the debugger is:",
  option1: ["1. JavaScript", false],
  option2: ["2. terminal/bash", false],
  option3: ["3. for loops", false],
  option4: ["4. console.log", true],
};

var questions = [question1, question2, question3, question4, question5];

var player = {
  initials: "",
  points: 0,
};
var playersCount = 0;

// Index Container >> Linked to Array Questions
var indexContainer = 0;

// Initial time assigned
var timerInterval;
var timeCount = 100;

// Get containers
var containerStartScreen = document.querySelector("#start-screen");
var containerQuestions = document.querySelector("#questions");
var containerEndScreen = document.querySelector("#end-screen");

// Import Audio
var correctAudio = new Audio("./sfx/correct.wav");
var incorrectAudio = new Audio("./sfx/incorrect.wav");

// Get Elements
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");
var ansBtn01 = document.querySelector("#btn01");
var ansBtn02 = document.querySelector("#btn02");
var ansBtn03 = document.querySelector("#btn03");
var ansBtn04 = document.querySelector("#btn04");
var titleQuestion = document.querySelector("#question-title");
var quizFooter = document.querySelector("#quiz-footer-result");
var quizFooterLine = document.querySelector("#quiz-footer-line");
var finalScore = document.querySelector("#final-score");
var clockTimer = document.querySelector("#clock");
var initialsPlayer = document.querySelector("#initials");

// Listen for a click events
startBtn.addEventListener("click", function () {
  setQuestions();
  containerStartScreen.setAttribute("class", "hide");
  containerQuestions.setAttribute("class", "");
  setTime();
});

ansBtn01.addEventListener("click", function () {
  let choice = questions[indexContainer - 1].option1[1];
  console.log("Choice >>" + choice + "  Index >>" + indexContainer);
  setQuestions();
  playSoundChoice(choice);
  setQuizResultFooter(choice);
});

ansBtn02.addEventListener("click", function () {
  let choice = questions[indexContainer - 1].option2[1];
  console.log("Choice >>" + choice + "  Index >>" + indexContainer);
  setQuestions();
  playSoundChoice(choice);
  setQuizResultFooter(choice);
});

ansBtn03.addEventListener("click", function () {
  let choice = questions[indexContainer - 1].option3[1];
  console.log("Choice >>" + choice + "  Index >>" + indexContainer);
  setQuestions();
  playSoundChoice(choice);
  setQuizResultFooter(choice);
});

ansBtn04.addEventListener("click", function () {
  let choice = questions[indexContainer - 1].option4[1];
  console.log("Choice >>" + choice + "  Index >>" + indexContainer);
  setQuestions();
  playSoundChoice(choice);
  setQuizResultFooter(choice);
});

submitBtn.addEventListener("click", function () {
  playersCount = localStorage.getItem("playersCount");
  playersCount++;
  let input = initialsPlayer.value;
  let inputSize = input.trim().length;
  console.log(inputSize);
  if (!(inputSize === 3)) {
    alert("Your input should have a lenght of 3 charaters");
    return;
  }
  player.initials = input;
  player.points = timeCount;
  localStorage.setItem("player" + playersCount, JSON.stringify(player));
  localStorage.setItem("playersCount", playersCount);
  console.log("PlayerCount:" + playersCount);
  console.log("Player to store:" + JSON.stringify(player));
  window.location.href = "highscores.html";
});

function setQuestions() {
  console.log("Index container value: " + indexContainer);
  if (indexContainer < questions.length) {
    console.log("Adding the questions");
    titleQuestion.textContent = questions[indexContainer].title;
    ansBtn01.textContent = questions[indexContainer].option1[0];
    ansBtn02.textContent = questions[indexContainer].option2[0];
    ansBtn03.textContent = questions[indexContainer].option3[0];
    ansBtn04.textContent = questions[indexContainer].option4[0];
    indexContainer++;
  } else {
    console.log("Go to End Screen");
    containerQuestions.setAttribute("class", "hide");
    containerEndScreen.setAttribute("class", "");
    clearInterval(timerInterval);
  }
}

function setQuizResultFooter(choice = false) {
  quizFooterLine.setAttribute("class", "border-2");
  if (choice) {
    quizFooter.textContent = "Correct!";
  } else {
    quizFooter.textContent = "Wrong!";
    timeCount -= 10;
  }
  if (indexContainer === questions.length) {
    clockTimer.textContent = "Time: " + timeCount;
    finalScore.textContent = timeCount;
  }
}

function playSoundChoice(choice = false) {
  if (choice) {
    correctAudio.play();
  } else {
    incorrectAudio.play();
  }
}

function setTime() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    timeCount--;
    clockTimer.textContent = "Time: " + timeCount;

    if (timeCount === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }
  }, 1000);
}
