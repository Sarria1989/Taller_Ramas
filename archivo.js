// Importamos los archivos css 
import './desarrollo.css'

//creamos una funcion para generar un numero aleatorio en tre 1 y 6 
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 6) + 1;
}

//creamos un funcion para dubujar los dados 
function dibujarDados() {
    //obtenemos los dados
    const dados = document.querySelectorAll('.dado');

    //generamos u n numero aleatorio para cada dado
    for (let i = 0; i < dados.length; i++ ){

        //cargamos la imagen dado
        const imagen = document.createElement('img');
        imagen.src = `img/dado-${generarNumeroAleatorio()}.png`;

        //agregar la imagen al dado
        dados.appendChild(imagen);
    }
}

//llamamos a la funcion paras dibujar los dados 
dibujarDados();
//escuchamos el evento click en el boton
document.querySelector('#lanzar').addEventListener('click', () => {
    //lanzamos los dados
    dibujarDados();
});