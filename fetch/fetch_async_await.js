const endpoint = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

const llamandoAPI = async () => {
    try {
        const response = await fetch(endpoint, { cache: "no-cache" });

        // response.ok es propio de esta API
        if (response.ok) {
            const jsonResponse = await response.json();
            mostrarResultado(jsonResponse);
        }
    } catch (error) {
        console.log(error);
    }
};

const mostrarResultado = (response) => {
    console.log(response.results);
    response.results.map((pokemon) => {
        const parrafo = document.createElement("p");
        const p = document.createTextNode(pokemon.name);
        const div = document.querySelector("#resultados");
        parrafo.appendChild(p);
        div.appendChild(parrafo);
        // console.log(pokemon.name);
    });
};

console.log('inicia el proceso');

llamandoAPI();

console.log('termina el proceso');
