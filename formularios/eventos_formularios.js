const formulario = document.forms['formulario-donacion']
const enviar = formulario.enviar

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('hola');
})

formulario.pais.addEventListener('change', (e) => {
    // console.log(pais.value);
    console.log(e.target.value);
})

formulario['cantidad-5'].addEventListener('change', () => console.log(formulario['cantidad-5'].value) )
formulario['cantidad-10'].addEventListener('change', () => console.log(formulario['cantidad-10'].value) )

formulario.correo.addEventListener('focus', () => {
    console.log('correo');
})
formulario.correo.addEventListener('blur', () => {
    console.log('correo fuera');
})

formulario.correo.addEventListener('keydown', (e) => {
    console.log(e);
})

formulario.correo.addEventListener('keyup', (e) => {
    console.log(`soltó la tecla ${e.key}`);
})