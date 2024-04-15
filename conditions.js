// pre-requisites for Android programming - C# or Java

let takenCSharp = true
let takenJava = true

if (takenCSharp || takenJava) {  // checks if either is True
    console.log('You meet hte pre-requisites for Android')
} else {
    console.log('You must take C# or Java')
}

// Your turn! To be a senator, there are 3 requirements:
// you must be at least 30 years old
// you must have  been a US citizen for 9 or more years
// you must live in the state you want to represent

let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateToRepresent) {  // strict equality
    console.log('You are eligible to be a senator')
} else {
    console.log('Sorry, you are ineligible')
}

// falsy values - undefined, null, empty lists, empty objects, 0, false
if ('' === 0) {
    console.lo0g('the same!')
} else {
    console.log('not the same')
}