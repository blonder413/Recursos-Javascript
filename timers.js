/*
 * recibe un callback que va a ejecutar
 * El segundo parámetro es el tiempo en milisegundos a esperar antes de ejecutarse
 */
setTimeout(() => {
    console.log('hola mundo');
}, 3000)

const saludo = () => {
    console.log('hola');
}
setTimeout(saludo, 3000)

// podemos ponerlo dentro de una función para que inicie después de alguna acción
let id
const iniciar = () => {
    id = setTimeout(saludo, 3000)
}

const detener = () => {
    clearTimeout(id)
}

/**
 * Set interval permite ejecutar una función cada cierto tiempo
 */
contador = 0
setInterval(() => {
    console.log(contador);
    contador++
}, 1000)


let contador = 0
let idInterval
const empezar = () => {
    idInterval= setInterval(() => {
        console.log(contador);
        contador++
    }, 1000)
}

const parar = () => {
    clearInterval(idInterval)
}

