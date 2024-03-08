

  var myWords = [
    "TOOLKIT",
    "SKILLS",
    "DEVELOPMENT",
    "LEGISLATION",
    "CHIETA",
    "LAWS",
    "COMMITTEE",
    "CHEMICAL",
    "CHAMBERS"
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
