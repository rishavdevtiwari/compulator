let firstNumber = '';
let operator = '';
let secondNumber = '';
let firstcall = false;

// Append number or operator to the input box
function appendToInput(value) {
    let inputBox = document.getElementById('input-box');
//if firstcall is true, reset input for new calc
    if (firstcall) {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        firstcall = false;//reset flag
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
        // If the operator is pressed after a result is displayed
        if (firstcall) {
            // Treat the result as the first number
            firstNumber = document.getElementById('input-box').value;
            firstcall = false; // Reset the firstcall flag
        }
        operator = op; // Set the new operator
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
            case 'sqrt': result = Math.sqrt(f_num); break;
            default: result = 'Error';
        }

        document.getElementById('input-box').value = result; // Display the result
        firstNumber = result.toString(); // Reset first number to result for further calculations
        //if result is number, 'tostring()' will convert it into string
        //if result is string, 'tostring()' will return string
        //resulting string assigned to firstNumber
        //then firstNumber will contain -string- version of "result"
        //set operator checks if firstNumber is not an empty string
        //numbers are parsed as string and later converted into numbers for calculation
        //parseFloat(firstNumber) converts string -> number
        operator = '';
        secondNumber = '';//parseFloat(secondNumber) converts string -> number
        firstcall = true;//allow new input after calculation
    }
}

// Function to handle backspace
function backspace() {
    let inputBox = document.getElementById('input-box');
    if (operator === '') {
        // Remove the last character from firstNumber
        firstNumber = firstNumber.slice(0, -1);
    } else {
        // Remove the last character from secondNumber
        secondNumber = secondNumber.slice(0, -1);
    }
    // Update the input box display
    inputBox.value = firstNumber + operator + secondNumber;
}

// Clear the input box and reset the calculator
function clearCalc() {
    firstNumber = '';
    operator = '';
    secondNumber = '';
    document.getElementById('input-box').value = '';
}