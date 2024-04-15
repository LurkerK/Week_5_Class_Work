let user = { usernaem: 'kirk', password: 'giraffe'}

console.log(user.username)  // quicker version, not always viable
console.log(user['username'])


console.log(user.password)
console.log(user['password'])

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console/log(user[usernameProperty])

user.password = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'kirk@minneapolis.edu'  // add new email property to the user object
console.log(user)
console.log(user.email)