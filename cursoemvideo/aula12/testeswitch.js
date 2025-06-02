var agora = new Date()
var ds = agora.getHours()
console.log(`Agora são exatamente ${ds} horas`)
switch (ds) {
    case 6:
        console.log('Tenha um boma dia')
        break   
    case 15: 
        console.log('Tenha uma boa tarde')
        break
    case 23:
        console.log('Tenha uma boa noite')
        break 
}       
