# 🔧 Sistema de Exámenes - Backend API

<div align="center">

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.7.11-brightgreen?style=for-the-badge&logo=spring-boot)
![Java](https://img.shields.io/badge/Java-8-orange?style=for-the-badge&logo=java)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?style=for-the-badge&logo=mysql)
![Maven](https://img.shields.io/badge/Maven-3.6+-red?style=for-the-badge&logo=apache-maven)

**API REST desarrollada con Spring Boot para la gestión de exámenes online**

[Arquitectura](#-arquitectura) • [Endpoints](#-endpoints-api) • [Configuración](#-configuración) • [Modelo de Datos](#-modelo-de-datos)

</div>

---

## 📋 Descripción

Backend RESTful API desarrollado con **Spring Boot 2.7.11** que proporciona todos los servicios necesarios para la gestión de un sistema de exámenes online. Implementa autenticación JWT, seguridad con Spring Security, y una arquitectura en capas bien definida.

---

## 🏗 Arquitectura

El proyecto sigue una **arquitectura en capas** (Layered Architecture) que separa las responsabilidades:

```
src/main/java/com/sistema/examenes/
│
├── 📂 configuraciones/          # Configuración de seguridad y JWT
│   ├── JWTAuthenticationEntryPoint.java
│   ├── JWTAuthenticationFilter.java
│   ├── JWTUtil.java
│   └── MySecurityConfig.java
│
├── 📂 controladores/            # REST Controllers (Capa de Presentación)
│   ├── AuthenticationController.java
│   ├── CategoriaController.java
│   ├── ExamenController.java
│   ├── PreguntaController.java
│   └── UsuarioController.java
│
├── 📂 entidades/                # Modelos JPA (Capa de Dominio)
│   ├── Usuario.java
│   ├── Rol.java
│   ├── Categoria.java
│   ├── Examen.java
│   ├── Pregunta.java
│   └── ...
│
├── 📂 repositorios/             # Spring Data Repositories (Capa de Acceso a Datos)
│   ├── UsuarioRepository.java
│   ├── RolRepository.java
│   ├── CategoriaRepository.java
│   ├── ExamenRepository.java
│   └── PreguntaRepository.java
│
├── 📂 servicios/                # Lógica de Negocio
│   ├── impl/                    # Implementaciones
│   │   ├── UsuarioServiceIMPL.java
│   │   ├── CategoriaServiceIMPL.java
│   │   ├── ExamenServiceIMPL.java
│   │   ├── PreguntaServiceIMPL.java
│   │   └── UserDetailsServiceImpl.java
│   ├── UsuarioService.java      # Interfaces
│   ├── CategoriaService.java
│   ├── ExamenService.java
│   └── PreguntaService.java
│
└── 📂 excepciones/              # Manejo de excepciones personalizadas
    ├── UsuarioFoundException.java
    └── UsuarioNotFoundException.java
```

### 🔄 Flujo de Datos

```
Cliente (Frontend)
    ↓
Controller (REST Endpoints)
    ↓
Service (Lógica de Negocio)
    ↓
Repository (Acceso a Datos)
    ↓
Base de Datos (MySQL)
```

---

## 🛠 Tecnologías y Dependencias

### Dependencias Principales

```xml
<!-- Spring Boot Starters -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>

<!-- Base de Datos -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>

<!-- JWT -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>

<!-- XML Binding -->
<dependency>
    <groupId>javax.xml.bind</groupId>
    <artifactId>jaxb-api</artifactId>
</dependency>
```

---

## 🔐 Seguridad y Autenticación

### JWT (JSON Web Tokens)

El sistema implementa autenticación basada en tokens JWT:

- **Generación de Token**: Al iniciar sesión, se genera un JWT con información del usuario
- **Validación de Token**: Cada request protegido valida el token en el header `Authorization`
- **Filtro de Autenticación**: `JWTAuthenticationFilter` intercepta requests y valida tokens
- **Configuración de Seguridad**: `MySecurityConfig` define rutas públicas y protegidas

### Rutas Públicas
- `POST /generate-token` - Autenticación
- `POST /usuarios/` - Registro de usuarios

### Rutas Protegidas
- Todas las demás rutas requieren token JWT válido

---

## 📡 Endpoints API

### 🔑 Autenticación

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `POST` | `/generate-token` | Generar token JWT | ❌ |
| `POST` | `/usuarios/` | Registrar nuevo usuario | ❌ |
| `GET` | `/usuarios/{username}` | Obtener usuario por username | ✅ |

### 📚 Categorías

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/categoria/` | Listar todas las categorías | ✅ |
| `POST` | `/categoria/` | Crear nueva categoría | ✅ |
| `PUT` | `/categoria/` | Actualizar categoría | ✅ |
| `DELETE` | `/categoria/{categoriaId}` | Eliminar categoría | ✅ |

### 📝 Exámenes

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/examen/` | Listar todos los exámenes | ✅ |
| `GET` | `/examen/{examenId}` | Obtener examen por ID | ✅ |
| `GET` | `/examen/activo` | Listar exámenes activos | ✅ |
| `GET` | `/examen/categoria/{categoriaId}` | Exámenes por categoría | ✅ |
| `GET` | `/examen/categoria/activo/{categoriaId}` | Exámenes activos por categoría | ✅ |
| `POST` | `/examen/` | Crear nuevo examen | ✅ |
| `PUT` | `/examen/` | Actualizar examen | ✅ |
| `DELETE` | `/examen/{examenId}` | Eliminar examen | ✅ |

### ❓ Preguntas

| Método | Endpoint | Descripción | Auth |
|--------|----------|-------------|------|
| `GET` | `/pregunta/examen/{examenId}` | Preguntas de un examen | ✅ |
| `POST` | `/pregunta/` | Crear nueva pregunta | ✅ |
| `PUT` | `/pregunta/` | Actualizar pregunta | ✅ |
| `DELETE` | `/pregunta/{preguntaId}` | Eliminar pregunta | ✅ |

---

## 🗄 Modelo de Datos

### Entidades Principales

#### 👤 Usuario
```java
- id: Long
- username: String
- password: String (encriptado)
- nombre: String
- apellido: String
- email: String
- telefono: String
- enable: Boolean
- perfil: String
- usuarioRoles: Set<UsuarioRol>
```

#### 🏷 Categoría
```java
- categoriaId: Long
- titulo: String
- descripcion: String
- examenes: Set<Examen>
```

#### 📋 Examen
```java
- examenId: Long
- titulo: String
- descripcion: String
- puntosMaximos: String
- numeroDePreguntas: String
- activo: boolean
- categoria: Categoria
- preguntas: Set<Pregunta>
```

#### ❓ Pregunta
```java
- preguntaId: Long
- contenido: String (hasta 5000 caracteres)
- imagen: String
- opcion1: String
- opcion2: String
- opcion3: String
- opcion4: String
- respuesta: String
- respuestaDada: String (transient)
- examen: Examen
```

### Relaciones JPA

- **Usuario** ↔ **Rol**: `@ManyToMany` (a través de `UsuarioRol`)
- **Categoría** ↔ **Examen**: `@OneToMany`
- **Examen** ↔ **Pregunta**: `@OneToMany`
- **Examen** ↔ **Categoría**: `@ManyToOne`

---

## ⚙️ Configuración

### application.properties

```properties
# Base de Datos
spring.datasource.url=jdbc:mysql://localhost:3306/sistema_examenes_spring_boot?createDatabaseIfNotExist=true&serverTimezone=America/Argentina/Buenos_Aires
spring.datasource.username=root
spring.datasource.password=root

# JPA/Hibernate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=false
spring.jpa.properties.hibernate.format_sql=false
```

### Variables a Configurar

1. **Base de Datos**: Ajustar URL, usuario y contraseña según tu entorno
2. **JWT Secret**: Configurar en `JWTUtil.java` (recomendado usar variable de entorno)
3. **Puerto**: Por defecto `8080` (configurable en `application.properties`)

---

## 🚀 Ejecución

### Requisitos Previos
- ☕ Java JDK 8 o superior
- 📦 Maven 3.6+
- 🗄️ MySQL 8.0+ instalado y ejecutándose

### Pasos para Ejecutar

```bash
# 1. Clonar o navegar al proyecto
cd sistema-examenes-backend

# 2. Configurar base de datos en application.properties

# 3. Compilar el proyecto
mvn clean install

# 4. Ejecutar la aplicación
mvn spring-boot:run

# O ejecutar el JAR
java -jar target/sistema-examenes-backend-0.0.1-SNAPSHOT.jar
```

La API estará disponible en: `http://localhost:8080`

---

## 🧪 Testing

### Ejecutar Tests

```bash
mvn test
```

### Probar Endpoints

Puedes usar herramientas como:
- **Postman**
- **cURL**
- **Thunder Client** (VS Code)
- **Insomnia**

### Ejemplo de Request (Autenticación)

```bash
curl -X POST http://localhost:8080/generate-token \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "password123"
  }'
```

### Ejemplo de Request (Con Token)

```bash
curl -X GET http://localhost:8080/categoria/ \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 📦 Estructura de Paquetes

```
com.sistema.examenes
│
├── configuraciones/     # Configuración de Spring Security y JWT
├── controladores/       # REST Controllers (@RestController)
├── entidades/           # Entidades JPA (@Entity)
├── repositorios/        # Repositorios Spring Data (@Repository)
├── servicios/           # Interfaces de servicios
│   └── impl/           # Implementaciones de servicios (@Service)
└── excepciones/         # Excepciones personalizadas
```

---

## 🔍 Características Técnicas Destacadas

### ✅ Buenas Prácticas Implementadas

- ✅ **Separación de responsabilidades** (Controller → Service → Repository)
- ✅ **Inyección de dependencias** con `@Autowired`
- ✅ **Manejo de excepciones** personalizado
- ✅ **Validación de datos** con Spring Validation
- ✅ **Seguridad robusta** con Spring Security + JWT
- ✅ **CORS configurado** para comunicación con frontend
- ✅ **Nomenclatura consistente** en español
- ✅ **Comentarios y documentación** en código

### 🔒 Seguridad

- **Encriptación de contraseñas**: Spring Security BCrypt
- **Tokens JWT**: Firmados y con expiración
- **Filtros de seguridad**: Validación automática de tokens
- **CORS**: Configurado para permitir requests del frontend

---

## 📝 Notas de Desarrollo

- La base de datos se crea automáticamente si no existe (`createDatabaseIfNotExist=true`)
- Hibernate actualiza el esquema automáticamente (`ddl-auto=update`)
- Los tokens JWT tienen un tiempo de expiración configurable
- Las contraseñas se almacenan encriptadas con BCrypt

---

## 🚧 Mejoras Futuras

- [ ] Implementar refresh tokens
- [ ] Agregar logging estructurado (Log4j2)
- [ ] Implementar paginación en endpoints de listado
- [ ] Agregar validaciones más robustas
- [ ] Implementar cache con Redis
- [ ] Agregar tests unitarios y de integración
- [ ] Documentación con Swagger/OpenAPI
- [ ] Implementar rate limiting

---

## 👨‍💻 Autor

Desarrollado como parte del portafolio profesional

---

<div align="center">

**Backend API - Sistema de Exámenes Online** 🚀

</div>

