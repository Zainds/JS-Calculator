const buttonsAll = document.querySelector(".buttons");
const display = document.querySelector(".display");
const numbersBtns = document.querySelector('.num')
const opeartionBtns = document.querySelector('#divide, #multiply, #substract, #add, #calc')
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

