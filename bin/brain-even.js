#!/usr/bin/env node
import readlineSyns, { question } from 'readline-sync';
    const isEven = (n) => n % 2 == 0
    const getAnswer = (n) => isEven(n) ? 'yes' : 'no'

const brainEven = () => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSyns.question('May I have your name? ')
    console.log('Hello, '+ name)
    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    for (let i = 0; i < 3; i += 1) {
    const ram = () => Math.round(Math.random() * 1000)
    const number = ram()
    console.log('Question: ' + number )
    const ansur = readlineSyns.question('Your answer: ')

    const corectAnswer = getAnswer(number)
    if (ansur == corectAnswer) {
        console.log('Correct!')
    }
     else {
        console.log('Lets try again, ' + name + '!')
        return
    }
}
console.log('Congratulations, '+ name + '!')
}
brainEven()