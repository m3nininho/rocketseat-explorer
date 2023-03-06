let result = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");
const randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

while (Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente");
  attempts++;
}

alert(`Parabéns! você adivinhou o número em ${attempts} tentativas`);
