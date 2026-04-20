package com.senati.TiendaSintia.controller;

import com.senati.TiendaSintia.entity.Producto;
import com.senati.TiendaSintia.service.ProductoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//3 ANOTACIONES
//Indica que esta clase maneja peticiones HTTPS y DEVUELVE JSON
@RestController
// Define la URL Base de todos los END-POINT de esta clase
@RequestMapping("api/productos")
// Esta anotacion permite que el front-end pueda llamar a esta API
// Si no ponemos esto, el navegador bloquea las peticiones por politicas CORS
@CrossOrigin(origins = "*")
public class ProductoController {
    //DECLARAMOS UNA VARIABLE DEFINIDA
    // Inyectamos el servicio para acceder a la logica del negocio
    private final ProductoService productoService;
    public ProductoController(ProductoService productoService){
        this.productoService = productoService;
    }
    //GET /api/clientes -> devuelve todos los clientes en formato JSON
    @GetMapping
    public List<Producto> listar() {return productoService.listarTodos();}

    //POST /api/clientes -> para guardar un cliente
    @PostMapping
    public ResponseEntity<Producto> crear(@RequestBody Producto producto){
        return ResponseEntity.ok(productoService.crearProducto(producto));
    }

    //delete/api/clientes/{id} -> elimina un cliente por su id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable long id){

        productoService.eliminarProducto(id);
        return ResponseEntity.noContent().build();

    }
}