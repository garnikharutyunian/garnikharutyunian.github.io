let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 20;
let highScore = 0;
let labelScore = document.querySelector('.score');
let message = document.querySelector('.message');
let numberElement = document.querySelector('.number');
const body = document.querySelector('body');
const inputValueElement = document.querySelector('.guess');

const labelHighScore = document.querySelector('.highscore');

function checkValue(text) {
  if (score < 1) {
    message.textContent = 'You lost';
    return;
  }
  message.textContent = text;
  score--;
  labelScore.textContent = score;
}

function againNewGame() {
  inputValueElement.value = '';
  labelScore.textContent = 20;
  score = 20;
  message.textContent = 'Start guessing...';
  numberElement.textContent = '?';
  body.style.backgroundColor = '#222';
  numberElement.style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 50) + 1;
}

document
  .querySelector('.check')
  .addEventListener('click', function () {
    let inputValue = Number(inputValueElement.value);

    if (!inputValue) {
      message.textContent = 'No Number Provided';
    } else if (inputValue === secretNumber) {
      message.textContent = 'Correct Number';
      numberElement.textContent = secretNumber;
      body.style.backgroundColor = '#60b347';
      numberElement.style.width = '30rem';

      let winscoe =
        score > highScore ? (highScore = score) : highScore;
      labelHighScore.textContent = winscoe;
    } else if (inputValue > secretNumber) {
      checkValue('Too high');
    } else {
      checkValue('Too small');
    }
  });

document
  .querySelector('.again')
  .addEventListener('click', function () {
    againNewGame();
    labelHighScore.textContent = highScore;
  });

document
  .querySelector('.new-game')
  .addEventListener('click', function () {
    againNewGame();
    labelHighScore.textContent = 0;
    highScore = 0;
  });
