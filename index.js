// CALCULATOR PROGRAM

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = Function('"use strict";return (' + display.value + ')')();
    } catch (e) {
        display.value = 'Error';
    }
}

// EVENT LISTENERS FOR BUTTONS
document.querySelectorAll('#keys button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculateResult();
        } else {
            appendToDisplay(value);
        }
    });
});

// OPTIONAL: HANDLE KEYBOARD INPUT
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});
