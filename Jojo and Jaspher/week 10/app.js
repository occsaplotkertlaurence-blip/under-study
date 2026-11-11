// Grab the elements from the page
let customer = document.getElementById("nameInput"); // text input
let bill = document.getElementById("billInput");     // number input
let output = document.getElementById("output");      // where the result shows

// Works out the tip and the total for a bill.
// Default parameter: if tipPercent is not given, it uses 10.
function getTip(amount, tipPercent = 10) {

    // Guard clause: the bill must be a real number greater than 0
    if (!Number.isFinite(amount) || amount <= 0) {
        return null; // bad bill? stop here, there's nothing to calculate
    }

    let tip = amount * tipPercent / 100; // the tip is a percentage of the bill
    return { tip: tip, total: amount + tip };
}

// When the button is clicked, run this
document.getElementById("tipBtn").addEventListener("click", () => {
    let name = customer.value.trim(); // remove extra spaces around the name
    let amount = Number(bill.value);  // turn the typed text into a number

    // Guard clause: stop early if the name or bill box is empty
    if (name === "" || bill.value === "") {
        output.innerText = "Please enter a name and a bill amount greater than 0.";
        output.className = "error"; // red-brown error color from style.css
        return; // stop here, don't continue
    }

    // Ask getTip for the result (no percent is passed, so the default 10 is used)
    let result = getTip(amount);

    // Guard clause: getTip returns null when the bill is invalid
    if (result === null) {
        output.innerText = "Please enter a name and a bill amount greater than 0.";
        output.className = "error";
        return; // stop here, there's nothing to show
    }

    // Everything is valid, so show the result on the page
    output.innerText = name + ": tip is ₱" + result.tip.toFixed(2) + ", total is ₱" + result.total.toFixed(2);
    output.className = "passed"; // green color from style.css
});