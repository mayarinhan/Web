import {name, calcular} from './modules/calculo.js';

alert("Insira a altura e a largura do objeto!");

function rodar() {
  calcular();
}

document.getElementById('calcular').onclick = function() {rodar()};