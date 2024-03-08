// riddle game starts here

// Array of words for guessing
const wordsGuessRiddle = [
    {
      wordGuessRiddle: " To improve Skills Development Committees in companies",
      hintGuessRiddle: "What is the primary purpose of the Skills Development Committee Toolkit?",
    },
    {
      wordGuessRiddle: "It covers legislation, SETAs, NSDS objectives, Sector Skills Plans, and Grant Regulations",
      hintGuessRiddle:
        "What specific information does the toolkit offer regarding skills planning?",
    },
    {
      wordGuessRiddle: "It guides in identifying and clarifying training needs, involving facilitators and Committees",
      hintGuessRiddle: "How does the toolkit address training needs clarification?",
    },
    {
      wordGuessRiddle: "It highlights aligning skills development with BBBEE requirements",
      hintGuessRiddle: "What information does the toolkit offer regarding BBBEE codes?",
    },
    {
      wordGuessRiddle: "It provides guidance on utilizing OFO codes for enhanced effectiveness",
      hintGuessRiddle: "How does the toolkit address capacity building within Committees?",
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