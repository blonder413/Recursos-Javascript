const datos = (usuario, callback) => {
    console.log(`Obteniendo datos de ${usuario}`);
    setTimeout(() => {
        let posts = ['post1', 'post2', 'post3']
        callback(posts)
    }, 2000)
}

datos('carlos', (posts) => {
    console.log(posts);
})