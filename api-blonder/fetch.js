const url = 'http://localhost/blog-yii-2-bootstrap-4/web/apirest/'

// GET
function todos()
{
    fetch(`${url}articulo`)
        .then(response => response.json())
        .then(json => console.log(json))
}

// GET
function uno(id)
{
    fetch(url + 'articulos/' + id)
        .then(response => response.json())
        .then(response => mostrar_articulo(response))
}

// todos()

document.getElementById('buscar').addEventListener('click', () => {
    const id = document.getElementById('id').value
    if (id && id > 0) {
        uno(id)
    }
})

function mostrar_articulo(data)
{
    const div_datos = document.getElementById('datos')
    div_datos.innerHTML = ''
    const titulo = '<h2>' + data.titulo + '</h2>'
    const slug = '<small>' + data.slug + '</small>'
    div_datos.innerHTML = titulo + slug
}