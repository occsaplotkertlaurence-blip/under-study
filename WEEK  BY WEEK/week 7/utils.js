// Subtracts b from a. If b is not given, it defaults to 0
function subtract(a, b = 0) {
    return a - b;
}

// Multiplies a and b. If b is 0, it stops early and returns null
function multiply(a, b) {
    if (b === 0) {
        return null; // guard clause: exit early before multiplying
    }

    return a * b;
}


// DEFAULT PARAMETER
// b is given, so 60 - 7 = 53
console.log(subtract(60, 7));      // 53
// b is missing, so it uses the default 0, and 60 - 0 = 60
console.log(subtract(60));         // 60


// GUARD CLAUSE
// b is not 0, so it multiplies normally
console.log(multiply(60, 3));      // 180
// b is 0, so the guard returns null
console.log(multiply(60, 0));      // null


// STRING FUNCTION
// Makes the first letter of a word uppercase and keeps the rest the same

function capitalize(text) {
  // guard clause: if text is empty or not a string, return null
  if (typeof text !== 'string' || text === '') {
    return null;
  }

  // getting the first letter. For example "kert"
  // to capitalize the first letter
  // the word is divided into ("k") and ("ert")
  return text.charAt(0).toUpperCase() + text.slice(1);
}

console.log(capitalize('kert')); // Kert
console.log(capitalize(''));     // null
console.log(capitalize(123));    // null

// DATA PROCESSING 
function sumNumbers(numbers) {
  // guard clause: if numbers is not an array or is empty, return null
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return null;
  }

  // Start at 0, this is where we keep adding the numbers
let total = 0;

// Go through the numbers one by one
for (const num of numbers) {
  // Add the current number to the total
  total += num;
}

// After the loop, give back the final total
return total;
}

console.log(sumNumbers([20, 40, 60])); // 120
console.log(sumNumbers([]));           // null
console.log(sumNumbers('hello'));      // null