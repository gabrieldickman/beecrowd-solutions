let valorA = document.querySelector("#a");
let valorB = document.querySelector("#b");
let resultado = document.querySelector("#resultado");
let btn = document.querySelector("#calcular");



btn.addEventListener("click", () => {
  let num1 = Number(valorA.value);
  let num2 = Number(valorB.value);

  calcular(num1, num2)
});

function calcular(a, b) {
  let soma = a + b;
  setResultado(soma);
}

function setResultado(soma) {
  resultado.innerHTML = `A soma dos numeros: ${soma}`
}