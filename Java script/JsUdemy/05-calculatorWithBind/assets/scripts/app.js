const defultValue = 0;
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVIDE = 'DIVIDE';

let currentResult = defultValue;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndShowLog(operation, oldResult, newNumber) {
  const calcDescription = `${oldResult} ${operation} ${newNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculateType) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculateType === ADD) {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculateType === SUBTRACT) {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculateType === MULTIPLY) {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculateType === DIVIDE) {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndShowLog(mathOperator, initialResult, enteredNumber);
  writeToLog(calculateType, initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', calculateResult.bind(this, ADD));
subtractBtn.addEventListener('click', calculateResult.bind(this, SUBTRACT));
multiplyBtn.addEventListener('click', calculateResult.bind(this, MULTIPLY));
divideBtn.addEventListener('click', calculateResult.bind(this, DIVIDE));
