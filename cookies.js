const crearCookie = () => {
    document.cookie = 'nombre=Jill'
    document.cookie = 'organizacion=bsaa; expires=1 Jan 2024 01:00:00 UTC'
    // console.log(document.cookie);
    leerCookies()
}

const leerCookies = () => {
    let usuario
    let datos = []
    const cookies = document.cookie.split(';')
    cookies.forEach((cookie) => {
        datos.push(cookie.split('='))
    })
    // console.log(datos)

    datos.forEach((dato) => {
        if (dato[0] == 'nombre') {
            console.log(dato[1]);
        }
        // console.log(dato[0]);
    })
}

const borrarCookie = () => {
    document.cookie = 'nombre=;expires=1 Jan 2000 01:00:00 UTC'
    leerCookies()
}

leerCookies()