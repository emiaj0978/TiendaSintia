// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/categorias')
        .then(response => response.json())
        .then(data => {

            //console.log('Datos:', data);
            const elemento = document.getElementById("table-categoria")

            for (let i = 0; i < data.length; i++) {
                let Categoria = data[i];
                let fila = `
                <tr>
                        <td>${Categoria.id}</td>
                        <td>${Categoria.nombre_categoria}</td>
                        <td>${Categoria.descripcion}</td>
                        <td>
                                <!-- Botón Editar -->
                                <button class="btn btn-outline-primary me-2">
                                    <i class="fas fa-edit"></i> Editar
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

