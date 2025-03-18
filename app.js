// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    let nombreAmigo = amigo.value.trim();

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre');
    } else {
        listaDeAmigos.push(nombreAmigo);

        // Agregamos el nombre a la lista en el HTML
        const lista = document.getElementById('listaAmigos');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombreAmigo;
        lista.appendChild(nuevoElemento);

        amigo.value = ''; // Limpiar input después de agregar
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];

    document.getElementById('resultado').innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}    