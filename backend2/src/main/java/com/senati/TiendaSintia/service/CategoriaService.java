package com.senati.TiendaSintia.service;

import com.senati.TiendaSintia.entity.Categoria;
import com.senati.TiendaSintia.repository.CategoriaRepository;
import org.springframework.stereotype.Service;
import java.util.List;
//Importamos la anotacion @service
//Esto es la capa de la logica de negocio, aqui van las validaciones, calculos, etc.
@Service
public class CategoriaService {
    //Inyectamos el repositorio para poder acceder a la base de datos
    private final CategoriaRepository categoriaRepository;

    //Contructor: Spring inyecta automaticamente el repositorio(las dependencias)
    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    //Retorna o recive la lista de todos los clientes
    public List<Categoria> listarTodos(){
        return categoriaRepository.findAll();
    }

    // Crear un cliente        //nombre de la clase
    public Categoria crearCategoria(Categoria categoria){
        return categoriaRepository.save(categoria);
    }
    //Eliminar el cliente por el id
    public void eliminarCategoria(long id){
        categoriaRepository.deleteById(id);
    }
}
