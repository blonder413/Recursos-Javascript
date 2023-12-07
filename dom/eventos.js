const boton1 = document.getElementById('boton1')
const primeraCaja = document.querySelector('.caja')
boton1.addEventListener('click', () => {
    console.log(e);
    primeraCaja.classList.toggle('activa')
})

// el parámetro e representa el evento
const cajas = document.querySelectorAll('.caja')
cajas.forEach((caja) => {
    caja.addEventListener('click', (e) => {
        console.log(e.target.innerHTML);
    })
})