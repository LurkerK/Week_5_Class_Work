let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

birds.forEach( function(bird, index) {
    // repeat once for each object in array
    // function will be called for each object in the array
    console.log(index, bird.toUpperCase)
    // 'bird' represents the current element being processed.
    // 'index' represents the index of the current element being processed.
})

// traditional for loop
for ( let x = 0 ; x < birds.length ; x++) {  // x++ = x+1
    let bird = birds[x]
    console.log(x, bird.toUpperCase)
}