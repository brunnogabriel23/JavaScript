const person = {
    firstName: 'Brunno',
    lastName: 'Santos',
    age: "19",
    hobbies: ['Jogar', 'Academia', 'Ler', 'Filmes', 'Assistir Futebol'], 
    dog: {
        name: 'Pandora',
        age: 2
    }
};

// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// MESMA COISA QUE ACIMA
const {age, firstName, lastName, hobbies, dog} = person


const read = person.hobbies[4]
 
console.log(firstName);
console.log(lastName);
console.log(age);    
console.log(hobbies);
                  
console.log(`Meu Hobbie favorito é ${read}`);

// person.dog = 'Pandora'

console.log(person.dog.name);
console.log(dog)