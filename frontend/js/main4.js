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
                                <button
                                    class="btn btn-outline-primary me-2"
                                     id="btnEditar"
                                     data-bs-toggle="modal" 
                                     data-bs-target="#modalEditarCliente"
                                     data-idcli=${Salida.id}
                                     data-nomcli=${Salida.fecha}
                                     data-apellcli=${Salida.cantidad}
                                     data-dnicli=${Salida.producto.nombre}
                                    >
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

// Función para guardar salida
async function guardarSalida() {
    const fecha = document.getElementById("s_fecha").value;      // ← usas s_nombre para fecha
    const cantidad = document.getElementById("s_cantidad").value; // ← usas s_apellido para cantidad
    const productoId = document.getElementById("s_producto").value;

    if (!fecha || !cantidad || !productoId) {
        alert("Complete todos los campos");
        return;
    }

    const salida = {
        fecha: fecha,
        cantidad: cantidad,
        producto: { id: parseInt(productoId) }
    };

    try {
        const response = await fetch("http://localhost:8080/api/salidas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(salida)
        });

        if (response.ok) {
            alert("Salida registrada exitosamente");
            location.reload();
        } else {
            const error = await response.text();
            alert("Error: " + error);
        }
    } catch (error) {
        alert("Error de conexión");
    }
}

async function cargarProductosSalida() {
    try {
        const response = await fetch("http://localhost:8080/api/productos");
        const productos = await response.json();
        
        const select = document.getElementById("s_producto");
        select.innerHTML = '<option value="">Seleccione...</option>';
        
        productos.forEach(p => {
            const option = document.createElement("option");
            option.value = p.id;
            option.textContent = `${p.nombre} (Stock: ${p.stock_actual || 0})`;
            select.appendChild(option);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

// Asignar eventos
document.addEventListener("DOMContentLoaded", () => {
    const btnGuardar = document.getElementById("btn-crearcliente"); // ← tu botón actual
    if (btnGuardar) {
        btnGuardar.onclick = guardarSalida;
    }
    
    const modal = document.getElementById("modalRegistroCliente"); // ← tu modal actual
    if (modal) {
        modal.addEventListener("show.bs.modal", cargarProductosSalida);
    }
});

//funcion para poner los datos en el input del FORMULARIO actualizar
function llamardatos() {
  const btnEditar = e.target.closest("#btnEditar");
  const id_cli = btnEditar.dataset.idcli;
  const nom_cli = btnEditar.dataset.nomcli;
  const apell_cli = btnEditar.dataset.apellcli;
  const dni_cli = btnEditar.dataset.dnicli;
  const telf_cli = btnEditar.dataset.telfcli;
  const dire_cli = btnEditar.dataset.direcli;
  document.getElementById("c_u_nombre").value = nom_cli;
  document.getElementById("c_u_apellido").value = apell_cli;
  document.getElementById("c_u_dni").value = dni_cli;
  document.getElementById("c_u_telefono").value = telf_cli;
  document.getElementById("c_u_direccion").value = dire_cli;
}