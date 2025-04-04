const display = document.querySelector(".display");

const numbersBtns = document.querySelectorAll(".num");
const opeartionBtns = document.querySelectorAll(".operation");

const calcBtn = document.querySelector("#calc");
const clearBtn = document.querySelector("#ac");
const eraseBtn = document.querySelector("#backspace");
const signBtn = document.querySelector("#sign");
const dotBtn = document.querySelector("#dot");

let number;
let operation;
let numberAnother;

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, operation, b) {
  a = Number(a);
  b = Number(b);

  let result;

  switch (operation) {
    case "+":
      result = add(a, b);
      break;
    case "-":
      result = substract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      if (b === 0) return "Cannot divide by zero";
      result = divide(a, b);
      break;
    default:
      return "";
  }

  // check if result is a number
  if (typeof result === "number" && !isNaN(result)) {
    result = result.toFixed(3);
    if (result.toString().length >= 11) {
      return Number(result).toExponential(5); // return exp if number too long
    }
    return Number(result);
  }

  return "Error";
}

function evaluate(event) {
  const operationClicked = event.target.textContent;
  const displayNum = +display.textContent;

  if (operation) {
    numberAnother = displayNum;
    console.log(number, operation, numberAnother);
    if (number && operation != "=" && numberAnother) {
      display.textContent = operate(number, operation, numberAnother);
      number = +display.textContent;
      operation = null;
      numberAnother = null;
    }
  } else if (operationClicked != "=") {
    operation = operationClicked;
    number = displayNum;
    display.textContent = "";
  }
}

numbersBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (display.textContent.length < 9) {
      const num = event.target.textContent;
      display.textContent += num;
    }
  });
});

opeartionBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => evaluate(event));
});

calcBtn.addEventListener("click", (event) => evaluate(event));

clearBtn.addEventListener("click", () => {
  display.textContent = "";
  number = null;
  operation = null;
  numberAnother = null;
});

eraseBtn.addEventListener("click", () => {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
});

signBtn.addEventListener("click", () => {
  let sign = display.textContent[0];
  if (sign == "-") {
    display.textContent = display.textContent.slice(1);
  } else {
    display.textContent = "-" + display.textContent;
  }
});

dotBtn.addEventListener("click", () => {
  let txt = display.textContent;
  if (txt && !txt.includes(".")) {
    display.textContent += ".";
  }
});

function deb() {
  console.log(number, operation, numberAnother);
}
