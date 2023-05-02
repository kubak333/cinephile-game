
// TIMER


// Pobranie elementu span, w którym będzie wyświetlany czas
const timerElement = document.getElementById('timer');

// Ustawienie startowego czasu w sekundach
let timeLeft = 30;

// Uruchomienie odliczania
const countdownTimer = setInterval(() => {
  // Dekrementacja pozostałego czasu
  timeLeft--;

  // Wyświetlenie pozostałego czasu w elemencie span
  timerElement.textContent = timeLeft;

  // Sprawdzenie, czy czas się skończył
  if (timeLeft === 0) {
    clearInterval(countdownTimer);
    alert('Czas minął!');
  }
}, 1000);








const map = document.querySelector("#map");
const character = document.querySelector("#character");

const characterWidth = character.offsetWidth;
const characterHeight = character.offsetHeight;

let x = (map.offsetWidth - characterWidth) / 2;
let y = (map.offsetHeight - characterHeight) / 2;

function moveCharacter(event) {
  switch (event.code) {
    case "ArrowUp":
      if (y > 0) {
        y -= 10;
      }
      break;
    case "ArrowDown":
      if (y < map.offsetHeight - characterHeight) {
        y += 10;
      }
      break;
    case "ArrowLeft":
      if (x > 0) {
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
