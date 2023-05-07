const readline = require("readline-sync");
const firstNumberQuestion = readline.question("Please enter your first number ");
const secondNumberQuestion = readline.question("Please enter your second Number ");
const operation = readline.question("Please enter the operation to perform: add, sub, mul, div ")
const firstNumber = Number(firstNumberQuestion);
const secondNumber = Number(secondNumberQuestion);

const addition = (firstNumber, SecondNumber) => {
    const total =  firstNumber + secondNumber;
    return total;
}

const multiplication = (firstNumber, secondNumber) => {
    const total = firstNumber * secondNumber; 
    return total
}

const divide = (firstNumber, secondNumber) => {
    const total = firstNumber / secondNumber;
    return total
}

const subtract = (firstNumber, secondNumber) => {
    const total = firstNumber - secondNumber;
    return total
}

const completeOperation = (operation) => {
    const userChoice = operation
    if(userChoice === 'add'){
        return addition(firstNumber, secondNumber)
    } else if(userChoice === 'mul'){
        return multiplication(firstNumber, secondNumber)
    } else if(userChoice === 'div'){
        return divide(firstNumber, secondNumber)
    } else if(userChoice === 'sub'){
        return subtract(firstNumber, secondNumber)
    }else{
        return "... ERROR ...Please use correct operator"
    }
}
console.log("The result is: " + completeOperation(operation));
