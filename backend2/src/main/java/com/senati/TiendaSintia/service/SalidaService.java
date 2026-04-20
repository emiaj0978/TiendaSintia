package com.senati.TiendaSintia.service;

import com.senati.TiendaSintia.entity.Salida;
import com.senati.TiendaSintia.repository.SalidaRepository;
import org.springframework.stereotype.Service;
import java.util.List;
//Importamos la anotacion @service
//Esto es la capa de la logica de negocio, aqui van las validaciones, calculos, etc.
@Service
public class SalidaService {
    //Inyectamos el repositorio para poder acceder a la base de datos
    private final SalidaRepository salidaRepository;

    //Contructor: Spring inyecta automaticamente el repositorio(las dependencias)
    public SalidaService(SalidaRepository salidaRepository) {
        this.salidaRepository = salidaRepository;
    }
    //Retorna o recive la lista de todos los clientes
    public List<Salida> listarTodos(){
        return salidaRepository.findAll();
    }

    // Crear un cliente        //nombre de la clase
    public Salida crearSalida(Salida salida){
        return salidaRepository.save(salida);
    }
    //Eliminar el cliente por el id
    public void eliminarSalida(long id){
        salidaRepository.deleteById(id);
    }
}