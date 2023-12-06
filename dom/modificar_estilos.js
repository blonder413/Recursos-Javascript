// obtenemos el elemento con clase caja dentro del elemento con id contenedor1
const primeraCaja = document.querySelector('#contenedor1 .caja')

console.log(primeraCaja.classList);

// agrega una clase al elemento
const agregarClase = () => {
    primeraCaja.classList.add('activa')
}

// elimina una clase de un elemento
const eliminarClase = () => {
    primeraCaja.classList.remove('activa')
}

// agrega una case a elemento si no la tiene, si la tiene la elimina
const alternarClase = () => {
    primeraCaja.classList.toggle('activa')
}

const comprobarClase = () => {
    if (primeraCaja.classList.contains('activa')) {
        console.log('tiene la clase activa');
    } else {
        console.log('no tiene la clase activa');
    }

    console.log('tiene las siguientes clases');
    primeraCaja.classList.forEach((clase) => {
        console.log(clase);
    })
}