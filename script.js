'use strict';
//Selecting elements
const scoreTotal0El = document.querySelector('#score--0');
const scoreTotal1El = document.getElementById('score--1'); //a little faster than querySelector
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

scoreTotal0El.textContent = 0;
scoreTotal1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  //switch player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

//Event for clicking the Roll button
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate random dice
    const dice = Math.trunc(Math.random() * 6 + 1);
    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. check if roll is 1: if true switch player, else add roll to score
    if (dice !== 1) {
      //Add rolled number to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      return;
    }
    switchPlayer();
  }
});

//Event for clicking the Hold button
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to score of active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = String(
      scores[activePlayer],
    );
    //2. check if player's score is >= 100
    //Yes? => Finish game
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      return;
    }
    //No? => switch to next player
    switchPlayer();
  }
});
