let = nombreAmigos = []

 function agregarAmigo() { 

    // Obtenemos el valor del input
    const input = document.getElementById("amigo");
    const nuevoAmigo = input.value.trim();
    if (nuevoAmigo !== "") {
      nombreAmigos.push(nuevoAmigo);
      input.value = "";
      console.log(nombreAmigos);
        actualizarLista();
    } else {
      alert("Por favor, ingresa un nombre.");
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < nombreAmigos.length; i++) {
      const li = document.createElement("li");
      li.textContent = nombreAmigos[i];
      lista.appendChild(li);
    }
  }


function sortearAmigo() {
    if (nombreAmigos.length < 2) {
      alert("Por favor, ingresa al menos dos amigos.");
      return;
    }
    const amigoSorteado = nombreAmigos[Math.floor(Math.random() * nombreAmigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Tu amigo secreto es: ${amigoSorteado}`;
}