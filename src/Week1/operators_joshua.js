// Arithmetic Operators
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
function modulus(a, b) { return a % b; }

console.log("Addition:", add(10, 5)); // 15
console.log("Subtraction:", subtract(10, 5)); // 5
console.log("Multiplication:", multiply(10, 5)); // 50
console.log("Division:", divide(10, 5)); // 2
console.log("Modulus:", modulus(10, 3)); // 1

// Assignment Operators
let investment = 1000;
investment += 500; // Adds 500
console.log("Investment after += 500:", investment); // 1500

investment -= 200; // Subtracts 200
console.log("Investment after -= 200:", investment); // 1300


/*
Exercise 1:
Write functions to demonstrate each assignment operator with different scenarios, such as increasing investment based on user actions.
*/


/*
Exercise 2:
Create a simple calculator that takes two numbers and an operator as input and returns the result using the appropriate operator.
*/
