// Variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
let Attempts = "";

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener('keypress', handleKeyPress)

// Função 
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value < 0 || inputNumber.value > 10){
    alert(`
    Valor incorreto!!! 
    Insira um numero de 0 a 10,
    e não pode ser negativo`)
    return;
  }

  

  if (Number(inputNumber.value) == randomNumber) {
     

    toggleScreen()

    Attempts = xAttempts > 1 ? 'Tentativas' : 'Tentativa';

    document.querySelector(
      ".screen2 h1"
    ).innerText = `Acertou em ${xAttempts} ${Attempts}`;
    }
  checkCountAttempts();
  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function handleKeyPress(e){
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
}}

function checkCountAttempts(){
  if (inputNumber.value === '') {
    xAttempts = 0
  }
}