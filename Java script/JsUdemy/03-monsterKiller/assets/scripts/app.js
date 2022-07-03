const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 16;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 11;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

function getMaxLife() {
  const userInput = prompt('choose player and monster maximum health', '100');

  const parsedInput = parseInt(userInput);

  if (isNaN(parsedInput) || parsedInput <= 0) {
    throw { message: 'Invalid user input, not a number!' };
  }
  return parsedInput;
}

let chosenMaxLife;

try {
  chosenMaxLife = getMaxLife();
} catch (error) {
  console.log(error);
  chosenMaxLife = 100;
  alert('Your input was wrong, defult value of 100 was used.');
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];
let counter = 0;
showBattleLog.apply(this, battleLog);

adjustHealthBars(chosenMaxLife);

function showBattleLog() {
  if (counter > 0) {
    alert(battleLog);
  }
  counter++;
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
  battleLog = [];
}

function roundResult() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
    alert('bonus life save you!');
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lost!');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You have a draw!');
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  if (mode === MODE_ATTACK) {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
  } else if (mode === MODE_STRONG_ATTACK) {
    const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
    currentMonsterHealth -= damage;
  }
  roundResult();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
  battleLog += MODE_ATTACK + '\n';
}
function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
  battleLog += MODE_STRONG_ATTACK + '\n';
}
function healHandler() {
  let healValue;
  if (currentPlayerHealth + HEAL_VALUE >= chosenMaxLife) {
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  roundResult();
  battleLog += 'HEAL' + '\n';
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', showBattleLog);
