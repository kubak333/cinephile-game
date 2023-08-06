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
    alert(`The time is up! Your score is ${scoreCounter}! Refresh the page to play again.`);
  }
}

const scoreInterval = setInterval(scoreFunction, 100);

// BOHATER - MECHANIKA

// const map = document.querySelector("#map");
// const character = document.querySelector("#character");
// const characterWidth = character.offsetWidth;
// const characterHeight = character.offsetHeight;
// let x = (map.offsetWidth - characterWidth) / 2;
// let y = (map.offsetHeight - characterHeight) / 2;

// function moveCharacter(event) {
//   switch (event.code) {
//     case "ArrowUp":
//       if (y > 6) {
//         y -= 6;
//       }
//       break;
//     case "ArrowDown":
//       if (y < map.offsetHeight - characterHeight) {
//         y += 6;
//       }
//       break;
//     case "ArrowLeft":
//       if (x > 6) {
//         x -= 6;
//       }
//       break;
//     case "ArrowRight":
//       if (x < map.offsetWidth - characterWidth) {
//         x += 6;
//       }
//       break;
//   }

//   character.style.top = y + "px";
//   character.style.left = x + "px";
// }

// document.addEventListener("keydown", moveCharacter);

// window.addEventListener("resize", () => {
//   x = (map.offsetWidth - characterWidth) / 2;
//   y = (map.offsetHeight - characterHeight) / 2;
// });

const map = document.querySelector("#map");
const character = document.querySelector("#character");
const characterWidth = character.offsetWidth;
const characterHeight = character.offsetHeight;
let x = (map.offsetWidth - characterWidth) / 2;
let y = (map.offsetHeight - characterHeight) / 2;
let isMovingUp = false;
let isMovingDown = false;
let isMovingLeft = false;
let isMovingRight = false;
const moveDistance = 3.5;
const diagonalMoveDistance = moveDistance / Math.sqrt(2);

function updateMovement() {
  if (isMovingUp && y > diagonalMoveDistance) {
    y -= diagonalMoveDistance;
  }
  if (isMovingDown && y < map.offsetHeight - characterHeight - diagonalMoveDistance) {
    y += diagonalMoveDistance;
  }
  if (isMovingLeft && x > diagonalMoveDistance) {
    x -= diagonalMoveDistance;
  }
  if (isMovingRight && x < map.offsetWidth - characterWidth - diagonalMoveDistance) {
    x += diagonalMoveDistance;
  }

  character.style.top = y + "px";
  character.style.left = x + "px";
}

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowUp":
      isMovingUp = true;
      break;
    case "ArrowDown":
      isMovingDown = true;
      break;
    case "ArrowLeft":
      isMovingLeft = true;
      break;
    case "ArrowRight":
      isMovingRight = true;
      break;
  }
});

document.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "ArrowUp":
      isMovingUp = false;
      break;
    case "ArrowDown":
      isMovingDown = false;
      break;
    case "ArrowLeft":
      isMovingLeft = false;
      break;
    case "ArrowRight":
      isMovingRight = false;
      break;
  }
});

window.addEventListener("resize", () => {
  x = (map.offsetWidth - characterWidth) / 2;
  y = (map.offsetHeight - characterHeight) / 2;
});

function animate() {
  updateMovement();
  requestAnimationFrame(animate);
}

animate();

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
    alert(`You have fainted from hunger! Your score is ${scoreCounter}! Remember to visit bistro next time! Refresh the page to play again.`);
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
    alert(`You didn't make it to the toilet! Your score is ${scoreCounter}! Remember to visit WC next time! Refresh the page to play again.`);
  }
}

const bladderInterval = setInterval(bladderFunction, 1000);

const movies = ['100 sezonów', '15 godzin', '20 000 gatunków pszczół', '4psy', 'After', 'Alcarras', 'Atalanta', 'Blisko', 'Blue Jean', 'Bulion i inne namiętności', 'Był sobie kamień', 'Cicha dziewczyna', 'Cicha ziemia', 'Club Zero', 'Czarny kos, czarna jeżyna', 'Cztery córki', 'Delikwenci', 'Disco Boy', 'Emigracja wewnętrzna', 'Eureka', 'Femme', 'Genderacja', 'Genernauci', 'Heroiczny', 'How to have sex', 'Imago', 'Idol', 'Infinity pool', 'Kapitan Faggotron ratuje świat', 'Kicia Kocia mówi: Dzień dobty! <3', 'Kiedy opadną fale', 'Klątwa', 'Kokomo City', 'Koński ogon', 'La Chimera', 'Marcel Muszelka w różowych bucikach', 'Monster', 'Mutt', 'Niedźwiedzie nie istnieją', 'Odwieczna córka', 'Opadające liście', 'Pani Fang', 'Perfect Days', 'Piaffe', 'Piękna niewolnica', 'Płynne stany rozkoszy', 'Podejrzana', 'Polite Society', 'Poprzednie życie', 'Porwany','Powoli', 'Przejścia', 'Reality', 'Rów', 'Saint Omer', 'Samotna Żona', 'Samsara', 'Showing up', 'Silver Haze', 'Siostrzeństwo świętej sauny', 'Sklep', 'Stwór', 'Śmierć i śledź', 'Świat Apu', 'Totem', 'Trans-Europ-Express', 'Twarz meduzy', 'Vera', 'VIKA!', 'W suszarni', 'W żółtym kokonie', 'Xavier', 'Zamek', 'Zasada 34', 'Złe życie', ' Życie złe'];
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
    timeLeft += 9;
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
const maxNpcs = 100;
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
    // x: Math.random() * (map.offsetWidth - npcSize),
    // y: Math.random() * (map.offsetHeight - npcSize),
    x: ((map.offsetWidth - characterWidth) / 2) + 25,
    y: ((map.offsetHeight - characterHeight) / 2) + 25,
    direction: { x: 1, y: 0 },
    changeDirectionTimer: setInterval(() => {
      npcObj.direction.x = Math.random() > 0.5 ? 1 : -1;
      npcObj.direction.y = Math.random() > 0.5 ? 1 : -1;
    }, 2000),
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
        timeLeft -= 2;
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

// function checkNpcCount() {
//   if (npcCount < maxNpcs && scoreCounter >= npcCount * 300) {
//     npcCount++;
//     createNpc();
//   }
// }

setInterval(moveNpcs, 1000 / 60); // Aktualizacja ruchu NPC co 60 klatek na sekundę
// setInterval(checkNpcCount, 1000); // Sprawdzanie co sekundę, czy trzeba dodać nowego NPC

// TWORZĘ 3 NPC NA START
createNpc();
createNpc();
createNpc();

// TWORZĘ NOWEGO NPC CO 10 SEKUND
const newNPC = setInterval(createNpc, 6000);

