// Initial Data Questions
var question1 = {
  title: "Question 1",
  option1: ["1. Answer ...", false],
  option2: ["2. Answer ...", false],
  option3: ["3. Answer ...", true],
  option4: ["4. Answer ...", false],
};
var question2 = {
  title: "Question 2",
  option1: ["1. Answer ...", false],
  option2: ["2. Answer ...", true],
  option3: ["3. Answer ...", false],
  option4: ["4. Answer ...", false],
};
var question3 = {
  title: "Question 3",
  option1: ["1. Answer ...", false],
  option2: ["2. Answer ...", false],
  option3: ["3. Answer ...", false],
  option4: ["4. Answer ...", true],
};
var question4 = {
  title: "Question 4",
  option1: ["1. Answer ...", true],
  option2: ["2. Answer ...", false],
  option3: ["3. Answer ...", false],
  option4: ["4. Answer ...", false],
};

var questions = [question1, question2, question3, question4];

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
  setQuestions();
  let choice = questions[indexContainer - 1].option1[1];
  playSoundChoice(choice);
  setQuizResultFooter(choice);
});

ansBtn02.addEventListener("click", function () {
  setQuestions();
  let choice = questions[indexContainer - 1].option2[1];
  playSoundChoice(choice);
  setQuizResultFooter(choice);
});

ansBtn03.addEventListener("click", function () {
  setQuestions();
  let choice = questions[indexContainer - 1].option3[1];
  playSoundChoice(choice);
  setQuizResultFooter(choice);
});

ansBtn04.addEventListener("click", function () {
  setQuestions();
  let choice = questions[indexContainer - 1].option4[1];
  playSoundChoice(choice);
  setQuizResultFooter(choice);
});

submitBtn.addEventListener("click", function () {
  playersCount = localStorage.getItem("playersCount");
  playersCount++;
  player.initials = initialsPlayer.textContent;
  player.points = timeCount;
  localStorage.setItem("player" + playersCount, JSON.stringify(player));
  console.log("PlayerCount:" + playersCount);
  console.log("Player to store:" + player);
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
    indexContainer += 1;
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
