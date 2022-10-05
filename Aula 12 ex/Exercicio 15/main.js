function carregar() {
  let msg = document.querySelector("div#msg");
  let img = document.querySelector("img#imagem");
  let data = new Date();
  let hora = data.getHours();
  //let hora = '30'
  msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        //Bom dia
        img.src = '/Aula 12 ex/Assets/foto-manha.jpg'
        document.body.style.background= 'rgb(241,207,179)'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = '/Aula 12 ex/Assets/foto-tarde.jpg'
        document.body.style.background= 'rgb(216, 155,100)'
    }else if (hora > 18 && hora < 5){
        //Boa noite
        img.src = '/Aula 12 ex/Assets/foto-noite.jpg'
        document.body.style.background= 'rgb(51,66,85)'
    } else {
        img.src = '/Aula 12 ex/Assets/foto-erro.jpg'
        msg.innerHTML = '[ERRO] Hora Invalida!'
        document.body.style.background = 'grey'
    }


}

// Manha rgb : 241, 207, 179
//tarde:216, 155,100
//noite:51,66,85