<<<<<<< HEAD
// Importamos los archivos css
=======
// Importamos los archivos css 
import './desarrollo.css';
>>>>>>> origin/desarrollojs



// Creamos una función para generar un número aleatorio entre 1 y 6 
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

// Creamos una función para dibujar los dados 
function dibujarDados() {
    // Obtenemos los dados
    const dados = document.querySelectorAll('.dado');

<<<<<<< HEAD
    // Generamos un número aleatorio para cada dado
    dados.forEach(dado => {
        // Creamos la imagen del dado
=======
    //generamos u n numero aleatorio para cada dado
    for (let i = 0; i < dados.length; i++) {
        const dado = dados[i];
        //cargamos la imagen dado
>>>>>>> origin/desarrollojs
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