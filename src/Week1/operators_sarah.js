// Comparison Operators
function isEqual(a, b) { return a == b; }
function isStrictEqual(a, b) { return a === b; }
function isNotEqual(a, b) { return a != b; }
function isStrictNotEqual(a, b) { return a !== b; }
function isGreaterThan(a, b) { return a > b; }
function isLessThan(a, b) { return a < b; }

console.log("isEqual (5, '5'):", isEqual(5, '5')); // true
console.log("isStrictEqual (5, '5'):", isStrictEqual(5, '5')); // false
console.log("isNotEqual (5, '6'):", isNotEqual(5, '6')); // true
console.log("isStrictNotEqual (5, '5'):", isStrictNotEqual(5, '5')); // true
console.log("isGreaterThan (10, 5):", isGreaterThan(10, 5)); // true
console.log("isLessThan (3, 7):", isLessThan(3, 7)); // true

// Logical Operators
function andOperation(a, b) { return a && b; }
function orOperation(a, b) { return a || b; }
function notOperation(a) { return !a; }

console.log("andOperation(true, false):", andOperation(true, false)); // false
console.log("orOperation(true, false):", orOperation(true, false)); // true
console.log("notOperation(true):", notOperation(true)); // false


/*
Exercise 1:
Create a function isEligibleForInvestment that takes a user's age and investment amount, returning true if the user is over 18 and has invested more than $500, otherwise false.
*/

/*
Exercise 2:
Develop a function evaluateInvestmentRisk that uses comparison and logical operators to determine the risk category based on multiple investment parameters.
*/