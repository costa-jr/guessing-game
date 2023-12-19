// Variáveis do programa
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const tryBtn = document.querySelector("#tryBtn");
const resetBtn = document.querySelector("#resetBtn");
let randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

// Eventos do programa
tryBtn.addEventListener("click", handleTryClick);
resetBtn.addEventListener("click", handleResetClick);
document.addEventListener("keypress", handleKeyPress);

// Funções do programa:
// #1. lógica principal do jogo
function handleTryClick(e) {
  e.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  verifyInput(inputNumber);

  if (Number(inputNumber.value) == randomNumber) {
    screenToggle();

    attempts == 1
      ? (screen2.querySelector(
          "h2"
        ).innerText = `WoW! You got it in the first attempt!`)
      : (screen2.querySelector(
          "h2"
        ).innerText = `Got it in ${attempts} tries!`);
  }

  inputNumber.value = "";
  attempts++;
}
// #2. validando a entrada do usuário
function verifyInput(inputNumber) {
  if (inputNumber.value == "") {
    alert("Please entry a valid number.");

    inputNumber.value = "";
    attempts--;
  } else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    alert(`
    ${Number(inputNumber.value)} is an invalid number for this game.

    Please, entry a number between 0 and 10 only.
    `);

    inputNumber.value = "";
    attempts--;
  }
}
// #3. resetando o jogo
function handleResetClick() {
  screenToggle();

  randomNumber = Math.round(Math.random() * 10);
  attempts = 1;
}
// #4. permitindo o uso do teclado 'Enter'
function handleKeyPress(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
// #5. criando o toggle entre as páginas
function screenToggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
