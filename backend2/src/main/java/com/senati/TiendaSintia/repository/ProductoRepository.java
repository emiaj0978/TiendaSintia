package com.senati.TiendaSintia.repository;

// IMPORTAMOS LOS DRIVERS, METODOS
import com.senati.TiendaSintia.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//Anotacion @repository INTERFAZ COMO LA CAPA DE ACCESO A LA BASE DE DATOS
@Repository

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    //No necesitamos escribir nada aqui
    // JpaRepository ya tiene_todo_lo_basico

}

