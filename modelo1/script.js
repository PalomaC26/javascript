function verificar (){


    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    msg.innerHTML = `Agora são ${hora} horas`

    if (fano.value.length == 0 || Number(fano.value > ano)){
     alert('[ERROR] Verifique os dados e tente novamente!')
    }
      else{
       //alert('tudo ok)
       var fsex = document.getElementsByName('radsex') //não vou usar [] no momento
       var idade = ano - Number(fano.value) // calcular a idade
       res.innerHTML = `Idade calculada ${idade}`
       //re.innerHTML = Idade calculada ${idade} // para testar se função esta correta
       var genero = '' //getElementsByName []
       if (fsex[0].checked){
          genero = 'Homem'

      //testar se é criança, jovem, adulto ou idoso
      if(idade >=0 && idade < 10) {
        //criança
        Img.setAtribute('src ,')
      }else if (idade < 21){
        //jovem
      }else if (idade < 50){
        //adulto
      }else{
        //idoso
      }

     } else if (fsex[1]){
        genero = 'Mulher'
       }

       //testar se é criança, jovem, adulto ou idoso
      if(idade >=0 && idade < 10) {
        //criança
      }else if (idade < 21){
        //jovem
      }else if (idade < 50){
        //adulto
      }else{
        //idoso
      }

       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
      
    