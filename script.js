// LICZNIK CZASU

const timerElement = document.getElementById('timer');
let timeLeft = 30;

function counter() {
    timeLeft--;
    timerElement.textContent = timeLeft;
}

const countdownTimer = setInterval(counter, 1000);


// LICZNIK PUNKTÓW 

const scoreElement = document.getElementById('score');
let scoreCounter = 0;

function scoreFunction() {
  scoreCounter++;
  scoreElement.textContent = scoreCounter;
  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    clearInterval(scoreInterval);
    clearInterval(healthInterval);
    clearInterval(bladderInterval);
    alert(`Czas minął! Twój wynik to ${scoreCounter}! Odśwież stronę, by zagrać ponownie.`);
  }
}

const scoreInterval = setInterval(scoreFunction, 100);

// BOHATER - MECHANIKA

const map = document.querySelector("#map");
const character = document.querySelector("#character");
const characterWidth = character.offsetWidth;
const characterHeight = character.offsetHeight;
let x = (map.offsetWidth - characterWidth) / 2;
let y = (map.offsetHeight - characterHeight) / 2;

function moveCharacter(event) {
  switch (event.code) {
    case "ArrowUp":
      if (y > 5) {
        y -= 5;
      }
      break;
    case "ArrowDown":
      if (y < map.offsetHeight - characterHeight) {
        y += 5;
      }
      break;
    case "ArrowLeft":
      if (x > 5) {
        x -= 5;
      }
      break;
    case "ArrowRight":
      if (x < map.offsetWidth - characterWidth) {
        x += 5;
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

// PASEK ŻYCIA

const healthbar = document.querySelector('.health');
let healthPoints = 80;

function healthFunction() {
  healthPoints--;
  healthbar.style.height = `${healthPoints}%`;
  if (healthPoints === 0) {
    clearInterval(countdownTimer);
    clearInterval(scoreInterval);
    clearInterval(healthInterval);
    clearInterval(bladderInterval);
    alert(`Zemdlał_ś z głodu! Twój wynik to ${scoreCounter}! Odśwież stronę, by zagrać ponownie.`);
  }
}

const healthInterval = setInterval(healthFunction, 700);

// PASEK PĘCHERZA

const bladderbar = document.querySelector('.bladder');
let bladderPoints = 0;

function bladderFunction() {
  bladderPoints++;
  bladderbar.style.height = `${bladderPoints}%`;
  if (bladderPoints === 80) {
    clearInterval(countdownTimer);
    clearInterval(scoreInterval);
    clearInterval(healthInterval);
    clearInterval(bladderInterval);
    alert(`Nie zdążył_ś do toalety! Twój wynik to ${scoreCounter}! Odśwież stronę, by zagrać ponownie.`);
  }
}

const bladderInterval = setInterval(bladderFunction, 1000);

const movies = ['Climax', 'Szatańskie tango', 'Midsommar', 'Wielkie piękno', 'Paterson', 'Służąca', 'Toni Erdmann'];
const movieNameElement = document.getElementById('movie-name');
const nrSaliElement = document.getElementById('nr-sali');

let wyznaczonaSala;
let randomNrSali = Math.floor(Math.random() * 6) + 1;

function showMovieAndNrSali() {
  let randomMovie = movies[Math.floor(Math.random() * movies.length)];
  movieNameElement.textContent = randomMovie;
  nrSaliElement.textContent = randomNrSali;

  if (randomNrSali === 1) { 
    wyznaczonaSala = document.getElementsByClassName('sala1')[0];
  }
  if (randomNrSali === 2) { 
    wyznaczonaSala = document.getElementsByClassName('sala2')[0];
  }
  if (randomNrSali === 3) { 
    wyznaczonaSala = document.getElementsByClassName('sala3')[0];
  }
  if (randomNrSali === 4) { 
    wyznaczonaSala = document.getElementsByClassName('sala4')[0];
  }
  if (randomNrSali === 5) { 
    wyznaczonaSala = document.getElementsByClassName('sala5')[0];
  }
  if (randomNrSali === 6) {
    wyznaczonaSala = document.getElementsByClassName('sala6')[0];
  }
}

// KOLIZJA Z SALĄ - ZMIANA FILMU

showMovieAndNrSali();

function checkSalaCollision() {
  const characterRect = character.getBoundingClientRect();
  const salaRect = wyznaczonaSala.getBoundingClientRect();
  
  if (
    characterRect.left < salaRect.right &&
    characterRect.right > salaRect.left &&
    characterRect.top < salaRect.bottom &&
    characterRect.bottom > salaRect.top
  ) {
    console.log('Collision!');
    timeLeft += 15;
    randomNrSali = Math.floor(Math.random() * 6) + 1;
    showMovieAndNrSali();
  }
}

document.addEventListener("keydown", checkSalaCollision);


// KOLIZJA Z WC I PUNKTY PĘCHERZA

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

// KOLIZJA Z BISTRO I PUNKTY GŁODU

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

// NPC

const npcContainer = document.getElementById('map');
const maxNpcs = 50;
let npcCount = 5;
let npcSpeed = 3; // Prędkość NPC (tak samo jak bohater)
const npcSize = 8; // Rozmiar NPC

const npcList = [];

function createNpc() {
  const npc = document.createElement('div');
  npc.className = 'npc';
  npc.style.backgroundColor = 'red';
  npc.style.width = npcSize + 'px';
  npc.style.height = npcSize + 'px';

  npcContainer.appendChild(npc);

  const npcObj = {
    element: npc,
    x: Math.random() * (map.offsetWidth - npcSize),
    y: Math.random() * (map.offsetHeight - npcSize),
    direction: { x: 1, y: 0 },
    changeDirectionTimer: setInterval(() => {
      npcObj.direction.x = Math.random() > 0.5 ? 1 : -1;
      npcObj.direction.y = Math.random() > 0.5 ? 1 : -1;
    }, 4000),
  };

  npcList.push(npcObj);
}

function moveNpcs() {
  npcList.forEach((npc) => {
    npc.x += npc.direction.x * npcSpeed;
    npc.y += npc.direction.y * npcSpeed;

    if (npc.x < 0) npc.x = 0;
    if (npc.y < 0) npc.y = 0;
    if (npc.x > map.offsetWidth - npcSize)
      npc.x = map.offsetWidth - npcSize;
    if (npc.y > map.offsetHeight - npcSize)
      npc.y = map.offsetHeight - npcSize;

    npc.element.style.left = npc.x + 'px';
    npc.element.style.top = npc.y + 'px';

    const characterRect = character.getBoundingClientRect();
    const npcRect = npc.element.getBoundingClientRect();

    if (
      characterRect.left < npcRect.right &&
      characterRect.right > npcRect.left &&
      characterRect.top < npcRect.bottom &&
      characterRect.bottom > npcRect.top
    ) {
      if (timeLeft >= 3) {
        timeLeft -= 3;
        clearInterval(npcObj.changeDirectionTimer);
        setTimeout(() => {
          npcObj.changeDirectionTimer = setInterval(() => {
            npcObj.direction.x = Math.random() > 0.5 ? 1 : -1;
            npcObj.direction.y = Math.random() > 0.5 ? 1 : -1;
          }, 3000);
        }, 3000);
      }
    }
  });
}

function checkNpcCount() {
  if (npcCount < maxNpcs && scoreCounter >= npcCount * 300) {
    npcCount++;
    createNpc();
  }
}

setInterval(moveNpcs, 1000 / 60); // Aktualizacja ruchu NPC co 60 klatek na sekundę
setInterval(checkNpcCount, 1000); // Sprawdzanie co sekundę, czy trzeba dodać nowego NPC

// TWORZĘ 3 NPC NA START
createNpc();
createNpc();
createNpc();

// TWORZĘ NOWEGO NPC CO 10 SEKUND
const newNPC = setInterval(createNpc, 10000);
