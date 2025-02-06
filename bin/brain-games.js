#!/usr/bin/env node
import readlineSyns from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSyns.question('May I have your name? ')
console.log('Hello, '+ name)