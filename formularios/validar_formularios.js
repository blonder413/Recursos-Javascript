const formulario = document.getElementById('formulario-donacion')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const datos = {
        correo: formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked
    }

    if (datos.correo.length < 10) {
        console.log('más caracteres para el correo');
        return false
    }

    if (datos.pais == 0) {
        console.log('seleccione un país');
        return false
    }

    if (datos.donacion === '') {
        console.log('seleccione una cantidad a donar');
        return false
    }

    if (datos.fecha === '') {
        console.log('seleccione una fecha');
        return false
    }

    if (!datos.terminos) {
        console.log('debe aceptar los términos');
        return false
    }

    // console.log(datos.correo);
    console.log(datos);
    formulario.submit()
})