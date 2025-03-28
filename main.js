const buttonsDiv = document.querySelector(".buttons");
const display = document.querySelector(".display");
const numbersBtns = document.querySelector('')
const opeartionBtns = document.querySelector('')
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

buttonsDiv.addEventListener("click", (event) => {
  const target = event.target;
  let itemTxt = target.textContent;
  const dotCounter = itemTxt.split("").reduce((count, item) => item == '.' ? count +1: count, 0)
  console.log(dotCounter);
  
  if (
    //numbers
    target.localName == "button" &&
    numbers.includes(itemTxt) &&
    display.textContent.length < 7 
  ) {
    if (display.textContent == "0") display.textContent = "";
    display.textContent += itemTxt;
  }

  //operations
  if (operations.includes(itemTxt)) {
    if (!operation) {
      number = +display.textContent;
      operation = itemTxt;
      display.textContent = "0";
    } else {
      numberAnother = +display.textContent;
      display.textContent = operate(number, operation, numberAnother);
      operation = null;
    }
  }
  if (itemTxt == "=" && dotCounter <=1){
    if (display.textContent == "0") display.textContent = "";
    display.textContent += itemTxt;
  }
  //calculation
  if (itemTxt == "=") {
    numberAnother = +display.textContent;
    display.textContent = operate(number, operation, numberAnother);
    operation = null;
  }

  if (itemTxt == "AC") {
    display.textContent = "";
    number = null;
    numberAnother = null;
    operation = null;
  }
});
