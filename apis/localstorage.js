/**
 * APIs del navegador
 * local storage
 * fetch
 * history
 * validation
 */
document.getElementById('boton1').addEventListener('click', () => {
    const nombre = prompt('ingrese su nombre')
    window.localStorage.setItem('nombre', nombre)
})

if (window.localStorage.nombre) {
    console.log(`Hola ${window.localStorage.nombre}`);
} else {
    console.log('Hola anónimo');
}

document.getElementById('boton2').addEventListener('click', () => {
    window.localStorage.removeItem('nombre')
})