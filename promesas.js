/**
 * Una promesa es una forma de decirle a la app que espere una operación
 * que cuando la operación esté lista se le devolverá el valor
 */

const promesa = new Promise((resolve, reject)=> {
    // accioń que se va a ejecutar
    setTimeout(() => {
        const exito = false
        if (exito) {
            resolve('Todo ok')
        } else {
            reject('Todo mal')
        }
    }, 4000)
})

// then se ejecuta cuando la operación tuvo éxito
// el then recibe la respuesta del resolve
promesa.then((mensaje) => {
    console.log(mensaje);
})

// en caso de no éxito
promesa.catch((mensaje) => {
    console.log(mensaje);
})