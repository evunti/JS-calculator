const firstNum = num;
const secondNum = num;

// define action-key
if (
  action === "add" ||
  action === "subtract" ||
  action === "divide" ||
  action === "multiply"
) {
  console.log("action-key");
}

// define num-key
if (
  num === 0 ||
  num === 1 ||
  num === 2 ||
  num === 3 ||
  num === 4 ||
  num === 5 ||
  num === 6 ||
  num === 7 ||
  num === 8 ||
  num === 9
) {
  console.log("num-key");
}
// define modify-key
if (modify === "." || modify === "C") {
  console.log("modify-key");
}

// document.getElementById('calculator-keys').addEventListener("click", type){

// }
