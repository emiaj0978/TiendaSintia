// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/productos')
        .then(response => response.json())
        .then(data => {

            //console.log('Datos:', data);
            const elemento = document.getElementById("table-producto")

            for (let i = 0; i < data.length; i++) {
                let Producto = data[i];
                let fila = `
                <tr>
                        <td>${Producto.id}</td>
                        <td>${Producto.nombre}</td>
                        <td>${Producto.descripcion}</td>
                        <td>${Producto.precio_compra}</td>
                        <td>${Producto.precio_venta}</td>
                        <td>${Producto.stock_actual}</td>
                        <td>${Producto.fecha_vencimiento}</td>
                        <td>${Producto.categoria.nombre_categoria}</td>
                        <td>
                                <!-- Botón Editar -->
                                <button class="btn btn-outline-primary me-2">
                                    <i class="fas fa-edit"></i> Editar
                                </button>

                                <!-- Botón Eliminar -->
                                <button id="btnEliminar" data-idproducto = ${Producto.id} class="btn btn-outline-danger">
                                    <i class="fas fa-trash"></i> Eliminar
                                </button>
                            </td>
                </tr>
                        `
                elemento.innerHTML += fila;
                //console.log(cliente)

            }
            //elemento.innerHTML = JSON.stringify(data);
            //console.log(elemento)
        })
});

//evento de click en javascript
//creamos una variable que almacene el DOM de ese elemento
document.addEventListener("click", function (e) {
    const btnDelete = e.target.closest("#btnEliminar");
    if (btnDelete) {
        alert("Eliminando...");
        const id = btnDelete.dataset.idproducto;
        //console.log(id); //para en cosole que id es nada mas
        //fletch("http://localhost:8080/api/clientes/"+id, {
        fetch(`http://localhost:8080/api/productos/${id}`, {
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


