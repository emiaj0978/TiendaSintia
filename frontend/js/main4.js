// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/salidas')
        .then(response => response.json())
        .then(data => {

            //console.log('Datos:', data);
            const elemento = document.getElementById("table-salida")

            for (let i = 0; i < data.length; i++) {
                let Salida = data[i];
                let fila = `
                <tr>
                        <td>${Salida.id}</td>
                        <td>${Salida.fecha}</td>
                        <td>${Salida.cantidad}</td>
                        <td>${Salida.producto.nombre}</td>
                        <td>
                                <!-- Botón Editar -->
                                <button class="btn btn-outline-primary me-2">
                                    <i class="fas fa-edit"></i> Editar
                                </button>

                                <!-- Botón Eliminar -->
                                <button id="btnEliminar" data-idsalida = ${Salida.id} class="btn btn-outline-danger">
                                    <i class="fas fa-trash"></i> Eliminar
                                </button>
                            </td>
                </tr>
                        `;
                elemento.innerHTML += fila;
                //console.log(cliente)

            }
        });
          // DOM (document object model) Dar accion al boton de guardar cliente
  const btnSaveCliente = document.getElementById("btn-crearcliente");
  btnSaveCliente.addEventListener("click", guardarCliente);
});


//evento de click en javascript
//creamos una variable que almacene el DOM de ese elemento
document.addEventListener("click", function (e) {
    const btnDelete = e.target.closest("#btnEliminar");
    if (btnDelete) {
        alert("Eliminando...");
        const id = btnDelete.dataset.idsalida;
        //console.log(id); //para en cosole que id es nada mas
        //fletch("http://localhost:8080/api/clientes/"+id, {
        fetch(`http://localhost:8080/api/salidas/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                alert('Cliente eliminado correctamente.');
                // Recargar la página o actualizar la tabla
                location.reload();
            }else {
                alert('Error al eliminar el producto.');
            }
        });
    }
});