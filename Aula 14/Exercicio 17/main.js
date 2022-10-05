function verificar() {
  let itxt = document.querySelector("#txti");
  let ftxt = document.querySelector("#txtf");
  let ptxt = document.querySelector("#txtp");
  let res = document.querySelector("#res");

  if (
    itxt.value.length == 0 ||
    ftxt.value.length == 0 ||
    ptxt.value.length == 0 ||
    ptxt.value == 0
  ) {
    window.alert("[ERRO] Insira um número!");
  } else {
    let i = Number(itxt.value);
    let f = Number(ftxt.value);
    let p = Number(ptxt.value);

    res.innerHTML = "Contando: ";
    if (i < f) {
      //contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} `;
      }
    } else {
      //contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} `;
      }
    }
  }
}

function limpar() {
  let itxt = (document.querySelector("#txti").value = "");
  let ftxt = (document.querySelector("#txtf").value = "");
  let ptxt = (document.querySelector("#txtp").value = "");
  let res = document.querySelector("#res");
  res.innerHTML = "Esperando contagem...";
}

/* res.innerHTML = `${itxt}${ftxt}${ptxt}`
    
    for(itxt; itxt <= ftxt; itxt += ptxt){
        res.innerHTML = `${itxt}`
        

    } 
    */
