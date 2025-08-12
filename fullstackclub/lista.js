let times = ["Jovem Plan", "Valência", "Vila Nova", 10, false]

let JovemPlan = times[0];

console.log(JovemPlan)

console.log(times)

times.unshift("Falange");

times.pop();
times.pop();

console.log(times)

times.push("Camarões")

times.push("Vale")

times.push("Flamengo")

times[6] = "Cata Ventos"

let indexOfVale = console.log(times.indexOf("Vale")) 

let sortedtimes = times.sort();

let timeIsArray = Array.isArray(times);

console.log(sortedtimes)
console.log(times)
console.log(timeIsArray)
