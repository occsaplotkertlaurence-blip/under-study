// Adds a and b. If b is not given, it defaults to 0
const add = (a, b = 0) => a + b;

// Divides a by b. If b is 0, it stops early and returns null
const divide = (a, b) => {
  if (b === 0) {
    return null; // guard clause: can't divide by zero
  }

  return a / b;
};

// DEFAULT PARAMETER
console.log(add(60, 7));    // 67, b is given
console.log(add(60));       // 60, no b, so it uses 0
console.log(divide(60, 3)); // 20, b is given
console.log(divide(60));    // 60, no b, so it uses 1

// GUARD CLAUSE
console.log(add(60, 'x'));  // null, 'x' is not a number
console.log(divide(60, 0)); // null, can't divide by zero
console.log(divide('a', 2)); // null, 'a' is not a number

// STRING FUNCTION

const repeatText = (text, times = 2) => { // default parameter: if times is not given, use 2

  // Guard clause #1: check the text
  if (typeof text !== 'string' || text === '') {
    return null; // not a string, or empty? stop here, there's nothing to repeat
  }

  // Guard clause #2: check the times
  if (typeof times !== 'number' || times < 0 || !Number.isInteger(times)) {
    return null; // must be a whole number and not negative, because 'ha'.repeat(-1) crashes
  }

  return text.repeat(times); // everything is valid, so repeat the text that many times
};

console.log(repeatText('ha'));     // haha, no times given, so the default 2 is used
console.log(repeatText('ha', 3));  // hahaha, times is 3, so it repeats 3 times
console.log(repeatText('', 3));    // null, text is empty, so guard #1 stops it

const countItem = (items, target) => {
  // guard clause #1: items must be an array
  if (!Array.isArray(items)) {
    return null; // not a list? stop here
  }

  // guard clause #2: items must not be empty
  if (items.length === 0) {
    return null; // nothing to count in an empty list
  }

  // guard clause #3: target must be given
  if (target === undefined) {
    return null; // no target to look for, so stop here
  }

  return items.filter(item => item === target).length;
};

console.log(countItem(['a', 'b', 'a'], 'a')); // 2
console.log(countItem([], 'a'));              // null, empty
console.log(countItem('hi', 'a'));            // null, not an array