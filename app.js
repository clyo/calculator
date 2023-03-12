const grid = document.getElementsByClassName('container');
const buttons = document.querySelectorAll('.btn');
const numbers = document.querySelectorAll('#number');
const equals = document.querySelector('#equal');
const operator = document.querySelectorAll('#operator');
const clear = document.querySelector('#clear');
let displayValue = '';
let firstNum = '';
let secondNum = '';
let operators = ['=','-','+','/','*'];
let clickedOp;



let screen = document.getElementsByClassName("screen");
screen[0].textContent = displayValue;

function addition(a, b) {
    return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
};

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
};


function operate(a,b,c){
    if (c == '+'){
        return addition(a, b);
    } else if (c == '-'){
        return subtract(a, b);
    } else if (c == '*'){
        return multiply(a, b);
    } else if (c == '/'){
        return divide(a, b);
    };
};



numbers.forEach ( btn => {
    btn.addEventListener('click', (e) => {
                displayValue = displayValue.concat(btn.textContent);
                document.getElementById("screen").innerHTML = displayValue;
                //firstNum = btn.textContent;
                console.log(firstNum);
                if (firstNum == ''){
                    firstNum = btn.textContent;
                    console.log(firstNum + " = first num.2");
                }else {
                    secondNum = btn.textContent;
                    console.log(secondNum + " = second num");
                };
    });
});

clear.addEventListener('click', (e) =>{
    displayValue = '';
    document.getElementById("screen").innerHTML = displayValue;
});


operator.forEach ( operator => {
    operator.addEventListener('click', (e) =>{
        displayValue = displayValue.concat(operator.textContent);
        clickedOp = operator.textContent;
    });
});


equals.addEventListener('click', (e) =>{
    result = operate(firstNum, secondNum, clickedOp);
    displayValue = result;
    return result
});