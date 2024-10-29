import { fetchData } from "./fetch.js";

let page = 1;

const boton = document.querySelector("#siguiente");

boton.addEventListener("click", (e) => {
    page = page + 1;
    console.log(page);
    mostrar(page);
});

const mostrar = async (page) => {
    let datos = await fetchData(page);

    // console.log(datos);

    const div = document.querySelector("#result");

    datos.map((dato) => {
        const h3 = document.createElement("h3");
        h3.textContent = dato.name;

        const img = document.createElement("img");
        img.src = dato.image;
        img.alt = dato.alt_name;
        img.width = 200;

        const p = document.createElement("p");
        p.textContent = dato.about_trimmed;

        div.appendChild(h3);
        div.appendChild(img);
        div.appendChild(p);
    });
};

mostrar(page);
