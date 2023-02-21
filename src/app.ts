/*-------------------------------- Constants --------------------------------*/

//? number[][] indicated that it's an array of arrays, where the inner arrays contain numbers.

const winningCombos: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

/*---------------------------- Variables (state) ----------------------------*/

let board: number[];
let turn: number;
let tie: boolean;
let winner: boolean;


/*------------------------ Cached Element References ------------------------*/

//! I am unsure on this, research further

//const squareEls = document.querySelectorAll('.sqr')
//const messageEl = document.getElementById('message')
//const resetBtnEl = document.querySelector('button')

/*----------------------------- Event Listeners -----------------------------*/

//! I am unsure on this, research further

//document.querySelector('.board').addEventListener('click', handleClick)
//resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/

function init(): void {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  turn = 1;
  winner = false;
  tie = false;
}