package com.senati.TiendaSintia.service;

import com.senati.TiendaSintia.entity.Entrada;
import com.senati.TiendaSintia.repository.EntradaRepository;
import org.springframework.stereotype.Service;
import java.util.List;
//Importamos la anotacion @service
//Esto es la capa de la logica de negocio, aqui van las validaciones, calculos, etc.
@Service
public class EntradaService {
    //Inyectamos el repositorio para poder acceder a la base de datos
    private final EntradaRepository entradaRepository;

    //Contructor: Spring inyecta automaticamente el repositorio(las dependencias)
    public EntradaService(EntradaRepository entradaRepository) {
        this.entradaRepository = entradaRepository;
    }
    //Retorna o recive la lista de todos los clientes
    public List<Entrada> listarTodos(){
        return entradaRepository.findAll();
    }

    // Crear un cliente        //nombre de la clase
    public Entrada crearEntrada(Entrada entrada){
        return entradaRepository.save(entrada);
    }
    //Eliminar el cliente por el id
    public void eliminarEntrada(long id){
        entradaRepository.deleteById(id);
    }
}
