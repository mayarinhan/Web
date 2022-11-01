const media = (numeros) => {
    let mediaNotas = 0.0;
    numeros.forEach((numero) => {
        mediaNotas = (mediaNotas + numero);
    });
    mediaNotas = mediaNotas/numeros.length
    return mediaNotas;
}

const maiorNota = (numeros) => {
    let maiorNota = 0;
    numeros.forEach((numero) => {
        if (numero > maiorNota) {
            maiorNota = numero;
        }
    })
    return maiorNota;
}

const menorNota = (numeros) => {
    let menorNota = maiorNota(numeros)
    numeros.forEach((numero) => {
        if (numero < menorNota ) {
            menorNota = numero;
        }
    })
    return menorNota;
}

export { media, maiorNota, menorNota}
