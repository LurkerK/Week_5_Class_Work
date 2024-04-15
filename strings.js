// string containing class names
let text = 'The classes are itec 1150, itec 1250,itec 2560'

// Replace itec with ITEC
let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

// Replace all occurances of itec with ITEC
let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)

// replace all four-digit numbers with ITEC followed by the matched number using regex with global flag g
let message = 'The classes are 1150, 1250, 2560'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)