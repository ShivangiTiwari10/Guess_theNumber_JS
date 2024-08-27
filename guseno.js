// console.log(parseInt(Math.random() * 100 + 1));

const randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submitButton = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter valid no");
  } else if (guess < 1) {
    alert("Please enter Number more then 1");
  }
  if (guess > 100) {
    alert("Please enter no below 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanUp(guess);
      displayMessage(`Game Over.random number was ${randomNumber}`);
      endGame();
    } else {
      cleanUp(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}
function cleanUp(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {}
function endGame() {
  userInput.value = "";
  // if (remaining < 1) {
  //   alert("dont play");
  // }
}
