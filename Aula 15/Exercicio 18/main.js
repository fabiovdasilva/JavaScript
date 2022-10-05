let num = document.querySelector("#fnum");
let lista = document.querySelector("#flista");
let res = document.querySelector("#res");
let valores = [];

function fNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function fLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    /* Se o valor na lista foi diferente de -1 (-1 = não achou) */ return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (fNumero(num.value) && !fLista(num.value, valores)) {
    /*Se o valor for um número e não está na lista (! = não)*/ valores.push(
      Number(num.value) /*Adicionar valor a lista*/
    );
    let item = document.createElement(
      "option",
      "opt"
    ); /* Criar elemento option */
    item.text = `Valor ${num.value} adicionado.`; /* Modificando text do option */
    lista.appendChild(item); /* Colocando option na lista (option in select)*/
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }

  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar");
  } else {
    let tot = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }

    media = soma / tot;

    res.innerHTML = "";
    res.innerHTML += `<p>No total, temos ${tot} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informador foi ${maior}</p>`;
    res.innerHTML += `<p>O menor valor informador foi ${menor}</p>`;
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`;
    res.innerHTML += `<p>A média seria ${media}</p>`;
  }
}

function limpar() {
  document.querySelector("#fnum").value = "";
  res.innerHTML = "";
  valores = [];
  lista.innerHTML = "";
}

//let item = document.querySelector("option");

/*var vchild = lista.lastElementChild;
while (vchild) {
  lista.removeChild(vchild)
  vchild = lista.lastElementChild;
}*/

/*;
for (let c = valores.length; c > 0; c--) {
    lista.removeChild(item);
    valores.pop();
    res.innerHTML = `${c}`
  }*/
