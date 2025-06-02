function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são exatamente ${hora}H`
if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha (2).png' 
    document.body.style.background = '#f5a459'
} else if (hora >= 12 && hora < 18) {
    img.src = 'fototarde.png'
    document.body.style.background = '#b7cbf6'
} else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#063362'
}
}