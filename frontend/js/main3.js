// EVENTOS EN JAVASCRIPT (CLICK, CARGAR, KEY,)
document.addEventListener("DOMContentLoaded", () => {
    fetch('http://localhost:8080/api/entradas')
        .then(response => response.json())
        .then(data => {

            //console.log('Datos:', data);
            const elemento = document.getElementById("table-entrada")

            for (let i = 0; i < data.length; i++) {
                let Entrada = data[i];
                let fila = `
                <tr>
                        <td>${Entrada.id}</td>
                        <td>${Entrada.fecha}</td>
                        <td>${Entrada.cantidad}</td>
                        <td>${Entrada.producto.nombre}</td>
                        <td>
                                <!-- Botón Editar -->
                                <button
                                    class="btn btn-outline-primary me-2"
                                     id="btnEditar"
                                     data-bs-toggle="modal" 
                                     data-bs-target="#modalEditarCliente"
                                     data-idcli=${Entrada.id}
                                     data-nomcli=${Entrada.fecha}
                                     data-apellcli=${Entrada.cantidad}
                                    >
                                    <i class="fas fa-edit"></i> Editar
                                </button>

                                <!-- Botón Eliminar -->
                                <button id="btnEliminar" data-identrada = ${Entrada.id} class="btn btn-outline-danger">
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
        const id = btnDelete.dataset.identrada;
        //console.log(id); //para en cosole que id es nada mas
        //fletch("http://localhost:8080/api/clientes/"+id, {
        fetch(`http://localhost:8080/api/entradas/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    alert('Cliente eliminado correctamente.');
                    // Recargar la página o actualizar la tabla
                    location.reload();
                } else {
                    alert('Error al eliminar el producto.');
                }
            });
    }
});

// Función para guardar entrada
async function guardarEntrada() {
    const fecha = document.getElementById("c_fecha").value;
    const cantidad = document.getElementById("c_cantidad").value;
    const productoId = document.getElementById("c_producto").value;

    if (!fecha || !cantidad || !productoId) {
        alert("Complete todos los campos");
        return;
    }


    const entrada = {
        fecha: fecha,
        cantidad: cantidad,
        producto: { id: parseInt(productoId) }  // Así lo espera tu backend
    };

    try {
        const response = await fetch("http://localhost:8080/api/entradas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(entrada)
        });

        if (response.ok) {
            alert("Guardado exitoso");
            location.reload();
        } else {
            alert("Error al guardar");
        }
    } catch (error) {
        alert("Error de conexión");
    }
}

async function cargarProductos() {
    const response = await fetch("http://localhost:8080/api/productos");
    const productos = await response.json();
    
    const select = document.getElementById("c_producto");
    select.innerHTML = '<option value="">Seleccione...</option>';
    productos.forEach(p => {
        const option = document.createElement("option");
        option.value = p.id;
        option.textContent = p.nombre;
        select.appendChild(option);
    });
}

// Eventos
document.getElementById("btn-crearcliente").onclick = guardarEntrada;
document.getElementById("modalRegistroCliente").addEventListener("show.bs.modal", cargarProductos);

//funcion para poner los datos en el input del FORMULARIO actualizar
function llamardatos() {
  const btnEditar = e.target.closest("#btnEditar");
  const id_cli = btnEditar.dataset.idcli;
  const nom_cli = btnEditar.dataset.nomcli;
  const apell_cli = btnEditar.dataset.apellcli;
  document.getElementById("c_u_nombre").value = nom_cli;
  document.getElementById("c_u_apellido").value = apell_cli;
}

