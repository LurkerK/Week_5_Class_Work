let user = {
    name: 'kirk',
    password: 'giraffe',
    email: 'kirk@dreamjob.com',
    roles: ['programmer', 'developer'],
    contact : {
        office: 'M1234',
        telephone: '612123456'
    }
}
// add a new salary property w/ value
user.salary = 12345  
// Add a new role 'server admin' to the 'roles' array
user.roles.push('server admin')  
// Update the 'location' property within the nested 'contact' object
user.contact.location = 'Minneapolis'

console.log(user)