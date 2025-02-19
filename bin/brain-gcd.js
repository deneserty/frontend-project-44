#!/usr/bin/env node
import readlineSyns from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSyns.question('May I have your name? ')
console.log('Hello, '+ name)

const getGcd = (num1, num2) => {
    let gcd = num1 > num2 ? num2 : num1 
    let max = num1 > num2 ? num1 : num2 
    while (gcd) {
        if (max % gcd === 0){
            return gcd
        } else {
            let remiter = max % gcd
            max = gcd
            gcd = remiter
        }
    }
}

const brainGcd = () => {
const roundsNumber = 3
for (let i = 0; i < roundsNumber; i += 1) {
const num1 = (() => Math.round(Math.random() * 100))()
const num2 = (() => Math.round(Math.random() * 100))()

const anser = getGcd(num1, num2) 
console.log('Question:', num1, num2)
const userAnser = readlineSyns.question('Your answer: ')
if (+userAnser === anser) {
    console.log('Correct')
} else {
    console.log(userAnser + " is wrong answer ;(. Correct answer was " +  anser + "." + " Let's try again, " + name) 
    return
}
}
}
brainGcd()