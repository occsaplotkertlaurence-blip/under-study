// Grab the elements from the page
let customer = document.getElementById("nameInput"); // text input
let age = document.getElementById("ageInput");       // number input
let output = document.getElementById("output");      // where the result shows

// When the button is clicked, run this
document.getElementById("priceBtn").addEventListener("click", () => {
    let name = customer.value.trim(); // remove extra spaces around the name
    let years = Number(age.value);    // turn the typed text into a number

    // Guard clause: stop early if the input is empty or not a valid age
    if (name === "" || age.value === "" || years < 1 || years > 120) {
        output.innerText = "Please enter a name and an age from 1 to 120.";
        output.className = "error"; // red-brown error color from style.css
        return; // stop here, don't continue
    }

    // Pick the ticket type and price based on age
    let type = "Regular";
    let price = 200;
    if (years <= 12) {
        type = "Child";
        price = 100;
    } else if (years >= 60) {
        type = "Senior";
        price = 150;
    }

    output.innerText = name + " (" + years + ") gets a " + type + " ticket: ₱" + price;
    output.className = "passed";
});