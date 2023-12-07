// obtenemos el último elemento .caja dentro de #contenedor2
const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child')
ultimaCaja.style.background = '#000'
ultimaCaja.style.color = '#fff'

const cajas = document.querySelectorAll('.caja');
let tamanho = 24

const incrementarFuente = () => {
    cajas.forEach((caja) => {
        tamanho++
        caja.style.fontSize = `${tamanho}px`
    })
}

const disminuirFuente = () => {
    cajas.forEach((caja) => {
        tamanho--
        caja.style.fontSize = `${tamanho}px`
    })
}