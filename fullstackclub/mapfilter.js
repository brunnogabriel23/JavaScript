// Map

const numbers = [1, 2, 3, 4, 5];

const numbersMultipliedBytwo = numbers.map(function (number) {
    return number * 2
})

console.log(numbersMultipliedBytwo)

// Filter

 const ages = [1, 2, 3, 27, 4, 10, 40];

 const evenAges = ages.filter(function(age) {
    return age % 2 === 0 
 });

 console.log(evenAges);

// Reduce

const idades = [8, 13, 27, 30, 22, 40];

const sumOfAges = idades.reduce(function (age, accumulator) {
    return accumulator + age;
}, 0)

console.log(sumOfAges) 