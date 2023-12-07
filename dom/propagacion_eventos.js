/**
 * Los eventos de un elemento padre se aplican a los elementos hijos
 */

const contenedor = document.getElementById('contenedor1')
contenedor.addEventListener('click', (e) => {
    console.log('click en el contenedor');
})

const primeraCaja = document.querySelector('.caja')
primeraCaja.addEventListener('click', (e) => {
    // stopPropagation evita que se ejecute el evento del contenedor padre
    e.stopPropagation()
    console.log('click en la caja 1');
})