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
fetchPost()
  .then((mensaje) => {
    console.log(mensaje);
  })
  .catch((error) => {
    console.log(error);
  });
