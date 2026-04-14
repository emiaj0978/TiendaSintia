package com.senati.TiendaSintia.entity;

import jakarta.persistence.*;
// @Entity le dice a Hibernate que esta clase representa una tabla en la BD
@Entity
// @Table indica el nombre exacto de tabla en MYSQL o MariaDB
@Table(name = "Producto")
public class Cliente {
    // @Id marca este campo como la clave primaria de la tabla
    // @GeneratedValue hace que el ID se genere automaticamente (AutoIncrement)
    // @Column(name="cliente_id") indica el nombre exacto de la columna en mysql
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDproducto")
    private Long id;
    // nullable=false significa que este campo no puede estar vacio en la BD
    @Column(nullable = false)
    private String nombre;
    @Column(nullable = false)
    private String descripcion;
    //unique=true significa que no puede haber dos clientes con el mismo DNI
    //length=8 significa limita el campo a 8 caracteres
    @Column(nullable = false,unique = true,length = 8)
    private String precio_compra;
    //Sin anotaciones ( @ ) extra: columna normal, puede ser nula
    private String precio_venta;
    private String stock_actual;

    //GETTER a SETTERS


}