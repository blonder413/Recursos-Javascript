const fetchPost = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;
      if (error) {
        reject("Error");
      }
      resolve("Todo ok");
    }, 2000);
  });
};
// las promesas son asíncronas
console.log('inicia operación');
fetchPost()
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });
console.log('termina operación');