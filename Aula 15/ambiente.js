let num = [5, 8, 4];
num[3] = 6; //Especifica a posição da variavel no vetor
num.push(7); //Coloca direto na ultima posição
num.sort(); // Organiza em ordem crescente
num.length; // Tamanho do vetor
console.log(`Nosso vetor é: ${num}`);
console.log(`O tamanho do vetor é: ${num.length}`);
console.log(`Na posição 0 está o número: ${num[0]}`);

let pos = num.indexOf(8); /*Qual posição está o valor*/
if (pos == -1) {
  console.log("O valor não foi encontrado");
} else {
  console.log(`O valor 8 está na posição: ${pos}`);
}
