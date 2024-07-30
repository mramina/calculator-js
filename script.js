
const display = document.getElementById('display');
const history = document.getElementById('calc_history');
let num1 = null;
let operator = null;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function devide(num1, num2) {
    if (num2 === 0) {
        return "Ошибка";
    }
    return num1 / num2;
}

function appendToDisplay(number) {
    if (display.value === '0') {
        display.value = number;
    } else {
        display.value += number;
    }
}

function appendOperator(op) {
    if (operator !== null) {
        calculate()
    } 
    num1 = parseFloat(display.value);
    operator = op;
    display.value = '0';
    history.textContent = num1 + ' ' + operator;
}

function calculate() {
    const num2 = parseFloat(display.value);
    let result = 0;

    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = devide(num1, num2);
            break;
    }

    display.value = result;
    history.textContent += ' ' + num2 + ' ' + '=';
    operator = null;
    num1 = result;
}

function clearDisplay() {
    display.value = '0';
    num1 = null;
    operator = null;
}

// обработчики событий
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', function() {
        appendToDisplay(button.textContent);
    });
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function() {
        appendOperator(button.textContent);
    });
});

document.querySelector('.operator2').addEventListener('click', function() {
    clearDisplay();
});

document.querySelectorAll('.operator2').forEach(button => {
    button.addEventListener('click', function() {
        if (button.textContent === '=') {
            calculate();
        }
    });
});