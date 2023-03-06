let number1 = prompt(
  "Informe o primeiro numero desejado para realizar as operações "
);
let number2 = prompt(
  "Informe o segundo numero desejado para realizar as operações "
);

let sum = Number(number1) + Number(number2);
let subtraction = Number(number1) - Number(number2);
let multiplication = Number(number1) * Number(number2);
let division = Number(number1) / Number(number2);
let restOfDivison = Number(number1) % Number(number2);

alert(`A soma dos dois numeros é de: ${sum}`);
alert(`A subtração dos dois numeros é de: ${subtraction}`);
alert(`A multiplicação dos dois numeros é de: ${multiplication}`);
alert(`A divisão dos dois numeros é de: ${division}`);
alert(`O resto da divisão dos dois numeros é de: ${restOfDivison}`);
