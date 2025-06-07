const Calculator = document.getElementById('display');
function appendToDisplay(input) {
    display.value +=input;
}
function clearDisplay() {
    display.value = '';
}
function calculate() {
    try{

    
    if (display.value === 'Infinity' || display.value === 'NaN') {
        display.value = 'Error';
    }
    else if (display.value === '') {
        display.value = '0';
    }
    else if (display.value === 'Error') {
        display.value = '';
    }
    else {
        display.value = eval(display.value);
    }
    }
    catch (error) {
        display.value = 'Error';
    }
 
    
}
function backspace() {
    display.value = display.value.slice(0, -1);
}