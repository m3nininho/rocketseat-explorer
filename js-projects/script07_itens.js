// meu codigo:

// let list = [];

// function all() {
//   let menu = prompt(
//     "Olá usuário! Digite a opção desejada: \n\n 1. Cadastrar um item na lista \n 2. Mostrar itens cadastrador \n 3. Sair do programa."
//   );
//   menu = Number(menu);

//   if (menu == 1) {
//     itemAdicionado();
//   } else if (menu == 2) {
//     mostrarItens();
//   } else if (menu == 3) {
//     alert("Até mais amigo");
//     return;
//   }
//   function itemAdicionado() {
//     let itemReported = prompt("Cadastre o item desejado: ");
//     list.push(itemReported);
//     alert(`O item ${itemReported} foi cadastrado com sucesso`);
//     all();
//   }
//   function mostrarItens() {
//     if (list.length == 0) {
//       alert("Não há itens cadastrados");
//       all();
//     } else {
//       alert(list);
//     }
//   }
// }
// all();

// Codigo do Mayk:

let option;
let items = [];

while (option != 3) {
  option = Number(
    prompt(`
  Olá usuário! Digite o número da opção desejada
  
  1. Cadastrar um item na lista
  2. Mostrar itens cadastrados
  3. Sair do programa
  `)
  );

  switch (option) {
    case 1:
      let item = prompt("Digite o nome do item");
      items.push(item);
      break;
    case 2:
      if (items.length == 0) {
        alert("Não existem itens cadastrados");
      } else {
        alert(items);
      }
      break;
    case 3:
      alert("Tchau");
      break;
    default:
      alert("Favor digitar somente as opções mostradas");
  }
}
