function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var resultElement = document.getElementById("result");
    var conversionType = document.getElementById("conversionType").value;

    if (isNaN(inputValue)) {
        resultElement.textContent = "Please enter a valid number.";
        return;
    }

    var result;
    switch (conversionType) {
        case "1":
            result = (inputValue - 32) * 5/9; 
            resultElement.textContent = inputValue + " Fahrenheit is " + result.toFixed(2) + " Celsius.";
            break;
        case "2":
            result = (inputValue * 9/5) + 32; 
            resultElement.textContent = inputValue + " Celsius is " + result.toFixed(2) + " Fahrenheit.";
            break;
        case "3":
            result = inputValue * 3.28084; 
            resultElement.textContent = inputValue + " Meters is " + result.toFixed(2) + " Feet.";
            break;
        case "4":
            result = inputValue / 3.28084; 
            resultElement.textContent = inputValue + " Feet is " + result.toFixed(2) + " Meters.";
            break;
        default:
            resultElement.textContent = "Invalid conversion type.";
            break;
    }
}

function goBack() {
    window.location.href = 'index.html';
}

function showInput() {
    var conversionType = document.getElementById("conversionType").value;
    var inputSection = document.getElementById("inputSection");

    if (conversionType === "1" || conversionType === "2" || conversionType === "3" || conversionType === "4") {
        inputSection.style.display = "block";
    } else {
        inputSection.style.display = "none";
    }
}
