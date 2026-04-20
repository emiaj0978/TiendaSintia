package com.senati.TiendaSintia.controller;

import com.senati.TiendaSintia.entity.Categoria;
import com.senati.TiendaSintia.service.CategoriaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//3 ANOTACIONES
//Indica que esta clase maneja peticiones HTTPS y DEVUELVE JSON
@RestController
// Define la URL Base de todos los END-POINT de esta clase
@RequestMapping("api/categorias")
// Esta anotacion permite que el front-end pueda llamar a esta API
// Si no ponemos esto, el navegador bloquea las peticiones por politicas CORS
@CrossOrigin(origins = "*")
public class CategoriaController {
    //DECLARAMOS UNA VARIABLE DEFINIDA
    // Inyectamos el servicio para acceder a la logica del negocio
    private final CategoriaService categoriaService;
    public CategoriaController(CategoriaService categoriaService){
        this.categoriaService = categoriaService;
    }
    //GET /api/clientes -> devuelve todos los clientes en formato JSON
    @GetMapping
    public List<Categoria> listar() {return categoriaService.listarTodos();}

    //POST /api/clientes -> para guardar un cliente
    @PostMapping
    public ResponseEntity<Categoria> crear(@RequestBody Categoria categoria){
        return ResponseEntity.ok(categoriaService.crearCategoria(categoria));
    }

    //delete/api/clientes/{id} -> elimina un cliente por su id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable long id){

        categoriaService.eliminarCategoria(id);
        return ResponseEntity.noContent().build();

    }
}
