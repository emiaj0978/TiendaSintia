Más info en [mi tablero de trello](https://trello.com/b/4lC3J8oT/java-proyecto-senati)
![TRELLO](https://github.com/ojitoslanda/testing/blob/master/img/javaweb/Trello.png)

---
# Sistema de Gestión de Inventario - Tienda Sintia
Sistema web para la gestión de inventario de productos de primera necesidad, controlando stock, fechas de vencimiento y niveles de reposición. Desarrollado como proyecto final del curso de Java Web en SENATI.

## Descripcion del negocio
Nombre: Tienda Sintia <br>
Giro: Comercialización de productos de primera necesidad <br>
Tamaño: Pequeña empresa, negocio local familiar <br>
Contexto: Negocio muy comun en el Peru donde se venden productos como bebidas, abarrotes, snacks, limpieza e higiene personal, abasteciendo a clientes del barrio. <br>
Justificacion: Se necesita un sistema digital para reemplazar el registro manual del inventario, evitar errores y tener un control claro del stock disponible, productos por vencer y faltantes.

## Identificar el problema y solución
Problema: El dueño de la Tienda Sintia lleva el registro de productos y stock en un cuaderno o en papel, lo que genera errores, pérdida de información, dificultad para saber qué productos están por agotarse, cuáles están en exceso o cuáles podrían vencerse. <br>
Solucion tecnologica: Desarrollar un sistema web con Java Spring Boot y MySQL que permita registrar productos, categorías, controlar stock en tiempo real, mostrar alertas de vencimiento y niveles mínimos de reposición.

## Requerimientos Funcionales
| Codigo | Descripcion |
|---|---|
| RF01 | El sistema debe permitir registrar un nuevo producto con nombre, categoría, stock, stock mínimo, fecha de vencimiento y precio |
| RF02 | El sistema debe permitir registrar una nueva categoría de productos |
| RF03 | El sistema debe permitir registrar entradas y salidas de stock (compras y ventas) |
| RF04 | El sistema debe mostrar el listado de todos los productos con su stock actual |
| RF05 | El sistema debe mostrar alertas de productos con stock por debajo del mínimo |
| RF06 | El sistema debe mostrar alertas de productos próximos a vencer (7 días o menos) |
| RF07 | El sistema debe mostrar productos con exceso de existencias |
| RF08 | El sistema debe mostrar el historial de movimientos de cada producto |

## Requerimientos No Funcionales

| Codigo | Tipo | Descripcion |
|---|---|---|
| RNF01 | Rendimiento | El sistema debe cargar cada pantalla en menos de 3 segundos |
| RNF02 | Usabilidad | La interfaz debe ser intuitiva y fácil de usar sin necesidad de capacitación previa |
| RNF03 | Seguridad | Solo usuarios autorizados podrán acceder al sistema mediante usuario y contraseña |

## Stack completo
1. Trello             = Gestión del proyecto (Kanban)
2. Draw.io            = Diagrama ER + Diagrama de Clases
3. Figma              = Wireframe + Diseño UI/UX
4. MySQL Workbench    = Diseñar y administrar BD
5. IntelliJ           = Frontend (HTML,CSS,JS) + Backend (Spring Boot)
6. XAMPP              = Servidor Tomcat para correr la app

## Tecnologias utilizadas
- Java 17
- Spring Boot 3
- MySQL 8
- HTML5, CSS3, JavaScript
- IntelliJ IDEA
- XAMPP (Tomcat)
- MySQL Workbench
- Figma (diseño UI/UX)
- Draw.io (diagramas)

---

## Estructura del proyecto
```
JavaWeb-TiendaSintia/
├── backend/ → Spring Boot (Java)
│ ├── src/
│ ├── pom.xml
│ └── ...
├── frontend/ → HTML, CSS, JS
│ ├── css/
│ ├── js/
│ └── index.html

text
```

---

### DIAGRAMA DE FIGMA UI/UX
![FIGMA](https://www.figma.com/design/BXoCcKRR9FjiXnO5TxFhuK/Proyecto-Senati?node-id=1-7&t=OXx4vC4zMc8uVobf-1)

## Base de datos

El sistema cuenta con 4 tablas principales:

| Tabla | Descripcion |
|---|---|
| USUARIO | Persona encargada de gestionar el inventario |
| CATEGORIA | Clasificación de los productos |
| PRODUCTO | Registro de cada producto del inventario |
| MOVIMIENTO | Registro de cada entrada y salida de stock |

### Diagrama Entidad-Relacion (DER)
![Diagrama Entidad Relacion](https://github.com/ojitoslanda/testing/blob/master/img/javaweb/Diagrama_Entidad_Relacion.png)

### Modelo Relacional (MR)
![Modelo Relacional](https://github.com/ojitoslanda/testing/blob/master/img/javaweb/Modelo_Relacional.png)

### Cardinalidades
USUARIO — PRODUCTO (1:N) <br>
Un usuario puede gestionar muchos productos, pero un producto es gestionado por un solo usuario. <br>
CATEGORIA — PRODUCTO (1:N) <br>
Una categoría puede tener muchos productos, pero un producto pertenece a una sola categoría. <br>
PRODUCTO — MOVIMIENTO (1:N) <br>
Un producto puede tener muchos movimientos (entradas/salidas), pero un movimiento pertenece a un solo producto.

| Entidad A | Relacion | Entidad B | Cardinalidad |
|---|---|---|---|
| USUARIO | gestiona | PRODUCTO | 1:N |
| CATEGORIA | contiene | PRODUCTO | 1:N |
| PRODUCTO | genera | MOVIMIENTO | 1:N |

### Script de Base de datos

```sql
CREATE DATABASE IF NOT EXISTS tienda_sintia;
USE tienda_sintia;

CREATE TABLE usuario (
    usuario_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(20) DEFAULT 'admin'
);

CREATE TABLE categoria (
    categoria_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    descripcion TEXT
);

CREATE TABLE producto (
    producto_id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    categoria_id INT NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    cantidad_stock INT NOT NULL DEFAULT 0,
    stock_minimo INT NOT NULL DEFAULT 5,
    fecha_vencimiento DATE,
    precio_compra DECIMAL(10,2),
    precio_venta DECIMAL(10,2),
    FOREIGN KEY (usuario_id) REFERENCES usuario(usuario_id),
    FOREIGN KEY (categoria_id) REFERENCES categoria(categoria_id)
);

CREATE TABLE movimiento (
    movimiento_id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    tipo ENUM('entrada', 'salida') NOT NULL,
    cantidad INT NOT NULL,
    fecha_movimiento DATETIME DEFAULT CURRENT_TIMESTAMP,
    observacion TEXT,
    FOREIGN KEY (producto_id) REFERENCES producto(producto_id)
);

-- Insertar categorías
INSERT INTO categoria (nombre, descripcion) VALUES
('Bebidas', 'Gaseosas, agua, jugos, bebidas en general'),
('Abarrotes', 'Arroz, azúcar, fideos, enlatados'),
('Snacks', 'Papas fritas, galletas, golosinas'),
('Limpieza', 'Detergentes, desinfectantes, jabones'),
('Higiene Personal', 'Shampoo, pasta dental, desodorantes');

-- Insertar usuario
INSERT INTO usuario (nombre, apellido, email, password, rol) VALUES
('Admin', 'Sintia', 'admin@tiendaintia.com', '123456', 'admin');

-- Insertar productos
INSERT INTO producto (usuario_id, categoria_id, nombre, cantidad_stock, stock_minimo, fecha_vencimiento, precio_compra, precio_venta) VALUES
(1, 1, 'Coca Cola 1.5L', 50, 10, '2025-12-31', 4.00, 6.50),
(1, 1, 'Agua San Luis 2L', 30, 8, '2026-06-15', 2.00, 3.50),
(1, 2, 'Arroz Costeño 1kg', 15, 5, '2025-10-10', 3.50, 5.00),
(1, 3, 'Papas Lays 140g', 8, 5, '2025-02-20', 4.50, 7.00),
(1, 4, 'Lejía Clorox 1L', 20, 5, '2026-01-01', 5.00, 8.00),
(1, 5, 'Shampoo Sedal 400ml', 3, 5, '2025-09-01', 12.00, 18.00);

-- Insertar movimientos
INSERT INTO movimiento (producto_id, tipo, cantidad, observacion) VALUES
(1, 'entrada', 50, 'Compra inicial'),
(2, 'entrada', 30, 'Compra inicial'),
(3, 'entrada', 15, 'Compra inicial'),
(4, 'entrada', 20, 'Compra inicial'),
(4, 'salida', 12, 'Venta del día'),
(5, 'entrada', 20, 'Compra inicial'),
(6, 'entrada', 10, 'Compra inicial'),
(6, 'salida', 7, 'Venta del día');
```

---

### Como correr el proyecto

### Requisitos previos
-Tener instalado IntelliJ IDEA
-Tener instalado XAMPP (para MySQL)
-Tener instalado MySQL Workbench
-Tener instalado JDK 17 o superior

### Backend
Abrir la carpeta backend/ en IntelliJ IDEA
Configurar application.properties con los datos de MySQL
Iniciar XAMPP y activar MySQL
Ejecutar TiendaSintiaApplication.java
El backend corre en: http://localhost:8080

### Frontend
Abrir la carpeta frontend/ en VsCode
Abrir index.html con Live Server
El frontend se comunica con el backend via fetch()

>El frontend y el backend corren por separado.
>El backend debe estar iniciado antes de abrir el frontend.
```
spring.application.name=tiendaintia
# CONEXION A MYSQL
spring.datasource.url=jdbc:mysql://localhost:3306/tienda_sintia
spring.datasource.username=root
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

#JPA / HIBERNATE
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect

# Puerto del servidor
server.port=8080
```