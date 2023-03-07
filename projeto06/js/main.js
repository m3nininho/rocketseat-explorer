const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

function handleTryClick(event) {
  event.preventDefault(); // não realizar o comportamento padrão do envio do form ao clicar no botão.

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();
    screen2.querySelector("h2").innerText = `Acertou em ${attempts} tentativas`;
  }

  inputNumber.value = "";
  attempts++;
}

btnTry.addEventListener("click", handleTryClick);

function handleResetClick() {
  toggleScreen();
  attempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

btnReset.addEventListener("click", handleResetClick);

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});
