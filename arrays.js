let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000])

animals[7] = 'giraffe'
console.log(animals)
console.log(animals[5])

animals[1] = 'zebra'
console.log(animals[1])

animals.push('elephant')
console.log(animals)

let lastAnimal = animals.pop()  // Remove and return the last element
console.log(lastAnimal)
console.log(animals)

animals.unshift('deer')  // Add 'deer' to the beginning
console.log(animals)

let firstAnimal = animals.shift()  // Remove and return the first element 
console.log(firstAnimal)
console.log(animals)

animals.reverse()  // Reverse the order
console.log(animals)

animals.sort()  // sort alphebetically
console.log(animals)

let numberOfAnimals = animals.length
console.log(numberOfAnimals)

console.log(animals.indexOf('walrus'))

if (animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the array')
}

if (animals.includes('cheetah')) {
    console/log('cheetah is in the array')
}

console.log(animals.join(' * '))

animals.forEach( function(animal) {
    console.log(animal.toUpperCase())
})

// Your turn! Use a loop with your animals array,
// can your print the length of each animal name?

animals.forEach(function(animal) {
    console.log(animal.length)
})

// Can you make a new array with the lengths of each animal name?
// So for my example, ['cheetah', 'giraffe', 'lion', 'zebra']
// Create an array [ 7, 7, 4, 5 ]

animals.push('alligator')

let animalNameLength = []
animals.forEach( function(animal) {
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)