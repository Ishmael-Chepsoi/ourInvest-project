// String Concatenation
function greetUserConcat(name, investment) {
    return "Hello, " + name + "! Your current investment is $" + investment + ".";
}

console.log(greetUserConcat("Alice", 1500)); 
// Output: Hello, Alice! Your current investment is $1500.

// Template Literals
function greetUserTemplate(name, investment) {
    return `Hello, ${name}! Your current investment is $${investment}.`;
}

console.log(greetUserTemplate("Bob", 2000)); 
// Output: Hello, Bob! Your current investment is $2000.


/*
Exercise 1:
Create a function displayInvestmentDetails that takes a user's name, investment amount, and risk category, then returns a formatted string using template literals.
*/


/*
Exercise 2:
Develop a function updateInvestmentMessage that dynamically updates the investment message based on user actions (e.g., adding funds).
*/