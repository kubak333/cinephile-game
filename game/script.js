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
    clearInterval(healthInterval)
    clearInterval(bladderInterval);
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
    clearInterval(healthInterval)
    clearInterval(bladderInterval);
    alert(`Nie zdążyleś do toalety! Twój wynik to ${scoreCounter}! Odśwież stronę, by zagrać ponownie.`);
        }
}

const bladderInterval = setInterval(bladderFunction,1000);



// NPC 



// WSKAZYWANIE SALI I DODAWANIE CZASU

const movies = ['Climax', 'Szatańskie tango', 'Midsommar', 'Wielkie piękno', 'Paterson', 'Służąca', 'Toni Ermann'];
const movieNameElement = document.getElementById('movie-name');
const nrSaliElement = document.getElementById('nr-sali');


const randomMovie = movies[Math.floor(Math.random() * movies.length)];
const randomNrSali = Math.floor(Math.random() * 6) + 1;


movieNameElement.textContent = randomMovie;
nrSaliElement.textContent = randomNrSali;



// COLLISIONS - BLADDERBAR


const wc = document.querySelector(".wc");

function checkWcCollision() {
  const characterRect = character.getBoundingClientRect();
  const wcRect = wc.getBoundingClientRect();
  
  if (
    characterRect.left < wcRect.right &&
    characterRect.right > wcRect.left &&
    characterRect.top < wcRect.bottom &&
    characterRect.bottom > wcRect.top
  ) {
    console.log('Collision!');
    bladderPoints = -1;
  
  }
}

document.addEventListener("keydown", checkWcCollision);



// COLLISIONS - HEALTHBAR



const bistro = document.querySelector(".bistro");

function checkBistroCollision() {
  const characterRect = character.getBoundingClientRect();
  const bistroRect = bistro.getBoundingClientRect();
  
  if (
    characterRect.left < bistroRect.right &&
    characterRect.right > bistroRect.left &&
    characterRect.top < bistroRect.bottom &&
    characterRect.bottom > bistroRect.top
  ) {
    console.log('Collision!');
    healthPoints = 80;
  
  }
}

document.addEventListener("keydown", checkBistroCollision);