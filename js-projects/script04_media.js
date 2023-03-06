let nome = prompt("Informe o nome do aluno");
let nota1 = prompt("Informe a primeira nota do aluno");
let nota2 = prompt("Informe a segunda nota do aluno");
let nota3 = prompt("Informe a terceira nota do aluno");

nota1 = Number(nota1);
nota2 = Number(nota2);
nota3 = Number(nota3);

let notaTotal = (nota1 + nota2 + nota3) / 3;
notaTotal = notaTotal.toFixed(2);

if (notaTotal >= 6) {
  alert(
    `Meus parabens ${nome}, você passou de bimestre com a nota de ${notaTotal}`
  );
} else {
  alert(
    `Infelizmente a sua nota foi abaixo da média, ${nome}. Mas estamos juntos com você nessa, okay? Sua nota final foi de ${notaTotal}`
  );
}
