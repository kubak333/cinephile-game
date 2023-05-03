// TIMER

const timerElement = document.getElementById('timer');
let timeLeft = 30;

function counter() {
    timeLeft--;
    timerElement.textContent = timeLeft;
}

const countdownTimer = setInterval(counter, 1000);


// SCORE

const scoreElement = document.getElementById('score');
let scoreCounter = 0;

function scoreFunction() {
  scoreCounter++;
  scoreElement.textContent = scoreCounter;
  if (timeLeft === 0) {
    clearInterval(countdownTimer);
    clearInterval(scoreInterval);
    alert(`Czas minął! Twój wynik to ${scoreCounter}! Odśwież stronę, by zagrać ponownie.`);
        }
}

const scoreInterval = setInterval(scoreFunction, 100);


// MECHANICS

const map = document.querySelector("#map");
const character = document.querySelector("#character");

const characterWidth = character.offsetWidth;
const characterHeight = character.offsetHeight;

let x = (map.offsetWidth - characterWidth) / 2;
let y = (map.offsetHeight - characterHeight) / 2;

function moveCharacter(event) {
  switch (event.code) {
    case "ArrowUp":
      if (y > 10) {
        y -= 10;
      }
      break;
    case "ArrowDown":
      if (y < map.offsetHeight - characterHeight) {
        y += 10;
      }
      break;
    case "ArrowLeft":
      if (x > 10) {
        x -= 10;
      }
      break;
    case "ArrowRight":
      if (x < map.offsetWidth - characterWidth) {
        x += 10;
      }
      break;
  }

  character.style.top = y + "px";
  character.style.left = x + "px";
}

document.addEventListener("keydown", moveCharacter);

window.addEventListener("resize", () => {
  x = (map.offsetWidth - characterWidth) / 2;
  y = (map.offsetHeight - characterHeight) / 2;
});


// HELTHBAR

const healthbar = document.querySelector('.health');
let healthPoints = 80;


function healthFunction() {
  healthPoints--;
  healthbar.style.height = `${healthPoints}%`;
  if (healthPoints === 0) {
    clearInterval(countdownTimer);
    clearInterval(scoreInterval);
    alert(`Zemdlałeś z głodu! Twój wynik to ${scoreCounter}! Odśwież stronę, by zagrać ponownie.`);
        }
}

const healthInterval = setInterval(healthFunction, 700);




// BLADDERBAR

const bladderbar = document.querySelector('.bladder');
let bladderPoints = 0;


function bladderFunction() {
  bladderPoints++;
  bladderbar.style.height = `${bladderPoints}%`;
  if (bladderPoints === 80) {
    clearInterval(countdownTimer);
    clearInterval(scoreInterval);
    clearInterval(bladderInterval);
    alert(`Nie zdążyleś do toalety! Twój wynik to ${scoreCounter}! Odśwież stronę, by zagrać ponownie.`);
        }
}

const bladderInterval = setInterval(bladderFunction,1000);



// PAUZA

let isPaused = false;

function pauseGame() {
  if (!isPaused) {
    clearInterval(countdownTimer);
    clearInterval(scoreInterval);
    clearInterval(healthInterval);
    clearInterval(bladderInterval);
    isPaused = true;
  } else {
    countdownTimer = setInterval(counter, 1000);
    scoreInterval = setInterval(scoreFunction, 100);
    healthInterval = setInterval(healthFunction, 700);
    bladderInterval = setInterval(bladderFunction, 1000);
    isPaused = false;
  }
}

document.addEventListener("keydown", function(event) {
  if (event.code === "KeyP") {
    pauseGame();
  }
});