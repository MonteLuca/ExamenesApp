# 📚 Sistema de Gestión de Exámenes Online

<div align="center">

![Java](https://img.shields.io/badge/Java-8-orange?style=for-the-badge&logo=java)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.7.11-brightgreen?style=for-the-badge&logo=spring)
![Angular](https://img.shields.io/badge/Angular-15-red?style=for-the-badge&logo=angular)
![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?style=for-the-badge&logo=mysql)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?style=for-the-badge&logo=typescript)

**Una aplicación web completa para la gestión y realización de exámenes online con autenticación basada en roles**

[Características](#-características-principales) • [Tecnologías](#-stack-tecnológico) • [Estructura](#-estructura-del-proyecto) • [Instalación](#-instalación-y-configuración)

</div>

---

## 🎯 Descripción del Proyecto

Sistema de gestión de exámenes online desarrollado con arquitectura de **microservicios separados** (Backend y Frontend). Permite a los administradores crear, gestionar y administrar exámenes con preguntas de opción múltiple, mientras que los usuarios pueden realizar estos exámenes de forma interactiva.

El sistema implementa **autenticación JWT** y **control de acceso basado en roles** (RBAC), garantizando seguridad y separación de responsabilidades entre administradores y usuarios regulares.

---

## ✨ Características Principales

### 🔐 Autenticación y Seguridad
- ✅ Autenticación basada en **JWT (JSON Web Tokens)**
- ✅ Sistema de roles: **Administrador** y **Usuario Normal**
- ✅ Guards y interceptores para protección de rutas
- ✅ Spring Security integrado en el backend

### 👨‍💼 Panel de Administración
- ✅ Gestión completa de **Categorías** (crear, editar, eliminar, listar)
- ✅ Gestión completa de **Exámenes** (crear, editar, eliminar, activar/desactivar)
- ✅ Gestión completa de **Preguntas** (crear, editar, eliminar)
- ✅ Dashboard administrativo con vista general
- ✅ Asignación de exámenes a categorías

### 👤 Panel de Usuario
- ✅ Visualización de exámenes disponibles por categoría
- ✅ Realización de exámenes en tiempo real
- ✅ Interfaz intuitiva para responder preguntas
- ✅ Visualización de resultados
- ✅ Perfil de usuario

### 🎨 Interfaz de Usuario
- ✅ Diseño moderno con **Angular Material** y **Bootstrap**
- ✅ Interfaz responsive y adaptable
- ✅ Notificaciones con **SweetAlert2**
- ✅ Loaders y feedback visual con **ngx-ui-loader**
- ✅ Navegación intuitiva con sidebar

---

## 🛠 Stack Tecnológico

### Backend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Java** | 1.8 | Lenguaje de programación |
| **Spring Boot** | 2.7.11 | Framework backend |
| **Spring Security** | 2.7.11 | Seguridad y autenticación |
| **Spring Data JPA** | 2.7.11 | Persistencia de datos |
| **Hibernate** | 5.6.x | ORM |
| **MySQL** | 8.0 | Base de datos relacional |
| **JWT (jjwt)** | 0.9.1 | Tokens de autenticación |
| **Maven** | - | Gestión de dependencias |

### Frontend
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Angular** | 15.2.0 | Framework frontend |
| **TypeScript** | 4.9.4 | Lenguaje de programación |
| **Angular Material** | 15.2.9 | Componentes UI |
| **Bootstrap** | 5.3.0 | Framework CSS |
| **RxJS** | 7.8.0 | Programación reactiva |
| **SweetAlert2** | 11.7.5 | Alertas y notificaciones |
| **ngx-ui-loader** | 13.0.0 | Indicadores de carga |

---

## 📁 Estructura del Proyecto

```
ExamenesApp/
│
├── 📂 sistema-examenes-backend/     # API REST con Spring Boot
│   ├── src/main/java/com/sistema/examenes/
│   │   ├── configuraciones/         # Configuración de seguridad JWT
│   │   ├── controladores/           # REST Controllers
│   │   ├── entidades/               # Modelos JPA
│   │   ├── repositorios/            # Spring Data Repositories
│   │   ├── servicios/               # Lógica de negocio
│   │   └── excepciones/             # Manejo de excepciones
│   └── pom.xml                      # Dependencias Maven
│
└── 📂 sistema-examanes-frontend/    # SPA con Angular
    ├── src/app/
    │   ├── components/              # Componentes reutilizables
    │   ├── pages/                   # Páginas principales
    │   │   ├── admin/               # Panel de administración
    │   │   ├── user/                # Panel de usuario
    │   │   ├── login/               # Autenticación
    │   │   └── signup/              # Registro
    │   ├── services/                # Servicios Angular
    │   └── interfaces/              # Interfaces TypeScript
    └── package.json                 # Dependencias npm
```

---

## 🚀 Instalación y Configuración

### Prerrequisitos
- ☕ **Java JDK 8** o superior
- 📦 **Maven 3.6+**
- 🟢 **Node.js 16+** y **npm**
- 🗄️ **MySQL 8.0+**
- 🌐 **Angular CLI 15.2+**

### 1️⃣ Configuración del Backend

```bash
# Navegar al directorio del backend
cd sistema-examenes-backend

# Configurar la base de datos en application.properties
# Editar: src/main/resources/application.properties
# Ajustar: URL, usuario y contraseña de MySQL

# Compilar y ejecutar
mvn clean install
mvn spring-boot:run
```

El backend estará disponible en: `http://localhost:8080`

### 2️⃣ Configuración del Frontend

```bash
# Navegar al directorio del frontend
cd sistema-examanes-frontend

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
ng serve
```

El frontend estará disponible en: `http://localhost:4200`

### 3️⃣ Configuración de la Base de Datos

La base de datos se crea automáticamente al ejecutar el backend (gracias a `createDatabaseIfNotExist=true`).

**Base de datos:** `sistema_examenes_spring_boot`

---

## 📊 Modelo de Datos

### Entidades Principales

- **Usuario**: Información de usuarios con roles (Admin/Usuario)
- **Rol**: Roles del sistema (ADMIN, NORMAL)
- **Categoria**: Categorías para organizar exámenes
- **Examen**: Exámenes con título, descripción, puntos y estado activo/inactivo
- **Pregunta**: Preguntas de opción múltiple asociadas a exámenes

### Relaciones
- Un **Usuario** puede tener múltiples **Roles**
- Una **Categoría** contiene múltiples **Exámenes**
- Un **Examen** contiene múltiples **Preguntas**

---

## 🔌 API REST Endpoints

### Autenticación
- `POST /generate-token` - Generar token JWT
- `POST /usuarios/` - Registrar nuevo usuario
- `GET /usuarios/{username}` - Obtener usuario

### Categorías
- `GET /categoria/` - Listar todas las categorías
- `POST /categoria/` - Crear categoría
- `PUT /categoria/` - Actualizar categoría
- `DELETE /categoria/{categoriaId}` - Eliminar categoría

### Exámenes
- `GET /examen/` - Listar todos los exámenes
- `GET /examen/activo` - Listar exámenes activos
- `GET /examen/categoria/{categoriaId}` - Exámenes por categoría
- `POST /examen/` - Crear examen
- `PUT /examen/` - Actualizar examen
- `DELETE /examen/{examenId}` - Eliminar examen

### Preguntas
- `GET /pregunta/examen/{examenId}` - Preguntas de un examen
- `POST /pregunta/` - Crear pregunta
- `PUT /pregunta/` - Actualizar pregunta
- `DELETE /pregunta/{preguntaId}` - Eliminar pregunta

---

## 🎯 Funcionalidades por Rol

### 👨‍💼 Administrador
- ✅ Crear, editar y eliminar categorías
- ✅ Crear, editar y eliminar exámenes
- ✅ Activar/desactivar exámenes
- ✅ Gestionar preguntas de cada examen
- ✅ Ver dashboard con estadísticas

### 👤 Usuario Normal
- ✅ Ver categorías disponibles
- ✅ Ver exámenes activos por categoría
- ✅ Realizar exámenes
- ✅ Ver resultados
- ✅ Gestionar perfil personal

---

## 🔒 Seguridad

- **JWT Authentication**: Tokens seguros con expiración
- **Spring Security**: Configuración de seguridad robusta
- **CORS**: Configurado para comunicación frontend-backend
- **Guards**: Protección de rutas en Angular
- **Interceptors**: Inyección automática de tokens en requests

---

## 📝 Notas de Desarrollo

- El backend utiliza **Hibernate DDL Auto Update** para crear/actualizar esquemas automáticamente
- Los tokens JWT tienen un tiempo de expiración configurable
- La aplicación está preparada para producción con configuración de CORS
- Se implementan validaciones tanto en frontend como backend

---

## 🚧 Mejoras Futuras

- [ ] Sistema de calificaciones y resultados detallados
- [ ] Historial de exámenes realizados por usuario
- [ ] Exportación de resultados a PDF
- [ ] Temporizador para exámenes
- [ ] Preguntas con imágenes
- [ ] Sistema de notificaciones
- [ ] Dashboard con gráficos y estadísticas avanzadas

---

## 👨‍💻 Autor

Desarrollado con ❤️ para demostrar habilidades en desarrollo full-stack

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible para fines educativos y de portafolio.

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella! ⭐**

</div>
