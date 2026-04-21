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
                                <button
                                    class="btn btn-outline-primary me-2"
                                     id="btnEditar"
                                     data-bs-toggle="modal" 
                                     data-bs-target="#modalEditarCliente"
                                     data-idcli=${Producto.id}
                                     data-nomcli=${Producto.nombre}
                                     data-apellcli=${Producto.descripcion}
                                     data-dnicli=${Producto.precio_compra}
                                     data-telfcli=${Producto.precio_venta}
                                     data-direcli=${Producto.stock_actual}
                                    >
                                    <i class="fas fa-edit"></i> Editar
                                </button>

                                <!-- Botón Eliminar -->
                                <button id="btnEliminar" data-idproducto = ${Producto.id} class="btn btn-outline-danger">
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
                } else {
                    alert('Error al eliminar el producto.');
                }
            });
    }
});

// Función para guardar producto
async function guardarProducto() {
    const nombre = document.getElementById("p_nombre").value;
    const descripcion = document.getElementById("p_descripcion").value;
    const precio_compra = document.getElementById("p_precio_compra").value;
    const precio_venta = document.getElementById("p_precio_venta").value;
    const stock_actual = document.getElementById("p_stock_actual").value;
    const fecha_vencimiento = document.getElementById("p_fecha_vencimiento").value;
    const categoriaId = document.getElementById("p_categoria").value;

    if (!nombre || !precio_compra || !precio_venta || !categoriaId) {
        alert("Complete todos los campos obligatorios");
        return;
    }

    const producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio_compra: precio_compra,
        precio_venta: precio_venta,
        stock_actual: stock_actual || "0",
        fecha_vencimiento: fecha_vencimiento || null,
        categoria: { id: parseInt(categoriaId) }
    };

    console.log("Enviando producto:", producto);

    try {
        const response = await fetch("http://localhost:8080/api/productos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(producto)
        });

        if (response.ok) {
            alert("Producto registrado exitosamente");
            location.reload();
        } else {
            const error = await response.text();
            console.error("Error:", error);
            alert("Error al registrar producto");
        }
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("Error de conexión con el servidor");
    }
}

// Cargar categorías en el select
async function cargarCategorias() {
    try {
        console.log("Cargando categorías...");
        const response = await fetch("http://localhost:8080/api/categorias");
        
        if (!response.ok) {
            console.error("Error HTTP:", response.status);
            alert("Error al cargar categorías: " + response.status);
            return;
        }
        
        const categorias = await response.json();
        console.log("Categorías recibidas:", categorias);
        
        const select = document.getElementById("p_categoria");
        select.innerHTML = '<option value="">Seleccione una categoría...</option>';
        
        if (categorias.length === 0) {
            const option = document.createElement("option");
            option.value = "";
            option.textContent = " No hay categorías disponibles";
            select.appendChild(option);
            return;
        }
        
        categorias.forEach(c => {
            const option = document.createElement("option");
            option.value = c.id;
            option.textContent = c.nombre_categoria;
            select.appendChild(option);
        });
        
        console.log("Categorías cargadas exitosamente");
        
    } catch (error) {
        console.error("Error de conexión:", error);
        alert("Error de conexión. ¿El backend está corriendo en puerto 8080?");
    }
}

// Eventos
document.addEventListener("DOMContentLoaded", () => {
    // Tu botón se llama "btn-crearcliente"
    const btnGuardar = document.getElementById("btn-crearcliente");
    if (btnGuardar) {
        btnGuardar.onclick = guardarProducto;
        console.log("Botón encontrado, evento asignado");
    } else {
        console.error("Botón 'btn-crearcliente' no encontrado");
    }
    
    // Tu modal se llama "modalRegistroCliente"
    const modal = document.getElementById("modalRegistroCliente");
    if (modal) {
        modal.addEventListener("show.bs.modal", cargarCategorias);
        console.log("Modal encontrado, evento asignado");
    } else {
        console.error("Modal 'modalRegistroCliente' no encontrado");
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

