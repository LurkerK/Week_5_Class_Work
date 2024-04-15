function shout(text) {
let shouty_text = text.toUpperCase()
return shouty_text
}

console.log(shout('hello world'))  
// Call the 'shout' function with 'hello web programmers' as input
let message = shout('hello web programmers')
console.log(message)

function f_to_c(f, decimalPlaces) {  // function to convert Fahrenheit to Celsius
    let celsius = (f - 32) * 5 / 9
    // Check if decimalPlaces parameter is truthy
    if (decimalPlaces) {  // undefined values are considered to be false
        // If decimalPlaces provided, round Celsius value to specified number of decimal places
        return celsius.toFixed(decimalPlaces)
    } else {
        return celsius
    }
}
 
let todayTemp = 75
todayCelsius = f_to_c(todayTemp)
console.log(todayCelsius)