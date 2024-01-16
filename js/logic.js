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
// Index Container >> Linked to Array Questions
var indexContainer = 0;

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

// Listen for a click events
startBtn.addEventListener("click", function () {
  setQuestions();
  containerStartScreen.setAttribute("class", "hide");
  containerQuestions.setAttribute("class", "");
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
  console.log("Store results");
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
  }
}

function setQuizResultFooter(choice = false) {
  quizFooterLine.setAttribute("class", "border-2");
  if (choice) {
    quizFooter.textContent = "Correct!";
  } else {
    quizFooter.textContent = "Wrong!";
  }
}

function playSoundChoice(choice = false) {
  if (choice) {
    correctAudio.play();
  } else {
    incorrectAudio.play();
  }
}
