#!/usr/bin/env node
import readlineSyns from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSyns.question('May I have your name? ')
console.log('Hello, '+ name)

const brainPrime = () =>{
const numPrime = (num) => {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true;
}

for (let i = 0; i < 3; i++) { 
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = numPrime(number) ? "yes" : "no"; 
    console.log("Question: " , number)

const userAnswer = readlineSyns.question('Your answer: ')

    if (userAnswer === correctAnswer) {
        console.log("Correct!");
    } else {
        console.log(`Wrong! The correct answer was "${correctAnswer}".`);
        console.log(`Let's try again, ${name}!`);
        return; 
    }
}
}
brainPrime()