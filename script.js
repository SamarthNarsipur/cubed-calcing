let displayScreen = document.getElementById('display');
let currentExpression = '';

function pressKey(value) {
    if (currentExpression === '0' || currentExpression === 'Error') {
        currentExpression = value;
    } else {
        currentExpression += value;
    }
    updateDisplay();
}

function clearScreen() {
    currentExpression = '0';
    updateDisplay();
}

function updateDisplay() {
    displayScreen.innerText = currentExpression;
}

function calculate() {
    try {
        if (currentExpression === '' || currentExpression === 'Error') return;
        
    
        let result = eval(currentExpression);
        currentExpression = result.toString();
    } catch (error) {
        currentExpression = 'Error';
    }
    updateDisplay();
}

