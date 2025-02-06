#!/usr/bin/env node
import readlineSyns from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSyns.question('May I have your name? ')
console.log('Hello, '+ name)
console.log('What is the result of the expression?')
const znak = ['+','-','*']

const getCalc = (num1, num2, operator) => {
    switch (operator) {
        case '-':
            return num1 - num2;
        case '+':
            return num1 + num2;
        case '*':
            return num1 * num2;
        default:
            throw new Error('invalid expression');
    }
}

const brainCalc = () => {
    for (let i = 0; i < 3; i += 1) {
        const num1 = (() => Math.round(Math.random() * 1000))()
        const num2 = (() => Math.round(Math.random() * 1000))()
        const index = (() => Math.round(Math.random() * 2))()
        const operator = znak[index]
        const userAnswer = readlineSyns.question(num1 + operator + num2)
        const corectAnswer = getCalc(num1, num2, operator )
        if (userAnswer === String(corectAnswer)) {
            console.log('Correct!')
        } else {
            console.log("Let's try again," + name)
            return 
        }
    }
}
brainCalc()