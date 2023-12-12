
function calculateIncomeTax() {
    var taxableIncome = parseFloat(document.getElementById('taxableIncome').value);
    var resultElement = document.getElementById('result');

    if (isNaN(taxableIncome) || taxableIncome < 0) {
        resultElement.innerHTML = "Please enter a valid taxable income.";
        return;
    }

    var incomeTax = calculateTax(taxableIncome);
    resultElement.innerHTML = "Income Tax: Php " + incomeTax.toFixed(2);
}

function calculateTax(income) {
    if (income <= 250000) {
        return 0;
    } else if (income <= 400000) {
        return (income - 250000) * 0.20;
    } else if (income <= 800000) {
        return 70000 + (income - 400000) * 0.25;
    } else if (income <= 2000000) {
        return 270000 + (income - 800000) * 0.30;
    } else if (income <= 8000000) {
        return 948000 + (income - 2000000) * 0.32;
    } else {
        return 3110000 + (income - 8000000) * 0.35;
    }
}

function goBack() {
    window.location.href = 'index.html';
}
