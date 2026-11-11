// Grab the elements from the page
let customer = document.getElementById("nameInput");  // text input
let usage = document.getElementById("usageInput");    // number input
let output = document.getElementById("output");       // where the result shows

// Works out the water bill for the cubic meters used.
// Default parameter: if ratePerCubic is not given, it charges 25 pesos per cubic meter.
function getBill(cubicMeters, ratePerCubic = 25) {

    // Guard clause: the usage must be a real number greater than 0
    if (!Number.isFinite(cubicMeters) || cubicMeters <= 0) {
        return null; // bad usage? stop here, there's nothing to compute
    }

    return cubicMeters * ratePerCubic; // usage multiplied by the rate
}

// When the button is clicked, run this
document.getElementById("billBtn").addEventListener("click", () => {
    let name = customer.value.trim();   // remove extra spaces around the name
    let cubic = Number(usage.value);    // turn the typed text into a number

    // Guard clause: stop early if the name or usage box is empty
    if (name === "" || usage.value === "") {
        output.innerText = "Please enter a name and the cubic meters used (more than 0).";
        return; // stop here, don't continue
    }

    // Ask getBill for the result (no rate is passed, so the default 25 is used)
    let bill = getBill(cubic);

    // Guard clause: getBill returns null when the usage is invalid
    if (bill === null) {
        output.innerText = "Please enter a name and the cubic meters used (more than 0).";
        return; // stop here, there's nothing to show
    }

    // Everything is valid, so show the result on the page
    output.innerText = name + " used " + cubic + " cubic meters. Bill: ₱" + bill.toFixed(2);
});