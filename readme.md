Más info en [mi tablero de trello](https://trello.com/b/su8QLheY/tienda-sintia)
![TRELLO](https://github.com/emiaj0978/TiendaSintia/blob/main/frontend/imagen/trello.png)

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

### Gestión de Productos
| Código | Descripción |
|--------|-------------|
| RF01 | El sistema debe permitir registrar nuevos productos asociados a una categoría |
| RF02 | El sistema debe permitir modificar la información de un producto |
| RF03 | El sistema debe permitir eliminar productos del sistema |
| RF04 | El sistema debe permitir visualizar los productos filtrados por categoría |
| RF05 | El sistema debe mostrar el stock actual de cada producto |

### Gestión de Categorías
| Código | Descripción |
|--------|-------------|
| RF06 | El sistema debe permitir registrar nuevas categorías de productos |
| RF07 | El sistema debe permitir editar la información de una categoría existente |
| RF08 | El sistema debe permitir eliminar categorías |
| RF09 | El sistema debe mostrar el listado de categorías registradas |

### Gestión de Entradas de Productos
| Código | Descripción |
|--------|-------------|
| RF10 | El sistema debe permitir registrar entradas de productos al almacén indicando fecha y cantidad |
| RF11 | El sistema debe actualizar automáticamente el stock al registrar una entrada |
| RF12 | El sistema debe mostrar el historial de entradas por producto |

### Gestión de Salidas de Productos
| Código | Descripción |
|--------|-------------|
| RF13 | El sistema debe permitir registrar salidas de productos indicando fecha y cantidad |
| RF14 | El sistema debe actualizar automáticamente el stock al registrar una salida |
| RF15 | El sistema debe mostrar el historial de salidas por producto |

### Control de Stock
| Código | Descripción |
|--------|-------------|
| RF16 | El sistema debe generar una alerta cuando el stock de un producto sea igual o menor al nivel mínimo establecido |
| RF17 | El sistema debe permitir visualizar un listado de productos con bajo stock |
| RF18 | El sistema debe mostrar productos con exceso de existencias |
| RF19 | El sistema debe mostrar alertas de productos próximos a vencer (7 días o menos) |

---

## Requerimientos No Funcionales

### Rendimiento
| Código | Descripción |
|--------|-------------|
| RNF01 | El sistema debe responder a las consultas de productos en un tiempo máximo de 3 segundos |
| RNF02 | El sistema debe actualizar el stock inmediatamente después de registrar una entrada o salida |

### Seguridad
| Código | Descripción |
|--------|-------------|
| RNF03 | El sistema debe contar con autenticación mediante usuario y contraseña para acceder a la plataforma |
| RNF04 | Solo el usuario administrador podrá registrar, editar o eliminar productos y categorías |
| RNF05 | La información almacenada en la base de datos debe estar protegida contra accesos no autorizados |

### Usabilidad
| Código | Descripción |
|--------|-------------|
| RNF06 | El sistema debe contar con una interfaz sencilla e intuitiva para facilitar su uso |
| RNF07 | El sistema debe mostrar mensajes claros de confirmación o error al realizar operaciones |

### Integridad de Datos
| Código | Descripción |
|--------|-------------|
| RNF08 | El sistema debe garantizar que no se registren salidas de productos con cantidad mayor al stock disponible |
| RNF09 | La base de datos debe mantener la consistencia e integridad de la información almacenada |

### Disponibilidad
| Código | Descripción |
|--------|-------------|
| RNF10 | El sistema debe estar disponible durante el horario de atención de la tienda |

### Escalabilidad
| Código | Descripción |
|--------|-------------|
| RNF11 | El sistema debe permitir futuras ampliaciones, como la integración con facturación electrónica o generación de reportes estadísticos |

---

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
![FIGMA](https://www.figma.com/design/BhCK6tHBD2xM2IzBFCgQyl/Sin-t%C3%ADtulo?node-id=0-1&p=f&t=biuAk1qIKtQNHJ7L-0)

## Base de datos

El sistema cuenta con 4 tablas principales:

| Tabla | Descripcion |
|-------|-------------|
| CATEGORIA | Clasificación de los productos |
| PRODUCTO | Registro de cada producto del inventario |
| ENTRADA | Registro de entradas de productos al almacén |
| SALIDA | Registro de salidas de productos del almacén |

### Diagrama Entidad-Relacion (DER)
![Diagrama Entidad Relacion](https://github.com/emiaj0978/TiendaSintia/blob/main/frontend/imagen/relacional(der).png)

### Modelo Relacional (MR)
![Modelo Relacional](https://github.com/emiaj0978/TiendaSintia/blob/main/frontend/imagen/entidadrelacion(mr).png)

### Cardinalidades
CATEGORIA — PRODUCTO (1:N) <br>
Una categoría puede tener muchos productos, pero un producto pertenece a una sola categoría. <br>
PRODUCTO — ENTRADA (1:N) <br>
Un producto puede tener muchas entradas, pero una entrada pertenece a un solo producto. <br>
PRODUCTO — SALIDA (1:N) <br>
Un producto puede tener muchas salidas, pero una salida pertenece a un solo producto.

| Entidad A | Relacion | Entidad B | Cardinalidad |
|-----------|----------|-----------|--------------|
| CATEGORIA | contiene | PRODUCTO | 1:N |
| PRODUCTO | genera | ENTRADA | 1:N |
| PRODUCTO | genera | SALIDA | 1:N |


### Script de Base de datos

```sql
CREATE DATABASE tienda_sintia;
USE tienda_sintia;


CREATE TABLE Categoria (
    IDcategoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(100) NOT NULL UNIQUE, -- constraint extra
    descripcion VARCHAR(255)
);

CREATE TABLE Producto (
    IDproducto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    precio_compra DECIMAL(10,2) NOT NULL,
    precio_venta DECIMAL(10,2) NOT NULL,
    stock_actual INT NOT NULL DEFAULT 0, -- constraint extra (DEFAULT)
    fecha_vencimiento DATE,
    IDcategoria INT NOT NULL,
    FOREIGN KEY (IDcategoria) REFERENCES Categoria(IDcategoria)
);

CREATE TABLE Entrada (
    IDentrada INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    cantidad INT NOT NULL,
    IDproducto INT NOT NULL,
    FOREIGN KEY (IDproducto) REFERENCES Producto(IDproducto)
);

CREATE TABLE Salida (
    IDsalida INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    cantidad INT NOT NULL,
    IDproducto INT NOT NULL,
    FOREIGN KEY (IDproducto) REFERENCES Producto(IDproducto)
);


INSERT INTO Categoria (nombre_categoria, descripcion) VALUES 
('Bebidas', 'Productos líquidos'),
('Snacks', 'Comida rápida'),
('Lácteos', 'Productos derivados de la leche'),
('Abarrotes', 'Productos envasados no perecibles'),
('Limpieza', 'Productos de limpieza del hogar'),
('Bebidas Alcohólicas', 'Bebidas con contenido alcohólico'),
('Carnes', 'Productos cárnicos'),
('Verduras', 'Productos vegetales frescos'),
('Frutas', 'Frutas frescas'),
('Panadería', 'Productos de panadería y pastelería');


INSERT INTO Producto (nombre, descripcion, precio_compra, precio_venta, stock_actual, fecha_vencimiento, IDcategoria) VALUES
('Coca Cola', 'Bebida gaseosa', 2.50, 4.00, 100, '2026-12-31', 1),
('Papas Lays', 'Snack salado', 1.00, 2.00, 50, '2026-12-31', 2),
('Leche Gloria', 'Leche entera pasteurizada', 3.50, 5.00, 80, '2026-12-15', 3),
('Yogur Natural', 'Yogur sin azúcar', 2.00, 3.50, 60, '2026-11-20', 3),
('Arroz Costeño', 'Arroz extra grano', 4.00, 6.00, 200, '2027-06-01', 4),
('Fideos Don Vittorio', 'Fideos spaghetti', 2.50, 4.00, 150, '2027-05-01', 4),
('Aceite Primor', 'Aceite vegetal 1L', 5.00, 8.00, 100, '2027-03-01', 4),
('Lavavajillas Marsella', 'Líquido lavavajillas', 4.00, 6.50, 40, '2027-12-31', 5),
('Lejía Clorox', 'Blanqueador de ropa', 3.00, 5.00, 60, '2027-12-31', 5),
('Cerveza Cristal', 'Cerveza rubia 650ml', 3.00, 5.00, 120, '2026-12-31', 6),
('Vino Tinto', 'Vino tinto chileno', 15.00, 25.00, 30, '2028-03-01', 6),
('Pollo Entero', 'Pollo fresco', 8.00, 12.00, 40, '2026-12-10', 7),
('Carne Molida', 'Carne de res molida', 12.00, 18.00, 25, '2026-12-08', 7),
('Lechuga', 'Lechuga fresca', 1.50, 2.50, 50, '2026-12-05', 8),
('Tomate', 'Tomate riñón', 2.00, 3.50, 60, '2026-12-06', 8),
('Manzana Delicia', 'Manzana roja', 3.00, 5.00, 45, '2026-12-12', 9),
('Plátano de seda', 'Plátano dulce', 1.50, 2.80, 80, '2026-12-09', 9),
('Pan Francés', 'Pan blanco', 1.00, 2.00, 100, '2026-12-03', 10),
('Queque', 'Queque marmolado', 4.00, 7.00, 30, '2026-12-15', 10);


INSERT INTO Entrada (fecha, cantidad, IDproducto) VALUES 
('2026-03-01', 50, 1),   
('2026-03-02', 30, 2),   
('2026-03-10', 100, 3),  
('2026-03-10', 80, 4),   
('2026-03-11', 200, 5), 
('2026-03-11', 60, 6),  
('2026-03-12', 50, 7), 
('2026-03-12', 70, 8), 
('2026-03-13', 100, 9), 
('2026-03-13', 40, 10), 
('2026-03-14', 30, 11), 
('2026-03-14', 60, 12), 
('2026-03-15', 80, 13), 
('2026-03-15', 40, 14), 
('2026-03-16', 50, 15), 
('2026-03-16', 70, 16), 
('2026-03-17', 30, 17), 
('2026-03-17', 50, 18), 
('2026-03-18', 25, 19); 


INSERT INTO Salida (fecha, cantidad, IDproducto) VALUES 
('2026-03-05', 20, 1),  
('2026-03-06', 10, 2),   
('2026-03-11', 20, 3), 
('2026-03-11', 15, 4), 
('2026-03-12', 30, 5), 
('2026-03-12', 10, 6),  
('2026-03-13', 8, 7),  
('2026-03-13', 12, 8),  
('2026-03-14', 25, 9),
('2026-03-14', 5, 10),  
('2026-03-15', 10, 11),
('2026-03-15', 8, 12),  
('2026-03-16', 15, 13), 
('2026-03-16', 5, 14),  
('2026-03-17', 20, 15), 
('2026-03-17', 10, 16), 
('2026-03-18', 5, 17),  
('2026-03-18', 8, 18), 
('2026-03-19', 3, 19); 


SELECT p.nombre, p.precio_venta, c.nombre_categoria
FROM Producto p
JOIN Categoria c ON p.IDcategoria = c.IDcategoria
ORDER BY p.nombre;

SELECT e.fecha, e.cantidad, p.nombre
FROM Entrada e
JOIN Producto p ON e.IDproducto = p.IDproducto
WHERE e.cantidad > 20
ORDER BY e.fecha DESC;

SELECT s.fecha, s.cantidad, p.nombre
FROM Salida s
JOIN Producto p ON s.IDproducto = p.IDproducto
WHERE s.fecha >= '2026-03-01'
ORDER BY s.cantidad DESC;

select * from producto;
select * from categoria;
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