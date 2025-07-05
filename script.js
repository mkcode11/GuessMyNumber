'use strict';
const calcScore = function (num) {
  scoreNum--;
  document.querySelector('.score').textContent = scoreNum;
};

let scoreNum = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('.number').textContent = guess;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (scoreNum > highScore) {
      document.querySelector('.highscore').textContent = scoreNum;
    }
  } else if (guess !== secretNumber) {
    if (scoreNum > 1) {
      calcScore(scoreNum);
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈Too High!' : '📉Too Low!';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = ' 💥 You Lost the game!';
    }
  }

  console.log(secretNumber);
});

document.querySelector('.again').addEventListener('click', function () {
  // window.location.reload();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  scoreNum = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});
