// A fórmula para calcular a área de uma circunferência é: area = π . raio2. Considerando para este problema que π = 3.14159:
// Apresentar a mensagem "A=" seguido pelo valor da variável area, conforme exemplo abaixo, com 4 casas após o ponto decimal.
let valorRaio = document.querySelector("#raio");
let btn = document.querySelector("#calcular");
let resultado = document.querySelector("#resultado");

btn.addEventListener("click", () => {
  let raio = Number(valorRaio.value);
  let n = 3.14159;
  calcularArea(n, raio);
});

function calcularArea(n, raio) {
  let area = n * raio ** 2;
  setResultado(area.toFixed(4));
}

function setResultado(area) {
  resultado.innerHTML = `A=${area}`;
}
