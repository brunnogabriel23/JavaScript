// String 

const firstName = "Brunno"
const lastName = "Gabriel"
let sobrenome = "Gomes"
let name = 'Samuel Lino'

const names = 'Felipe, Maria, João'

console.log('Meu nome é ' + firstName + ' ' + lastName + ' ' + sobrenome + '!') 
console.log(`Meu nome é ${firstName.toUpperCase()} ${lastName.toLocaleLowerCase()} ${sobrenome} `)

console.log(names.split(","))

console.log(`O ${name} é o novo reforço do Flamengo`)

name = 'Santos'
console.log(`O ${name} é o novo reforço do Flamengo`)