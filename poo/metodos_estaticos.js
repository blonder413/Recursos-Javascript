class Usuario {
    static registrados = 413
    static eliminar(id) {
        return `Eliminó el usuario con el id ${id}`
    }
}

console.log(Usuario.eliminar(4))
console.log(Usuario.registrados)