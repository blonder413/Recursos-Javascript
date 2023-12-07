/**
 * Tipos de propagación
 * Bubbling (false por defecto)
 * En bubbling el evento  del elemento hijo reacciona primero y después el evento del elemento padre
 * Capturing (true)
 * En capturing el elemento padre reacciona primero y después el elemento hijo
 * Solo se establece su valor en el contenedor padre
 */
const contenedor = document.getElementById('contenedor1')
contenedor.addEventListener('click', () => {
    console.log('click en el contenedor');
}, true)    // el tercer elemento es el tipo de propagación, por defecto false

const primeraCaja = document.querySelector('.caja')
primeraCaja.addEventListener('click', () => {
    console.log('click en la caja 1');
})