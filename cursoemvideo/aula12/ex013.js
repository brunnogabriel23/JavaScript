var Agora = new Date()
var hora = Agora.getHours() 
console.log(`Agora são exatmente ${hora}H`) 
if (hora < 12) {
    console.log('Tenha um Bom dia')
}  else if (hora <= 18) {
    console.log('Tenha uma Boa tarde')
} else if (hora <= 23) {
    console.log('Tenha uma boa noite')
} else {
    console.log('Tenha uma boa madrugada')
}