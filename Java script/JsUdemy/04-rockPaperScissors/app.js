const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const PLAYER_WINS = 'PLAYER_WINS';
const COMPUTER_WINS = 'COMPUTER_WINS';
const DRAW = 'DRAW';

let gameIsRunning = false;

const getComputerChoice = function () {
  const rndValue = Math.random();
  if (rndValue < 0.34) {
    return ROCK;
  } else if (rndValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choise! We choose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const gameResult = function (cChoice, pChoice = DEFAULT_USER_CHOICE) {
  if (pChoice === cChoice) {
    return DRAW;
  }
  if (
    (pChoice === PAPER && cChoice === ROCK) ||
    (pChoice === ROCK && cChoice === SCISSORS) ||
    (pChoice === SCISSORS && cChoice === PAPER)
  ) {
    return PLAYER_WINS;
  } else {
    return COMPUTER_WINS;
  }
};

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = gameResult(computerSelection, playerSelection);
  } else {
    winner = gameResult(computerSelection);
  }
  let message = `You pick ${
    playerSelection || DEFAULT_USER_CHOICE
  } and computer pick ${computerSelection} so you `;
  if (winner === DRAW) {
    message += `had a ${DRAW}`;
  } else if (winner === PLAYER_WINS) {
    message += `Won`;
  } else {
    message += `Lost`;
  }
  alert(message);
  gameIsRunning = false;
});
