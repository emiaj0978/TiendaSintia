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
                                <button
                                    class="btn btn-outline-primary me-2"
                                     id="btnEditar"
                                     data-bs-toggle="modal" 
                                     data-bs-target="#modalEditarCliente"
                                     data-idcli=${Categoria.id}
                                     data-nomcli=${Categoria.nombre_categoria}
                                     data-apellcli=${Categoria.descripcion}
                                    >
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

// Función para guardar categoría
function guardarCategoria() {
  const nombre = document.getElementById("c_nombre").value;
  const descripcion = document.getElementById("c_descripcion").value;
  
  console.log("Nombre:", nombre, "Descripción:", descripcion);
  
  if (!nombre || !descripcion) {
    alert("Complete todos los campos");
    return;
  }
  
  fetch("http://localhost:8080/api/categorias", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      nombre_categoria: nombre,  // ← campo correcto para tu entity
      descripcion: descripcion 
    }),
  }).then((response) => {
    console.log(response);
    if (response.ok) {
      alert("Categoría guardada exitosamente");
      location.reload();
    } else {
      response.text().then(text => console.error("Error:", text));
      alert("Error: no se pudo guardar la categoría");
    }
  }).catch((error) => {
    console.error("Error de conexión:", error);
    alert("Error de conexión con el servidor");
  });
}

// Asignar el evento al botón
document.getElementById("btn-crearcliente").onclick = guardarCategoria;

//funcion para poner los datos en el input del FORMULARIO actualizar
function llamardatos() {
  const btnEditar = e.target.closest("#btnEditar");
  const id_cli = btnEditar.dataset.idcli;
  const nom_cli = btnEditar.dataset.nomcli;
  const apell_cli = btnEditar.dataset.apellcli;
  document.getElementById("c_u_nombre").value = nom_cli;
  document.getElementById("c_u_apellido").value = apell_cli;
}

