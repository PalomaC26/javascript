function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = 22 //data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >=0 && hora < 12){
        //Bom Dia!
        img.src ='fotomanha1.png'
        document.body.style.background = '#cc5835'
        document.getElementsByClassName('texto')[0].style.color = 'black'
        document.getElementsByClassName('texto')[1].style.color = 'black'
    } else if (hora >= 12 && hora <=18){
        //Boa Tarde!
        img.src ='fotomanha2.png'
        document.body.style.background = '#bc7b24'
    } else {
        //Boa Noite!
        img.src ='fotomanha3.png'
        document.body.style.background = '#71b1ca'
    }
    
}