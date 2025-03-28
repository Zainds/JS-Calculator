const display = document.querySelector(".display");

const numbersBtns = document.querySelectorAll(".num");
const opeartionBtns = document.querySelectorAll(".operation");

const clearBtn = document.querySelector("#ac");
const eraseBtn = document.querySelector("#backspace");
const signBtn = document.querySelector("#sign");
const dotBtn = document.querySelector("#dot");

const numbers = "0123456789";
const operations = "/*-+";

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
  switch (operation) {
    case "+":
      return add(a, b);

    case "-":
      return substract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);
  }
}
function evaluate(event) {
  const displayNum = +display.textContent;

  numberAnother = displayNum;
  console.log(number, operation, numberAnother);
  if (number && operation && numberAnother) {
    display.textContent = operate(number, operation, numberAnother);
    number = +display.textContent
    operation = null;
    numberAnother = null;
  }
}

numbersBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const num = event.target.textContent;
    display.textContent += num;
  });
});

opeartionBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const operationClicked = event.target.textContent;
    const displayNum = +display.textContent;

    if (operationClicked == "=") {
      evaluate(event)
    } else {
      if (operation) {
        evaluate(event)
      } else {
        operation = operationClicked;
        number = displayNum;
        display.textContent = "";
      }
    }
  });
});

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



function deb(){
    console.log(number, operation, numberAnother);
    
}