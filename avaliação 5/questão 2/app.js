import { media, maiorNota, menorNota } from "./media.js"

let notas = [];

const addNota = () => {
    const nota = parseFloat(document.getElementById("nota").value)
    if (nota >= 0 && nota <=10) {
        notas.push(nota)
        atualizarValores()
    } else {
        alert("digite um número entre 0 e 10!")
    }
}

const atualizarValores = () => {
    document.getElementById("mediaNotas").innerText = media(notas)
    document.getElementById("maiorNota").innerText = maiorNota(notas)
    document.getElementById("menorNota").innerText = menorNota(notas)

    if (media(notas) < 6) {
        document.getElementById('mediaNotas').classList.remove("text-green")
        document.getElementById('mediaNotas').classList.add("text-red")
    } else {
        document.getElementById('mediaNotas').classList.remove("text-red")
        document.getElementById('mediaNotas').classList.add ("text-green")
    }
}

document.getElementById("btn").addEventListener("click", addNota)