class Usuario {
    constructor(usuario, password) {
        this.usuario = usuario
        this.password = password
    }

    obtenerPost() {
        const posts = ['post1', 'post2']
        return posts
    }
}

class Moderador extends Usuario {
    constructor(usuario, password) {
        super(usuario, password)
    }
}

const usuario = new Usuario('jill', '123456')
console.log(usuario.obtenerPost());

