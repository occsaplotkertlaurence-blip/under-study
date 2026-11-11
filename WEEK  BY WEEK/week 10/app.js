// Grab the elements from the page
let student = document.getElementById("studentInput"); // name box
let score = document.getElementById("scoreInput");     // score box
let output = document.getElementById("output");        // where the result shows

// When the button is clicked, run this
document.getElementById("checkBtn").addEventListener("click", () => {
    let name = student.value.trim();  // remove extra spaces around the name
    let points = Number(score.value); // turn the typed text into a number

    // Guard clause: stop early if the input is empty or outside 0-100
    if (name === "" || score.value === "" || points < 0 || points > 100) {
        output.innerText = "Please enter a name and a score from 0 to 100.";
        output.className = "error"; // for red error styling in CSS
        return; // stop here, don't continue
    }

    // Find the letter grade (starts at F, then checks from highest)
    let letter = "F";
    if (points >= 90) letter = "A";
    else if (points >= 80) letter = "B";
    else if (points >= 70) letter = "C";
    else if (points >= 60) letter = "D";

    let passed = points >= 60; // true if 60 and above

    // Show the result, with a message depending on pass or fail
    output.innerText = name + " scored " + points + " (" + letter + "). " +
        (passed ? "Passed!" : "Needs improvement.");
    output.className = passed ? "passed" : "failed"; // for green/red styling
});