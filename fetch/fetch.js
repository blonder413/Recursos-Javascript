const url = 'https://jsonplaceholder.typicode.com/'

// GET
function todos()
{
    fetch(`${url}posts`)
        .then(response => response.json())
        .then(json => console.log(json))
}

// GET
function uno()
{
    fetch(url + 'todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

// POST
function post()
{
    datos = {
        title: 'título de prueba',
        body: 'texto de ejemplo',
        userId: 1,
    }
    config = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(datos)
    }
    fetch(`${url}post`, config)
        .then(response => response.json())
        .then(json => console.loog(json))
}

// PUT
function put()
{
    const id = 1
    datos = {
        id: id,
        title: 'nuevo título',
        body: 'nuevo texto',
        userId: 1,
    }
    config = {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(datos)
    }
    fetch(`${url}post/${id}`, config)
        .then(response => response.json())
        .then(json => console.log(json))
}

// PATCH
function patch()
{
    const id = 1
    datos = {
        id: id,
        title: 'modificado',
    }
    config = {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(datos)
    }
    fetch(`${url}post/${id}`, config)
        .then(response => response.json())
        .then(json => console.log(json))
}

// DELETE
function metodo_delete()
{
    const id = 1
    config = {
        method: 'DELETE',
    }
    fetch(`${url}post/${id}`, config)
        .then(response => response.json())
        .then(json => console.log(json))
}

todos()
// uno()