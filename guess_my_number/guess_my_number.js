'use strict';
let secreteKey = Math.trunc(Math.random() * 10) + 1;
let _chances = Number(document.querySelector('.chance').textContent);
let _highScore = Number(document.querySelector('.highscore').textContent);
let _btnName = 'Check!';

const _status = function (message) {
  document.querySelector('.message').textContent = message;
};

const _resetGame = function () {
  _btnName = 'Check!';
  document.querySelector('.check').textContent = _btnName;
  document.querySelector('body').style.backgroundColor = '#2d3563';
  _chances = 5;
  document.querySelector('.guess').value = '';
  document.querySelector('.chance').textContent = _chances;
  secreteKey = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.number').textContent = '?';
  _status('Start guessing...');
};

//Check Functionality
document.querySelector('.check').addEventListener('click', function () {
  if (_btnName === 'Check!') {
    const _guess = Number(document.querySelector('.guess').value);
    if (!_guess) {
      _status('Oops!!! Invalid/No number ⨉');
      document.querySelector('.message').style.color = 'red';
    } else if (_guess === secreteKey) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secreteKey;
      _status('Hoorey!!!✌✌ Correct Answer🎉🎉');
      if (_chances > _highScore) {
        _highScore = _chances;
        document.querySelector('.highscore').textContent = _highScore;
      }
      _btnName = 'Play Again😍😍';
      document.querySelector('.check').textContent = _btnName;
    } else {
      if (_chances > 1) {
        _chances--;
        document.querySelector('.chance').textContent = _chances;
        _guess > secreteKey
          ? _status('Too High!!!📈📈')
          : _status('Too Low!!!📉📉');
      } else {
        document.querySelector('body').style.backgroundColor = 'red';
        _status(
          `Sorry!!! You lost the Game😔😔 
        No worries🤩🤩 TRY AGAIN👍👍👍👍`
        );
        document.querySelector('.chance').textContent = 0;
      }
    }
  } else {
    _resetGame();
  }
});

//Again Functionality
document.querySelector('.again').addEventListener('click', function () {
  _resetGame();
});
