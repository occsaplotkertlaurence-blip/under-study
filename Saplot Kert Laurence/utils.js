
/**
 * Mathematical Functions
 * Purpose: Perform basic mathematical operations.
 * Parameters: a (number), b (number), operator (string).
 * Returns: A number or an error message (string).
 */
function calculate(a, operator, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error: both values must be numbers";
  }

  if (operator === "/" || operator === "%") {
    if (b === 0) {
      return "Error: cannot divide by zero";
    }
  }

  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "**":
      return a ** b;
    default:
      return "Error: unknown operator";
  }
}

/**
 * String Function
 * Purpose: Remove extra spaces and change text to uppercase.
 * Parameters: text (string).
 * Returns: A cleaned uppercase string or an error message.
 */
function formatString(text = "") {
  if (typeof text !== "string") {
    return "Error: input must be a string";
  }

  return text.trim().toUpperCase();
}

/**
 * Data Processing Function
 * Purpose: Calculate the sum of numbers in an array.
 * Parameters: numbers (array of numbers).
 * Returns: The sum (number) or an error message (string).
 */
function sumNumbers(numbers) {
  if (!Array.isArray(numbers)) {
    return "Error: input must be an array";
  }

  if (!numbers.every((number) =>
    typeof number === "number" && Number.isFinite(number)
  )) {
    return "Error: array must contain only valid numbers";
  }

  return numbers.reduce((total, number) => total + number, 0);
}

// Export functions so they can be reused in other files.
module.exports = { calculate, formatString, sumNumbers };
