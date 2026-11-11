// Divides a by b. If b is 0, it stops early and returns null
const divide = (a, b) => {
  if (b === 0) {
    return null; // guard clause: can't divide by zero
  }

  return a / b;
};

// Multiplies a and b. If b is 0, it stops early and returns null
const multiply = (a, b) => {
    if (b === 0) {
        return null; // guard clause: exit early before multiplying
    }

    return a * b;
};

// Subtracts b from a.
// DEFAULT PARAMETERS: a uses 100 and b uses 0 when they are not given
const subtract = (a = 100, b = 0) => a - b;

// DEFAULT PARAMETER
console.log(subtract(60));  // 60, no b, so the default 0 is used
console.log(subtract());    // 100, nothing given, so a = 100 and b = 0

// GUARD CLAUSE
console.log(divide(60, 3)); // 20, b is not 0, so it divides normally
console.log(divide(60, 0)); // null, the guard stops it
console.log(multiply(60, 0)); // null, the guard stops it

// STRING FUNCTION
// Counts how many times a letter appears in a text (upper or lower case doesn't matter).
const countLetter = (text, letter) => {

  // Guard clause #1: check the text.
  // If it's not a string, or it's empty, there's nothing to count in,
  // so we stop right here and return null.
  if (typeof text !== 'string' || text === '') {
    return null;
  }

  // Guard clause #2: check the letter.
  // It must be a string with exactly one character, like 'm'.
  // Anything else (a number, a whole word, an empty string) can't be counted as one letter.
  if (typeof letter !== 'string' || letter.length !== 1) {
    return null;
  }

  // Both are valid. We make everything lowercase so 'M' and 'm' count the same,
  // then split the text at every match. The number of pieces minus 1 is the number of matches.
  return text.toLowerCase().split(letter.toLowerCase()).length - 1;
};

console.log(countLetter('Programming', 'm'));  // 2, valid input, so it counts both m's
console.log(countLetter('', 'm'));             // null, the text is empty, so guard #1 stops it
console.log(countLetter('Programming', 'mm')); // null, two characters is not one letter, so guard #2 stops it

// DATA PROCESSING
// Finds the range of a list of numbers: the highest number minus the lowest number.
const getRange = (numbers) => {

  // Guard clause #1: numbers must be an array.
  // If it's not a list (like a word or a number), there's nothing to compare,
  // so we stop right here and return null.
  if (!Array.isArray(numbers)) {
    return null;
  }

  // Guard clause #2: the array must not be empty.
  // An empty list has no highest or lowest number, so we stop and return null.
  if (numbers.length === 0) {
    return null;
  }

  // Guard clause #3: every item must be a real number.
  // A word or NaN in the list would make the result NaN, so we stop and return null.
  if (!numbers.every(num => typeof num === 'number' && !Number.isNaN(num))) {
    return null;
  }

  // Everything is valid, so we find the highest and the lowest,
  // then subtract the lowest from the highest to get the range.
  return Math.max(...numbers) - Math.min(...numbers);
};

console.log(getRange([40, 95, 70]));  // 55, valid input, so 95 - 40 = 55
console.log(getRange([]));            // null, the list is empty, so guard #2 stops it
console.log(getRange([40, 'a', 70])); // null, 'a' is not a number, so guard #3 stops it