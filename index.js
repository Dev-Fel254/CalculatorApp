const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b)=> a * b;

const divide = (a, b)=>b === 0 ? "Error" : a / b;

const operate = (operator, a, b) => {
    switch(operator){
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Invalid operator";
    }
};

let firstNumber = '';
let operator ='';
let secondNumber = '';
let currentValue = '';
let isSecondNumber = false;
let hasCalculated = false;


const display = document.getElementById("display");

const digits = Array.from(document.getElementsByClassName("digit"));
const operators = Array.from(document.getElementsByClassName("operator"));

//Rounds the result to avoid long decimals
const roundResult = (result) => Math.round(result * 1000000)/1000000;

digits.map(digit => {
    digit.addEventListener("click", function ()     {
        const digitValue = digit.getAttribute('data-value');
    
        if(digitValue === '.' && (isSecondNumber ? secondNumber : firstNumber).includes('.')){
            return;
        }

        if(isSecondNumber){
            secondNumber += digitValue;
            currentValue = secondNumber;
        }else{
            firstNumber += digitValue;
            currentValue = firstNumber;
        }

        display.value = currentValue;

        console.log(`Current value: ${currentValue}`);
    });
});

operators.map(op => {
    op.addEventListener("click", function(){
        if(firstNumber !== ''){
            operator = op.getAttribute('data-value');
            isSecondNumber = true;
            console.log(`Operator selected: ${operator}`); 
        }
    });
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", function(){
    if(firstNumber !== '' && secondNumber !=='' && operator !== ''){
        let numArray = [parseFloat(firstNumber), parseFloat(secondNumber)];
        let result = numArray.reduce((acc, curr)=> operate(operator, acc, curr));

        display.value = result;

        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
        isSecondNumber = false;
        
        console.log("Result:", result);
    }
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function(){
    firstNumber = '';
    secondNumber = '';
    operator = '';
    currentValue = '';
    display.value = '';
    isSecondNumber = false;
    console.log("Calculator reset");
    
});


