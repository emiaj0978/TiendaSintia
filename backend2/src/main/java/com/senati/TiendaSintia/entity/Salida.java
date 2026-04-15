package com.senati.TiendaSintia.entity;

import jakarta.persistence.*;
// @Entity le dice a Hibernate que esta clase representa una tabla en la BD
@Entity
// @Table indica el nombre exacto de tabla en MYSQL o MariaDB
@Table(name = "salida")
public class Salida {
    // @Id marca este campo como la clave primaria de la tabla
    // @GeneratedValue hace que el ID se genere automaticamente (AutoIncrement)
    // @Column(name="cliente_id") indica el nombre exacto de la columna en mysql
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IDsalida")
    private Long id;
    // nullable=false significa que este campo no puede estar vacio en la BD
    @Column(nullable = false)
    private String fecha;
    @Column(nullable = false)
    private String cantidad;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "IDproducto")  // Esto es la llave foránea
    private Producto producto;

//GETTER a SETTERS

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCantidad() {
        return cantidad;
    }

    public void setCantidad(String cantidad) {
        this.cantidad = cantidad;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
