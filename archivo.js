// Importamos los archivos css



// Creamos una función para generar un número aleatorio entre 1 y 6 
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

// Creamos una función para dibujar los dados 
function dibujarDados() {
    // Obtenemos los dados
    const dados = document.querySelectorAll('.dado');

    // Generamos un número aleatorio para cada dado
    dados.forEach(dado => {
        // Creamos la imagen del dado
        const imagen = document.createElement('img');
        imagen.src = `img/dado-${generarNumeroAleatorio()}.png`;

        // Agregamos la imagen al dado
        dado.appendChild(imagen);
    });
}

// Llamamos a la función para dibujar los dados 
dibujarDados();

// Escuchamos el evento click en el botón
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#lanzar').addEventListener('click', () => {
        dibujarDados();
    });
});