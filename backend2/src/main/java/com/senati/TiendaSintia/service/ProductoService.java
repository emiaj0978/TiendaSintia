package com.senati.TiendaSintia.service;

import com.senati.TiendaSintia.entity.Producto;
import com.senati.TiendaSintia.repository.ProductoRepository;
import org.springframework.stereotype.Service;
import java.util.List;
//Importamos la anotacion @service
//Esto es la capa de la logica de negocio, aqui van las validaciones, calculos, etc.
@Service
public class ProductoService {
    //Inyectamos el repositorio para poder acceder a la base de datos
    private final ProductoRepository productoRepository;

    //Contructor: Spring inyecta automaticamente el repositorio(las dependencias)
    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }
    //Retorna o recive la lista de todos los clientes
    public List<Producto> listarTodos(){
        return productoRepository.findAll();
    }

    //Eliminar el cliente por el id
    public void eliminarProducto(long id){
        productoRepository.deleteById(id);
    }
}

