alert('hola mundo')

const ingresar = () => {
    const respuesta = confirm('Continuar?')
    if (respuesta) {
        console.log('puede continuar');
    } else {
        console.log('no puede continuar');
    }
}

const saludo = () => {
    const nombre = prompt('Ingrese su nombre')
    console.log(`Bienvenido ${nombre}`);
}