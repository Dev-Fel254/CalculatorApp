const add = function (a, b){
    return a + b;
}
const subtract = function(a, b){
    return a - b;
}
const multiply = function(a, b){
    return a * b;
}
const divide = function(a, b){
    return a/b;
}

const operate = function(operator, a, b){
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
}

let firstNumber = '';
let operator ='';
let secondNumber = '';
let currentValue = '';
let isSecondNumber = false;


const display = document.getElementById("display");

const digits = Array.from(document.getElementsByClassName("digit"));
const operators = Array.from(document.getElementsByClassName("operator"));


digits.map(digit => {
    digit.addEventListener("click", function(){
        const digitValue = digit.getAttribute('data-value');
    
        if(digitValue === '.' && (isSecondNumber ? secondNumber : firstNumber).includes('.')){
            return;
        }
        if(secondNumber){
            secondNumber += digitValue;
            currentValue = secondNumber;
        }else{
            firstNumber += digitValue;
            currentValue = firstNumber;
        }

        display.value = currentValue;

        console.log(`Current value: ${currentValue}`);
    })
})

operators.map(op => {
    op.addEventListener("click", function(){
        if(firstNumber !== ''){
            operator = op.getAttribute('data-value');
            isSecondNumber = true;
            console.log(`Operator selected: ${operator}`); 
        }
    });
});





