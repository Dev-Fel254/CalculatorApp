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

let firstNumber = 3;
let operator ="+";
let secondNumber = 5;

let result = operate(operator, firstNumber, secondNumber);
console.log("Result: " + result);


const display = document.getElementById("display");

const digits = document.getElementsByClassName("digit");
const operators = document.getElementsByClassName("operator");

for(let i = 0; i<digits.length; i++){
    digits[i].addEventListener("click", function(){
        display.value += digits[i].getAttribute('data-value');
        console.log('Digit clicked:', digits[i].getAttribute('data-value')); 
    })
}

for(let i = 0; i<operators.length; i++){
    operators[i].addEventListener("click", function(){
        display.value += operators[i].getAttribute('data-value');                                                                                                                                                  
        console.log('Operator clicked:', operators[i].getAttribute('data-value'));
    })
}



