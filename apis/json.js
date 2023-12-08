/**
 * Javascript Object Notation
 * Permite string, number, objetos, arreglos, boolean, null
 * No permite tener funciones, objetos de fecha o undefined
 * los json deben usar comillas dobles en el índice
 */

const datos = `
{
    "id": 413,
    "nombre": "jill",
    "vivo": true,
    "juegos": [
        {
            "titulo": "resident evil"
        },
        {
            "titulo": "resident evil 3 Némesis"
        }
    ]
}
`
const objeto = JSON.parse(datos)
console.log(objeto.nombre);

const usuario = {
    nombre: 'jill',
    correo: 'jvalentine@bsaa.org'
}
// convertimos a cadena de texto
const cadena = JSON.stringify(usuario)
console.log(cadena);