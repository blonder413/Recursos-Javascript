const fetchPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (error) {
        reject("Todo mal");
      }
      resolve("Todo ok");
    }, 2000);
  });
};
console.log("inicia operación");

// si se usa await se tiene que usar async
const mostarPost = async () => {
  try {
    // await pausa la ejecución hasta que termine
    const mensaje = await fetchPost();
    console.log(mensaje);
  } catch (error) {
    // capturamos el reject
    console.log(error);
  }
};
mostarPost();
console.log("termina operación");
