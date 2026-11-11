// Multiplies a and b. If b is 0, it stops early and returns null
function multiply(a, b) {
    if (b === 0) {
        return null; // guard clause: exit early before multiplying
    }

    return a * b;
}

// Adds a and b. If b is not given, it defaults to 0
function add(a, b = 0) {
  return a + b;
}

// Gives the price after a discount. If percent is not given, it defaults to 10
function discount(price, percent = 10) {
  return price - (price * percent / 100);
}

// Divides a by b. If b is 0, it stops early and returns null
function divide(a, b) {
    if (b === 0) {
        return null; // guard clause: exit early before dividing
    }

    return a / b;
}

// DEFAULT PARAMETER
console.log(discount(200, 50)); // 100, percent is given, so 50 is used
console.log(discount(200));     // 180, no percent, so it uses 10

// GUARD CLAUSE
console.log(divide(60, 3)); // 20, b is not 0, so it divides normally
console.log(divide(60, 0)); // null, the guard stops it

// STRING FUNCTION

// Cuts a long text short and adds "..." at the end.
// Default parameter: if maxLength is not given, it keeps the first 10 characters.
function truncate(text, maxLength = 10) {

  // Guard clause #1: check the text.
  // If it's not a string (like a number) or it's empty, there's nothing to cut,
  // so we stop right here and return null.
  if (typeof text !== 'string' || text === '') {
    return null;
  }

  // Guard clause #2: check the maxLength.
  // It must be a whole number that is at least 1. Otherwise we'd end up with
  // just "..." (for 0) or a strange result (for 1.5), so we stop and return null.
  if (typeof maxLength !== 'number' || !Number.isInteger(maxLength) || maxLength < 1) {
    return null;
  }

  // The text is already short enough, so there's no need to cut it.
  // We give it back exactly as it was.
  if (text.length <= maxLength) {
    return text;
  }

  // The text is too long, so we keep only the first maxLength characters
  // (slice(0, maxLength)) and add "..." to show that something was cut off.
  return text.slice(0, maxLength) + '...';
}

console.log(truncate('Programming 1'));  // Programmi..., no maxLength given, so the default 10 is used
console.log(truncate('', 5));            // null, the text is empty, so guard #1

// DATA PROCESSING 

function getLowest(numbers) {

  // Guard clause #1: numbers must be an array
  if (!Array.isArray(numbers)) {
    return null; // not a list? stop here
  }

  // Guard clause #2: the array must not be empty
  if (numbers.length === 0) {
    return null; // nothing to compare in an empty list
  }

  // Guard clause #3: every item must be a real number
  if (!numbers.every(num => typeof num === 'number' && !Number.isNaN(num))) {
    return null; // a word or NaN in the list? stop here
  }

  return Math.min(...numbers); // everything is valid, so find the lowest
}

console.log(getLowest([40, 95, 70]));  // 40
console.log(getLowest([]));            // null, empty list, so guard #2 stops it
console.log(getLowest([40, 'a', 70])); // null, 'a' is not a number, so guard #3 stops it