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




