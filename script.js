'use strict';
//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //a little faster than querySelector
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  //1. Generate random dice
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  //2. display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. check if roll is 1: if true switch player, else add roll to score
});
