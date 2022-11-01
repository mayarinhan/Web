function repeat(text, x, callback) {
    for (let i = 0; i < x; i++) {
      callback(text)
    }
  }
  function compilar() {
    repeat(document.getElementById('text').value, document.getElementById('repet').value, (texto) => {
      alert(texto);
    });
  }
  
  