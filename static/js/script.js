const questions = [
  {
    question: "what is the largest animal in the world",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "what is the smallest continent in the world",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Three",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Four",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

// Function to shuffle an array
function shuffleSection1(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the questions array and select the first four questions after shuffling
const shuffledQuestions = shuffleSection1(questions);
const selectedQuestions = shuffledQuestions.slice(0, 4);

//   Variable declaration for section 1
const questionElementquestionsSection2 = document.getElementById("question");
const answerButtonsquestionsSection2 =
  document.getElementById("answer-buttons");
const nextButtonquestionsSection2 = document.getElementById("next-btn");
const nextQuizSection = document.getElementById("guessing-word-submit-btn");

//   Variable declaration for section 1
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

//   Vaaraibel initialization for section 1
let currentQuestionIndex = 0;
let score = 0;

//   Vaaraibel initialization for section 2
let currentQuestionIndexSection2 = 0;
let scoreSection2 = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";

  showQuestion();
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn-quiz");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  nextQuizSection.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }

    button.disabled = true;
  });

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your scored ${score} out of ${questions.length} for section 1!`;
  nextButton.innerHTML = "RETAKE SECTION 1";
  nextButton.style.display = "none";
}

function handleNextButton() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
    nextQuizSection.style.display = "block";
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();

// Section 2 quiz section starts here

const questionsSection2 = [
  {
    question: "what is the largest animal in the world",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "what is the smallest continent in the world",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Three",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Four",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
];

// Function to shuffle an array
function shuffleSection2(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the questions array and select the first four questions after shuffling
const shuffledQuestionsSection2 = shuffleSection2(questionsSection2);
const selectedQuestionsSection2 = shuffledQuestionsSection2.slice(0, 4);

const questionElementSection2 = document.getElementById("questionSection2");
const answerButtonsSection2 = document.getElementById("answer-buttonsSection2");
const nextButtonSection2 = document.getElementById("next-btnSection2");

let section2Index = 0;
let score2 = 0; // Renamed variable

function startQuizSection2() {
  section2Index = 0;
  score2 = 0; // Updated variable name
  nextButtonSection2.innerHTML = "Next";
  showQuestionSection2();
  startQuiz();
}

function showQuestionSection2() {
  resetStateSection2();

  let currentQuestionSection2 = questionsSection2[section2Index];
  let questionNoSection2 = section2Index + 1;
  questionElementSection2.innerHTML =
    questionNoSection2 + ". " + currentQuestionSection2.question;

  currentQuestionSection2.answers.forEach((answer) => {
    const buttonSection2 = document.createElement("button");
    buttonSection2.innerHTML = answer.text;
    buttonSection2.classList.add("btn-quiz");
    answerButtonsSection2.appendChild(buttonSection2);

    if (answer.correct) {
      buttonSection2.dataset.correct = answer.correct;
    }

    buttonSection2.addEventListener("click", selectAnswerSection2);
  });
}

function resetStateSection2() {
  while (answerButtonsSection2.firstChild) {
    answerButtonsSection2.removeChild(answerButtonsSection2.firstChild);
  }
}

function selectAnswerSection2(e) {
  const selectedBtnSection2 = e.target;
  const isCorrectSection2 = selectedBtnSection2.dataset.correct === "true";

  if (isCorrectSection2) {
    selectedBtnSection2.classList.add("correct");
    score2++;
  } else {
    selectedBtnSection2.classList.add("incorrect");
  }

  Array.from(answerButtonsSection2.children).forEach((buttonSection2) => {
    if (buttonSection2.dataset.correct === "true") {
      buttonSection2.classList.add("correct");
    }

    buttonSection2.disabled = true;
  });

  nextButtonSection2.style.display = "block";
}

function showScoreSection2() {
  resetStateSection2();
  questionElementSection2.innerHTML = `You scored ${score2} out of ${questionsSection2.length} for section 2!`; // Updated variable name
  nextButtonSection2.style.display = "none";
  nextButtonSection2.innerHTML = "RETAKE SECTION 2";
}

function handleNextButtonSection2() {
  section2Index++;

  if (section2Index < questionsSection2.length) {
    showQuestionSection2();
  } else if (section2Index === questionsSection2.length) {
    showScoreSection2();
    nextButtonSection2.innerHTML = "RETAKE QUIZ"; // Update button text
  }
}

nextButtonSection2.addEventListener("click", () => {
  if (section2Index < questionsSection2.length) {
    handleNextButtonSection2();
  } else {
    startQuizSection2();
  }
});

startQuizSection2();

// Section 2 quiz section ends here

// Script for guessing game
// Array of words for guessing
const words = [
  { word: "Rajour", hint: "Human" },
  { word: "Robert", hint: "Uganda" },
  { word: "Paris", hint: "South Africa" },
  { word: "Josian", hint: "Cameroon" },
  // { word: "strawberry", hint: "It's a fruit" }
];

// Function to shuffle an array
function shuffleWordGuess(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the questions array and select any two questions after shuffling
const shuffledQuestionsWordGuess = shuffleWordGuess(words);
const selectedQuestionsWordGuess = shuffledQuestionsWordGuess.slice(0, 2); // Select any two questions randomly

let currentWordIndex = 0;
let attemptsLeft = 3;
let selectedWordGuess = selectedQuestionsWordGuess[currentWordIndex].word;
let failedAttempts = [];

// Function to check the user's guess
function checkGuess() {
  const guess = document.getElementById("guessInput").value;

  if (guess === selectedWordGuess) {
    document.getElementById("result").innerText =
      "Congratulations! You guessed the word correctly.";
    nextWord();
  } else {
    attemptsLeft--;
    if (attemptsLeft > 0) {
      document.getElementById(
        "result"
      ).innerText = `Sorry, that's not correct. You have ${attemptsLeft} ${
        attemptsLeft === 1 ? "attempt" : "attempts"
      } left. Try again!`;
    } else {
      failedAttempts.push(selectedWordGuess);
      nextWord();
    }
  }
}

// Function to move to the next word
function nextWord() {
  currentWordIndex++;
  if (currentWordIndex < words.length) {
    selectedWordGuess = words[currentWordIndex].word;
    attemptsLeft = 3;
    document.getElementById(
      "hint"
    ).innerText = `Hint: ${words[currentWordIndex].hint}`;
    document.getElementById("guessInput").value = "";
    document.getElementById("result").innerText = "";
  } else {
    document.getElementById("hint").innerText =
      "End of the game. No more words to guess.";
    document.getElementById("guessInput").style.display = "none";
    document.querySelector("button").style.display = "none";

    // Display failed attempts and restart button
    if (failedAttempts.length > 0) {
      const failedWords = failedAttempts.join(", ");
      document.getElementById(
        "result"
      ).innerHTML = `Failed attempts: ${failedWords}<br><br><button onclick="restartGame()">Restart Game</button>`;
    } else {
      document.getElementById(
        "result"
      ).innerHTML = `<button onclick="restartGame()">Restart Game</button>`;
    }
  }
}

// Function to restart the game
function restartGame() {
  currentWordIndex = 0;
  attemptsLeft = 3;
  selectedWordGuess = words[currentWordIndex].word;
  failedAttempts = [];
  document.getElementById(
    "hint"
  ).innerText = `Hint: ${words[currentWordIndex].hint}`;
  document.getElementById("guessInput").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("guessInput").style.display = "inline";
  document.querySelector("button").style.display = "inline";
}

// word searh game starts here

// Array of words for guessing
const wordsGuessWord = [
  { wordGuessWord: "Rajour", hintGuessWord: "Human" },
  { wordGuessWord: "Robert", hintGuessWord: "Uganda" },
  { wordGuessWord: "Paris", hintGuessWord: "South Africa" },
  { wordGuessWord: "Josian", hintGuessWord: "Cameroon" },
];

let currentWordIndexGuessWord = -1;
let attemptsLeftGuessWord = 3;
let scoreGuessWord = 0;
let failedAttemptsGuessWord = [];

// Function to check the user's guess
function checkGuessGuessWord() {
  const guessGuessWord = document
    .getElementById("guessInput-word-guess")
    .value.toLowerCase();

  if (
    guessGuessWord.includes(
      wordsGuessWord[currentWordIndexGuessWord].wordGuessWord.toLowerCase()
    )
  ) {
    scoreGuessWord++;
    document.getElementById("result-word-guess").innerText =
      "Congratulations! You guessed the word correctly.";
    nextWordGuessWord();
  } else {
    attemptsLeftGuessWord--;
    if (attemptsLeftGuessWord > 0) {
      document.getElementById(
        "result-word-guess"
      ).innerText = `Sorry, that's not correct. You have ${attemptsLeftGuessWord} ${
        attemptsLeftGuessWord === 1 ? "attempt" : "attempts"
      } left. Try again!`;
    } else {
      failedAttemptsGuessWord.push(
        wordsGuessWord[currentWordIndexGuessWord].wordGuessWord
      );
      nextWordGuessWord();
    }
  }
}

// Function to move to the next word
function nextWordGuessWord() {
  currentWordIndexGuessWord++;
  if (currentWordIndexGuessWord < wordsGuessWord.length) {
    attemptsLeftGuessWord = 3;
    document.getElementById(
      "hint-word-guess"
    ).innerText = `Hint: ${wordsGuessWord[currentWordIndexGuessWord].hintGuessWord}`;
    document.getElementById("guessInput-word-guess").value = "";
    document.getElementById("result-word-guess").innerText = "";
  } else {
    document.getElementById("hint-word-guess").innerText =
      "End of the game. No more words to guess.";
    document.getElementById("guessInput-word-guess").style.display = "none";
    document.getElementById("guessBtn-word-guess").style.display = "none";

    // Display failed attempts and restart button
    if (failedAttemptsGuessWord.length > 0) {
      document.getElementById("result-word-guess").innerHTML =
        "Failed attempts:<br>";
      failedAttemptsGuessWord.forEach((wordGuessWord) => {
        const hintGuessWord = wordsGuessWord.find(
          (item) => item.wordGuessWord === wordGuessWord
        ).hintGuessWord;
        document.getElementById(
          "result-word-guess"
        ).innerHTML += ` ${wordGuessWord} -  Hint: ${hintGuessWord}<br>`;
      });
      document.getElementById(
        "result-word-guess"
      ).innerHTML += `<br>Your score: ${scoreGuessWord} out of ${wordsGuessWord.length}<br><button onclick="restartGameGuessWord()">Restart Game</button>`;
    } else {
      document.getElementById(
        "result-word-guess"
      ).innerHTML = `Your score: ${scoreGuessWord} out of ${wordsGuessWord.length}<br><button onclick="restartGameGuessWord()">Restart Game</button>`;
    }
  }
}

// Function to restart the game
function restartGameGuessWord() {
  currentWordIndexGuessWord = 0;
  scoreGuessWord = 0;
  failedAttemptsGuessWord = [];
  document.getElementById(
    "hint-word-guess"
  ).innerText = `Hint: ${wordsGuessWord[currentWordIndexGuessWord].hintGuessWord}`;
  document.getElementById("guessInput-word-guess").value = "";
  document.getElementById("result-word-guess").innerText = "";
  document.getElementById("guessInput-word-guess").style.display = "block";
  document.getElementById("guessBtn-word-guess").style.display = "block";
  nextWordGuessWord();
}

// Start the game and display the first hint
nextWordGuessWord();

// riddle game starts here

// Array of words for guessing
const wordsGuessRiddle = [
  {
    wordGuessRiddle: "Egg",
    hintGuessRiddle: "What has to be broken before you can use it?",
  },
  {
    wordGuessRiddle: "Candle",
    hintGuessRiddle:
      "I am tall when I am young, and I am short when I am old. What am I?",
  },
  {
    wordGuessRiddle: "Sponge",
    hintGuessRiddle: "What month of the year has 28 days?",
  },
  {
    wordGuessRiddle: "Future",
    hintGuessRiddle: "What is always in front of you but cannot be seen?",
  },
];

let currentRiddleIndexGuessRiddle = -1;
let attemptsLeftGuessRiddle = 3;
let scoreGuessRiddle = 0;
let failedAttemptsGuessRiddle = [];

// Function to check the user's guess
function checkGuessGuessRiddle() {
  const guessGuessRiddle = document
    .getElementById("guessInput-riddle-guess")
    .value.toLowerCase();

  if (
    guessGuessRiddle.includes(
      wordsGuessRiddle[
        currentRiddleIndexGuessRiddle
      ].wordGuessRiddle.toLowerCase()
    )
  ) {
    scoreGuessRiddle++;
    document.getElementById("result-riddle-guess").innerText =
      "Congratulations! You guessed the word correctly.";
    nextRiddleGuessRiddle();
  } else {
    attemptsLeftGuessRiddle--;
    if (attemptsLeftGuessRiddle > 0) {
      document.getElementById(
        "result-riddle-guess"
      ).innerText = `Sorry, that's not correct. You have ${attemptsLeftGuessRiddle} ${
        attemptsLeftGuessRiddle === 1 ? "attempt" : "attempts"
      } left. Try again!`;
    } else {
      failedAttemptsGuessRiddle.push(
        wordsGuessRiddle[currentRiddleIndexGuessRiddle].wordGuessRiddle
      );
      nextRiddleGuessRiddle();
    }
  }
}

// Function to move to the next word
function nextRiddleGuessRiddle() {
  currentRiddleIndexGuessRiddle++;
  if (currentRiddleIndexGuessRiddle < wordsGuessRiddle.length) {
    attemptsLeftGuessRiddle = 3;
    document.getElementById(
      "hint-riddle-guess"
    ).innerText = `Riddle: ${wordsGuessRiddle[currentRiddleIndexGuessRiddle].hintGuessRiddle}`;
    document.getElementById("guessInput-riddle-guess").value = "";
    document.getElementById("result-riddle-guess").innerText = "";
  } else {
    document.getElementById("hint-riddle-guess").innerText =
      "End of the game. No more Riddles.";
    document.getElementById("guessInput-riddle-guess").style.display = "none";
    document.getElementById("guessBtn-riddle-guess").style.display = "none";

    // Display failed attempts and restart button
    if (failedAttemptsGuessRiddle.length > 0) {
      document.getElementById("result-riddle-guess").innerHTML =
        "Failed attempts:<br>";
      failedAttemptsGuessRiddle.forEach((wordGuessRiddle) => {
        const hintGuessRiddle = wordsGuessRiddle.find(
          (item) => item.wordGuessRiddle === wordGuessRiddle
        ).hintGuessRiddle;
        document.getElementById(
          "result-riddle-guess"
        ).innerHTML += ` ${wordGuessRiddle} -  Riddle: ${hintGuessRiddle}<br>`;
      });
      document.getElementById(
        "result-riddle-guess"
      ).innerHTML += `<br>Your score: ${scoreGuessRiddle} out of ${wordsGuessRiddle.length}<br><button onclick="restartGameGuessRiddle()">Restart Game</button>`;
    } else {
      document.getElementById(
        "result-riddle-guess"
      ).innerHTML = `Your score: ${scoreGuessRiddle} out of ${wordsGuessRiddle.length}<br><button onclick="restartGameGuessRiddle()">Restart Game</button>`;
    }
  }
}

// Function to restart the game
function restartGameGuessRiddle() {
  currentRiddleIndexGuessRiddle = 0;
  scoreGuessRiddle = 0;
  failedAttemptsGuessRiddle = [];
  document.getElementById(
    "hint-riddle-guess"
  ).innerText = `Hint: ${wordsGuessRiddle[currentRiddleIndexGuessRiddle].hintGuessRiddle}`;
  document.getElementById("guessInput-riddle-guess").value = "";
  document.getElementById("result-riddle-guess").innerText = "";
  document.getElementById("guessInput-riddle-guess").style.display = "inline";
  document.getElementById("guessBtn-riddle-guess").style.display = "inline";
  nextRiddleGuessRiddle();
}

// Start the game and display the first hint
nextRiddleGuessRiddle();

// riddle game ends here

// WOrd search game starts here

var myWords = [
  "TOOLKIT",
  "SKILLS",
  "DEVELOPMENT",
  "LEGISLATION",
  "CHIETA",
  "GIFT",
  "LAWS",
  "MIDRAND",
  "COMMITTEE",
  "CHEMICAL",
  "PARIS",
];

var timeLimit = 180; // Setting the time limit
var remainingWords = myWords.slice();
var timerInterval;

var tempWords = [];
var selectedWord = "";

$(document).ready(function () {
  var isShiftPressed = false; // Flag to track if Shift key is pressed

  arrangeGame();
  startTimer();

  // Click event listener for individual letters
  $(".individual").click(function () {
    if (isShiftPressed) {
      $(this).addClass("colorPurple");
      selectedWord += $(this).html();
      console.log(selectedWord);
    }
  });

  // Keydown and keyup event listeners for Shift key
  $(document)
    .keydown(function (event) {
      if (event.which == 16) {
        // Check if the key pressed is Shift
        isShiftPressed = true;
      }
    })
    .keyup(function (event) {
      if (event.which == 16) {
        // Check if the key released is Shift
        isShiftPressed = false;
        if (myWords.indexOf(selectedWord) >= 0) {
          $(".colorPurple").addClass("correctlySelected");
          $("#hint p").each(function (key, item) {
            if (selectedWord == $(item).html()) {
              $(this).addClass("done");
              // Remove the selected word from the remaining words array
              var index = remainingWords.indexOf(selectedWord);
              if (index !== -1) {
                remainingWords.splice(index, 1);
              }
            }
            if ($(".done").length == myWords.length) {
              $("#hint").empty();
              $("#hint").append("<p id=message>Wow You have done it</p>");
            }
          });
        }
        selectedWord = ""; // Reset selectedWord after releasing Shift
        $(".individual").removeClass("colorPurple");
      }
    });

  // Click event listener for restart game button
  $("#restartButton")
    .click(function () {
      clearInterval(timerInterval); // Clear existing timer
      remainingWords = myWords.slice(); // Reset remainingWords array
      $("#hint").empty(); // Clear hint display
      $(".individual").removeAttr("data-word"); // Remove data-word attribute from individual letters
      $(".individual").empty(); // Clear individual letters display
      tempWords = []; // Reset tempWords array
      selectedWord = ""; // Reset selectedWord
      arrangeGame(); // Arrange the game again
      startTimer(); // Start the timer again
    })
    .addClass("restartButton");
});

function startTimer() {
  var timerDisplay = $("<p>").text("Time Left: " + formatTime(timeLimit));
  $("#hint").append(timerDisplay);

  timerInterval = setInterval(function () {
    timeLimit--;
    timerDisplay
      .text("Time Left: " + formatTime(timeLimit))
      .addClass("displayTime");

    if (timeLimit <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timerInterval);
  $("#hint")
    .empty()
    .append("<p>REMAINING WORDS:</p>")
    .addClass("remainingWords");
  remainingWords.forEach(function (word) {
    $("#hint").append("<p>" + word + "</p>");
  });
}

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    remainingSeconds.toString().padStart(2, "0")
  );
}

function arrangeGame() {
  $.each(myWords, function (key, item) {
    $("#hint").append("<p>" + item + "</p>");
  });

  for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= 12; j++) {
      $("#letters").append(
        "<div class=individual data-row =" + i + " data-column=" + j + "></div>"
      );
    }
  }

  placeCorrectLetters(myWords);
  // console.log("End of First Array \n");
  placeCorrectLetters(tempWords);
  $.each($(".individual"), function (key, item) {
    if ($(item).attr("data-word") == undefined) $(this).html(randomLetter());
  });
}

function randomLetter() {
  var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return alphabets.charAt(Math.floor(Math.random() * 26));
}

function checkOccupied(word, starting, orientation) {
  var status = "";
  incrementBy = 0;
  if (orientation == "row") {
    incrementBy = 1;
  } else if (orientation == "column") {
    incrementBy = 12;
  } else if (orientation == "diagonal") {
    incrementBy = 13;
  }

  for (var p = starting, q = 0; q < word.length; q++) {
    if ($(".individual:eq(" + p + ")").attr("data-word") == undefined)
      status = "empty";
    else {
      status = "occupied";
      break;
    }

    p += incrementBy;
  }

  return status;
}

function placeCorrectLetters(myArr) {
  var positions = ["row", "column", "diagonal"];

  var nextLetter = 0;
  var newStart = 0;

  for (var i = 0; i < myArr.length; i++) {
    var orientation = positions[Math.floor(Math.random() * positions.length)];

    // alert(orientation);

    var start = Math.floor(Math.random() * $(".individual").length);

    var myRow = $(".individual:eq( " + start + ")").data("row");
    var myColumn = $(".individual:eq( " + start + ")").data("column");

    // $(".individual:eq( " + start + ")").html("A");
    // console.log(myArr[i] + " : " + " : " + orientation + " : " + start + ": " + myRow + " : " + myColumn);

    if (orientation == "row") {
      nextLetter = 1;
      if (myColumn * 1 + myArr[i].length <= 12) {
        newStart = start;
        // console.log( "Space in Row :" + myArr[i] + " : " + start + " : " + myColumn);
      } else {
        var newColumn = 12 - myArr[i].length;
        newStart = $(
          ".individual[data-row = " +
            myRow +
            "][data-column = " +
            newColumn +
            "]"
        ).index();
        // console.log( "No Space in Row :" +  myArr[i] + " : " +  start + " : " +  myColumn +  " : " + newStart   );
      }
    } else if (orientation == "column") {
      nextLetter = 12;

      if (myRow * 1 + myArr[i].length <= 12) {
        newStart = start;
        // console.log( "Space in Column :" + myArr[i] + " : " + start + " : " + myRow );
      } else {
        var newRow = 12 - myArr[i].length;
        newStart = $(
          ".individual[data-row = " +
            newRow +
            "][data-column = " +
            myColumn +
            "]"
        ).index();
        // console.log( "No Space in Column :" +  myArr[i] +  " : " +  start + " : " +   myRow +  " : " + newStart  );
      }
    } else if (orientation == "diagonal") {
      nextLetter = 13;

      if (
        myColumn * 1 + myArr[i].length <= 12 &&
        myRow * 1 + myArr[i].length <= 12
      ) {
        newStart = start;
      }

      if (myColumn * 1 + myArr[i].length > 12) {
        var newColumn = 12 - myArr[i].length;
        newStart = $(
          ".individual[data-row = " +
            myRow +
            "][data-column = " +
            newColumn +
            "]"
        ).index();
      }

      if (myRow * 1 + myArr[i].length > 12) {
        var newRow = 12 - myArr[i].length;
        newStart = $(
          ".individual[data-row = " +
            newRow +
            "][data-column = " +
            myColumn +
            "]"
        ).index();
      }

      if (
        myColumn * 1 + myArr[i].length > 12 &&
        myRow * 1 + myArr[i].length > 12
      ) {
        var newColumn = 12 - myArr[i].length;
        var newRow = 12 - myArr[i].length;

        newStart = $(
          ".individual[data-row = " +
            newRow +
            "][data-column = " +
            newColumn +
            "]"
        ).index();
      }
    }
    var characters = myArr[i].split("");
    var nextPosition = 0;

    var occupied = checkOccupied(myArr[i], newStart, orientation);

    if (occupied == "empty") {
      $.each(characters, function (key, item) {
        // console.log(item);

        $(".individual:eq(" + (newStart + nextPosition) + ")").html(item);

        // $(".individual:eq(" + (newStart + nextPosition) + ")").css(
        //   "background",
        //   "pink"
        // );

        $(".individual:eq(" + (newStart + nextPosition) + ")").attr(
          "data-word",
          myArr[i]
        );
        nextPosition += nextLetter;
      });
    } else {
      tempWords.push(myArr[i]);
    }

    // console.log(tempWords);
  }
}