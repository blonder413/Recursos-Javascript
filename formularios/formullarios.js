/**
 * Dos formas de acceder a formularios
 * - mediante el objeto forms
 * - mediante métodos del dom como getElementById
 */

// console.log(document.forms['formulario-donacion']);
// console.log(document.forms['formulario-donacion']['correo'].value);

// const correo = document.querySelector('#formulario-donacion #correo')
// const correo = document.querySelector('#formulario-donacion [name="correo"]')
// console.log(correo.value);

document.getElementById('enviar').addEventListener('click', () => {
    const correo = document.querySelector('#formulario-donacion [name="correo"]')
    console.log(correo.value);

    console.log(document.forms['formulario-donacion']['pais'].value)

    const formuario = document.forms['formulario-donacion']
    console.log(formuario['donacion'].value);
    console.log(formuario.fecha.value);
    console.log(formuario['terminos-y-condiciones'].checked);
})
