// Define a function 'cityStateAddress' that takes 'city' and 'state' parameters and returns the formatted address
function cityStateAddress(city, state) {
    // Concatenate 'city' and 'state' with a comma and space, and convert 'state' to uppercase
    let address = `${city}, ${state.toUpperCase()}`  // wi -> WI
    return address
}

console.log(cityStateAddress('Minneapolis', 'mn'))
// Call the 'cityStateAddress' function with 'Seattle' as the city and 'WA' as the state abbreviation, store the result in 'address', then log 'address' to the console
let address = cityStateAddress('Seattle', 'WA')
console.log(address)


function isMinnesotaZip(code) {
    // All MN zip are between these: 55001 and 56763
    if (code >= 55001 && code <= 56763) {  // js uses &&
        return true
    } else {
        return false
    }
}

function validGPA(gpa) {
    return gpa >= 0 && gpa <= 4    
}   



console.log(isMinnesotaZip('55403'))  // true
console.log(isMinnesotaZip('55401'))  // true
console.log(isMinnesotaZip('56763'))  // true
console.log(isMinnesotaZip('999999999999')) // false
console.log(isMinnesotaZip('-1'))  // false
