
const { calculate, formatString, sumNumbers } = require("./utils");

// Mathematical tests
console.log("Normal:", calculate(10, "+", 10));
console.log("Boundary:", calculate(67, "/", 0));
console.log("Invalid:", calculate("5", "+", 2));

// String tests
console.log("Normal:", formatString("  hello world  "));
console.log("Boundary:", formatString(""));
console.log("Invalid:", formatString(123));

// Data processing tests
console.log("Normal:", sumNumbers([10, 20, 30]));
console.log("Boundary:", sumNumbers([]));
console.log("Invalid:", sumNumbers([10, "20", 30]));

