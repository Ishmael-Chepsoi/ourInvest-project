/*
Exercise 1:
Create expressions that demonstrate different operator precedence scenarios. Use comments to explain the expected outcomes.
*/
// 1. Arithmetic Operators
console.log("\n1. Arithmetic Operators:");

// Multiplication has higher precedence than addition
let result1 = 8 + 9 * 4;
console.log("8 + 9 * 4 =", result1);  

// Using parentheses to override default precedence
let result2 = (8 + 9) * 4;
console.log("(8 + 9) * 4 =", result2);  

// 2. Assignment and Arithmetic
console.log("\n2. Assignment and Arithmetic:");

let x = 15;
let y = 9;
// Assignment has lowest precedence
let result3 = x + y * 3;
console.log("x + y * 3 =", result3);  

// 3. Logical Operators
console.log("\n3. Logical Operators:");

// && has higher precedence than ||
let a = false;
let b = false;
let c = true;
let result4 = a || b && c;
console.log("false|| false && true =", result4);  // Output: false (because false && true is evaluated first)

let result5 = (a || b) && c;
console.log("(false || false) && true =", result5);  // Output: false

// 4. Complex Expression
console.log("\n4. Complex Expression:");

// Investment calculator with compound interest
function calculateCompoundInterest(principal, rate, time) {
    // Without parentheses - follows standard operator precedence
    let amount1 = principal * 1 + rate ** time;
    
    // With parentheses - explicitly showing the order
    let amount2 = principal * (1 + rate) ** time;
    
    return {
        "without parentheses": amount1,
        "with parentheses": amount2
    };
}

console.log(calculateCompoundInterest(1000, 0.05, 5));
// Output will be different because:
// amount1: multiplication happens before addition
// amount2: addition happens before exponentiation

// 5. Mixed Operators
console.log("\n5. Mixed Operators:");

// Precedence order: **, *, +, <, &&, ||
let result6 = 2 + 3 * 4 ** 2 < 100 && true || false;
console.log("2 + 3 * 4 ** 2 < 100 && true || false =", result6);
// Evaluation steps:
// 1. 4 ** 2 = 16
// 2. 3 * 16 = 48
// 3. 2 + 48 = 50
// 4. 50 < 100 = true
// 5. true && true = true
// 6. true || false = true

// 6. Unary Operators
console.log("\n6. Unary Operators:");

let num = 6;
let result7 = -num + 3;
console.log("-num + 3 =", result7);  // Output: -2 (unary minus has higher precedence than addition)

// 7. Comparison and Arithmetic
console.log("\n7. Comparison and Arithmetic:");

let result8 = 9 + 11 < 7 - 2;
console.log("9 + 11 < 7 - 2 =", result8);  // Output: true (arithmetic operations happen before comparison)

// 8. Demonstrating Investment Calculator Difference
console.log("\n8. Investment Calculator Comparison:");

function compareInvestmentCalculations(principal, rate, time) {
    // Version 1: Simple interest without parentheses
    let result1 = principal * rate * time + principal;
    
    // Version 2: Simple interest with parentheses
    let result2 = principal * (rate * time) + principal;
    
    // Version 3: Compound interest without proper grouping
    let output1 = principal * 1 + rate ** time;
    
    // Version 4: Compound interest with proper grouping
    let output2 = principal * (1 + rate) ** time;
    
    return {
        "result without parentheses": result1,
        "result with parentheses": result2,
        "output without proper grouping": output1,
        "output with proper grouping": output2
    };
}

console.log(compareInvestmentCalculations(1000, 0.05, 5));
/*
Exercise 2:
Develop a function evaluateExpression that takes a complex mathematical expression as a string and returns the evaluated result. Use parentheses to control the evaluation order. 
*/
class ExpressionEvaluator {
    constructor() {
        // Define operator precedence
        this.precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2,
            '^': 3
        };
    }

    // Main function to evaluate the expression
    evaluateExpression(expression) {
        try {
            // Remove all whitespace from the expression
            expression = expression.replace(/\s+/g, '');
            
            // Validate the expression
            if (!this.isValidExpression(expression)) {
                throw new Error('Invalid expression');
            }

            return this.evaluate(expression);
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }

    // Validate the expression
    isValidExpression(expr) {
        // Check for balanced parentheses
        let parenthesesCount = 0;
        
        // Basic validation regex
        const validChars = /^[0-9+\-*/^().]+$/;
        
        if (!validChars.test(expr)) {
            return false;
        }

        for (let char of expr) {
            if (char === '(') parenthesesCount++;
            if (char === ')') parenthesesCount--;
            if (parenthesesCount < 0) return false;
        }

        return parenthesesCount === 0;
    }

    // Main evaluation function
    evaluate(expr) {
        // Base case: if expression is a number
        if (!isNaN(expr)) {
            return parseFloat(expr);
        }

        // Handle parentheses first
        let parenthesesLevel = 0;
        let lastOperatorIndex = -1;
        let lowestPrecedence = Infinity;

        for (let i = 0; i < expr.length; i++) {
            if (expr[i] === '(') {
                parenthesesLevel++;
            } else if (expr[i] === ')') {
                parenthesesLevel--;
            } else if (parenthesesLevel === 0 && this.precedence[expr[i]] !== undefined) {
                // Found an operator at the base level
                if (this.precedence[expr[i]] <= lowestPrecedence) {
                    lowestPrecedence = this.precedence[expr[i]];
                    lastOperatorIndex = i;
                }
            }
        }

        // If we found an operator
        if (lastOperatorIndex !== -1) {
            const operator = expr[lastOperatorIndex];
            const leftExpr = expr.substring(0, lastOperatorIndex);
            const rightExpr = expr.substring(lastOperatorIndex + 1);

            return this.computeOperation(
                this.evaluate(leftExpr),
                operator,
                this.evaluate(rightExpr)
            );
        }

        // Handle parentheses expression
        if (expr[0] === '(' && expr[expr.length - 1] === ')') {
            return this.evaluate(expr.substring(1, expr.length - 1));
        }

        throw new Error('Invalid expression');
    }

    // Compute basic operations
    computeOperation(left, operator, right) {
        switch (operator) {
            case '+':
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/':
                if (right === 0) throw new Error('Division by zero');
                return left / right;
            case '^':
                return Math.pow(left, right);
            default:
                throw new Error('Invalid operator');
        }
    }
}

// Example usage and tests
const evaluator = new ExpressionEvaluator();

// Test cases
const testCases = [
    "7 + 8",                    // Basic addition
    "2 + 3 * 4",               // Operator precedence
    "(5 + 3) * 3",             // Parentheses
    "2 ^ 8 + 1",               // Exponentiation
    "((2 + 4) * 9) / 5",       // Nested parentheses
    "2 + (3 * 4) + (5 / 2)",   // Multiple operations
    "2 * (7 + (3 * 6))",       // Complex nested expression
    "8 * (4 + 5) / 2",         // Mixed operations
    "2 ^ (3 + 9)",             // Exponentiation with parentheses
    "2.5 + 8.9",               // Decimal numbers
];

// Run tests
console.log("Check ou the Results below:");
console.log("============================");

testCases.forEach(test => {
    console.log(`Expression: ${test}`);
    console.log(`Result: ${evaluator.evaluateExpression(test)}`);
    console.log("----------------------------");
});

// Error test cases
const errorTests = [
    "2 + + 9",        // Invalid syntax
    "5 + 7)",         // Unbalanced parentheses
    "9 + 3 /",        // Incomplete expression
    "4 + (9 * 2))",   // Extra closing parenthesis
    "10 / 0",          // Division by zero
];

console.log("\nCheck the Error cases outshown below:");
console.log("============================");

errorTests.forEach(test => {
    console.log(`Expression: ${test}`);
    console.log(`Result: ${evaluator.evaluateExpression(test)}`);
    console.log("----------------------------");
});