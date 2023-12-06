const eliminarCaja = () => {
    const padre = document.getElementById('contenedor1')
    
    // obtenemos el primer elemento
    const cajaAEliminar = padre.querySelector('.caja')

    if (cajaAEliminar) {
        padre.removeChild(cajaAEliminar)
    }
}