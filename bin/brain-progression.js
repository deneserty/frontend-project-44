#!/usr/bin/env node
import readlineSyns from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSyns.question('May I have your name? ')
console.log('Hello, '+ name)


const brainProgression = () => {
    const roundsNumber = 3
    for (let i = 0; i < roundsNumber; i += 1) {
const progression = new Array(10)
progression[0] = (() => Math.round(Math.random() * 100))()
const rast = (() => Math.round(Math.random() * 10))()

for (let i = 1; i < progression.length; i += 1) {
    const element = progression[i-1] + rast
    progression[i] = element
} 
const randomIndex = Math.floor(Math.random() * 10)
const answer = progression[randomIndex]
progression[randomIndex] = ".."

console.log("Question: " , progression.join(' '))

const userAnser = readlineSyns.question('Your answer: ')
if (+userAnser === answer) {
    console.log('Correct')
} else {
    console.log(userAnser + " is wrong answer ;(. Correct answer was " +  answer + "." + " Let's try again, " + name) 
    return
}
}
}
brainProgression()