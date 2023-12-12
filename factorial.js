function calculateOperations() {
    var number = parseInt(document.getElementById('numberInput').value);

    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }

    var factorial = 1;
    var sum = 0;
    
    var i = 1;
    while (i <= number) {
        factorial *= i;
        i++;
    }

    var j = 1;
    do {
        sum += j;
        j++;
    } while (j <= number);

    var average = 0;
    for (var k = 1; k <= number; k++) {
        average += k;
    }
    average /= number;

    var resultText = `
        <p>Factorial of ${number}: ${factorial}</p>
        <p>Sum of the first ${number} numbers: ${sum}</p>
        <p>Average of the first ${number} numbers: ${average.toFixed(2)}</p>
    `;

    document.getElementById('result').innerHTML = resultText;
}

function goBack() {
    window.location.href = 'index.html';
}
