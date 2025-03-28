const buttonsDiv = document.querySelector(".buttons");
const display = document.querySelector('.display')
const numbers = '0123456789'
const operations = '/*-+'

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
function popDisplay() {}
buttonsDiv.addEventListener("click", (event) => {
  const target = event.target;
  let itemTxt = target.textContent
  if (target.localName == "button" && 
    numbers.includes(itemTxt) && display.textContent.length <7){
        if(display.textContent == '0')display.textContent = ''
        display.textContent += itemTxt
  }
  if(operations.includes(itemTxt)){
    if(operation){
        display.textContent = operate(number, operation, numberAnother)
        operation = null
        return
    }
    number = +display.textContent
    operation = itemTxt
    display.textContent = '0'
  }
  if(itemTxt == '='){
    numberAnother = +display.textContent
    display.textContent = operate(number, operation, numberAnother)
    operation = null
  }
  if(itemTxt == 'Clear')display.textContent = ''
});
