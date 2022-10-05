function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fAno = document.querySelector("#txtano");
  let res = document.querySelector("#res");
  if (fAno.value.length == 0 || Number(fAno.value) > ano) {
    window.alert("[ERRO] ANO INVALIDO, TENTE NOVAMENTE!");
  } else {
    let fsex = document.getElementsByName("radsex"); // cria variavel para seleção de sexo - input radio com mesmo nome
    let idade = ano - Number(fAno.value); // calcula a idade
    let genero = ""; // cria variavel genero
    var img = document.createElement("img"); // cria elemento img
    img.setAttribute("id", "foto"); // set atributo id ='foto'
    
    
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //bebe
        img.setAttribute("src", "/Aula 12 ex/Assets/homem-bebe.jpg");
      } else if (idade < 16) {
        //crianca
        img.setAttribute("src", "/Aula 12 ex/Assets/homem-crianca.jpg");
      } else if (idade < 25) {
        // jovem
        img.setAttribute("src", "/Aula 12 ex/Assets/homem-jovem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "/Aula 12 ex/Assets/homem-adulto.jpg");
      } else if (idade < 90) {
        //idoso
        img.setAttribute("src", "/Aula 12 ex/Assets/homem-velho.jpg");
      } else {
        //mumia
        img.setAttribute("src", "/Aula 12 ex/Assets/foto-mumia.jpg");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //criança
        img.setAttribute("src", "/Aula 12 ex/Assets/mulher-bebe.jpg");
      } else if (idade < 16) {
        //crianca
        img.setAttribute("src", "/Aula 12 ex/Assets/mulher-crianca.jpg");
      } else if (idade < 25) {
        // jovem
        img.setAttribute("src", "/Aula 12 ex/Assets/mulher-jovem.jpg");
      } else if (idade < 50) {
        //adulto
        img.setAttribute("src", "/Aula 12 ex/Assets/mulher-adulta.jpg");
      } else if (idade < 90) {
        //idoso
        img.setAttribute("src", "/Aula 12 ex/Assets/mulher-velha.jpg");
      } else {
        //mumia
        img.setAttribute("src", "/Aula 12 ex/Assets/foto-mumia.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}

function limpar() {
  let res = document.querySelector("#res");
  document.querySelector("#txtano").value = "";
  res.innerHTML = "Preencha os dados acima para ver o resultado!";
}
