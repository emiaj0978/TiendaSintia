package com.senati.TiendaSintia.controller;

import com.senati.TiendaSintia.entity.Entrada;
import com.senati.TiendaSintia.service.EntradaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//3 ANOTACIONES
//Indica que esta clase maneja peticiones HTTPS y DEVUELVE JSON
@RestController
// Define la URL Base de todos los END-POINT de esta clase
@RequestMapping("api/entradas")
// Esta anotacion permite que el front-end pueda llamar a esta API
// Si no ponemos esto, el navegador bloquea las peticiones por politicas CORS
@CrossOrigin(origins = "*")
public class EntradaController {
    //DECLARAMOS UNA VARIABLE DEFINIDA
    // Inyectamos el servicio para acceder a la logica del negocio
    private final EntradaService entradaService;
    public EntradaController(EntradaService entradaService){
        this.entradaService = entradaService;
    }
    //GET /api/clientes -> devuelve todos los clientes en formato JSON
    @GetMapping
    public List<Entrada> listar() {return entradaService.listarTodos();}

    //POST /api/clientes -> para guardar un cliente
    @PostMapping
    public ResponseEntity<Entrada> crear(@RequestBody Entrada entrada){
        return ResponseEntity.ok(entradaService.crearEntrada(entrada));
    }

    //delete/api/clientes/{id} -> elimina un cliente por su id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable long id){

        entradaService.eliminarEntrada(id);
        return ResponseEntity.noContent().build();

    }
}