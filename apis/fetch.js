/**
 * fetch nos permite hacer peticiones a un servidor
 */
const endpoint = "https://api.npoint.io/6ec7de555474a3917f58";

/*
fetch(endpoint)
    .then((respuesta) => {
        // console.log(`respuesta ${respuesta}`);
        const promesa = respuesta.json();
        promesa.then((datos) => {
            console.log(datos);
            console.log(datos.nombre);
        }).catch((error) => {
            console.log(error);
        });
    })
    .catch((error) => {
        console.log(error);
    });
*/
const obtenerDatos = async() => {
    const respuesta = await fetch(endpoint)
    const datos = await respuesta.json()
    console.log(datos);
}
obtenerDatos()