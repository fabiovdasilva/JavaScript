function gerar() {
  let num = document.querySelector("#txtnum");
  let tab = document.querySelector("#Ctab");

  if (num.value.length == 0 || num.value.lenght == 8) {
    window.alert("Digite um número!");
  } else {
    let tnum = Number(num.value);
    tab.innerHTML = "";
    tab.setAttribute("size", 10);
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option"); // criar option
      item.text = `${tnum} x ${c} = ${tnum * c}`; // n.text para aparecer dentro do option 
      tab.appendChild(item); // Adiciona o option na tabela
    }
  }
}

function limpar() {
  let num = (document.querySelector("#txtnum").value = "");
  let tab = document.querySelector("#Ctab");
  let item = document.createElement("option");
  item.text = `Digite um número...`;
  tab.innerHTML = "";
  tab.setAttribute("size", 2);
  tab.appendChild(item);
}
