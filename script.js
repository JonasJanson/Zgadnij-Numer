'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Gdy nie podano numeru

  if (!guess && score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
    displayMessage('⛔️ Musisz wpisać jakiś numer!');
  } else if (score <= 1) {
    displayMessage('Przegrałeś zabawe, musisz lepiej kombinować! 💥');
    document.querySelector('.score').textContent = 0;

    // Gdy podany numer jest nieprawidłwy
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Ten numer jest za wysoki... 🪜'
          : 'Jeszcze za mało... 📉'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Przegrałeś zabawe, musisz lepiej kombinować! 💥');
      document.querySelector('.score').textContent = 0;
    }
  }

  //Gdy numer jest poprawny

  if (guess == secretNumber) {
    displayMessage('Brawo! Wygrałeś! 🔥');
    document.querySelector('body').style.backgroundColor = '#60b437';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

// Przycisk ponowienia próby

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#704646';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Rozpocznij...');
  score = 20;
});
