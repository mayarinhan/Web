const name = 'calculo';

function calcular() {
  let calculo;
  var alt = document.getElementById("alt").value;
  var lar = document.getElementById("larg").value;

  calculo = alt * lar;

  if (lar == alt) {
    alert("É um quadrado e sua área é: " + calculo);
  } else {
    alert("É um retângulo e sua área é: " + calculo);
  }
}

export { name, calcular };