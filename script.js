calcButtons = document.getElementById("calculator-keys");

// num = document.getElementsByClassName("num-key");
// action = document.getElementsByClassName("action-key");
// modify = document.getElementsByClassName("modify-key");

// calcButtons.addEventListener("click", printNum, false);

const diplay = document.getElementById("display");
let currentInput = "";

function updateDisplay(num) {
  currentInput += num;
  display.value = currentInput;
}
function clearDisplay() {
  currentInput = "";
  display.value = "";
}
function updateDisplayWithAction(action) {
  currentInput += action;
  display.value = currentInput;
}

function updateDisplayWithSum() {}
