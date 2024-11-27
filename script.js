let firstNumber = '';
let operator = '';
let secondNumber = '';
let firstcall = false;

// Append number or operator to the input box
function appendToInput(value) {
    let inputBox = document.getElementById('input-box');

    if (firstcall) {
        firstNumber = '';
        firstcall = false;
    }

    if (operator === '') {
        firstNumber += value; // Add to first number
    } else {
        secondNumber += value; // Add to second number
    }

    inputBox.value = firstNumber + operator + secondNumber; // Show the current expression
}

// Set the operator and update the input box
function setOperator(op) {
    if (firstNumber !== '') {
        operator = op;
        document.getElementById('input-box').value = firstNumber + operator; // Update display
    }
}

// Perform calculation when '=' is clicked
function calculate() {
    if (firstNumber && operator && secondNumber) {
        let f_num = parseFloat(firstNumber);
        let s_num = parseFloat(secondNumber);
        let result;

        switch (operator) {
            case '+': result = f_num + s_num; break;
            case '-': result = f_num - s_num; break;
            case '*': result = f_num * s_num; break;
            case '/': result = f_num / s_num; break;
            case '%': result = f_num % s_num; break;
            case '^': result = Math.pow(f_num, s_num); break;
            default: result = 'Error';
        }

        document.getElementById('input-box').value = result; // Display the result
        firstNumber = result; // Reset first number to result for further calculations
        operator = '';
        secondNumber = '';
        firstcall = true;
    }
}

// Clear the input box and reset the calculator
function clearCalc() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    document.getElementById('input-box').value = '';
}