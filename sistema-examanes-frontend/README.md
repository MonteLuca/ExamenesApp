# 🎨 Sistema de Exámenes - Frontend

<div align="center">

![Angular](https://img.shields.io/badge/Angular-15-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?style=for-the-badge&logo=typescript)
![Angular Material](https://img.shields.io/badge/Angular%20Material-15-purple?style=for-the-badge&logo=angular)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?style=for-the-badge&logo=bootstrap)

**Single Page Application (SPA) desarrollada con Angular para la gestión de exámenes online**

[Características](#-características) • [Estructura](#-estructura-del-proyecto) • [Componentes](#-componentes) • [Servicios](#-servicios)

</div>

---

## 📋 Descripción

Frontend desarrollado con **Angular 15** que proporciona una interfaz de usuario moderna, responsive e intuitiva para la gestión y realización de exámenes online. Implementa autenticación JWT, guards para protección de rutas, y una arquitectura modular bien organizada.

---

## ✨ Características

### 🎯 Funcionalidades Principales

- ✅ **Autenticación completa** con JWT (Login y Registro)
- ✅ **Panel de Administración** con gestión completa de categorías, exámenes y preguntas
- ✅ **Panel de Usuario** para realizar exámenes
- ✅ **Guards de ruta** para proteger páginas según roles
- ✅ **Interceptores HTTP** para inyectar tokens automáticamente
- ✅ **Interfaz responsive** con Angular Material y Bootstrap
- ✅ **Notificaciones** con SweetAlert2
- ✅ **Loaders** y feedback visual con ngx-ui-loader

### 🎨 UI/UX

- ✅ Diseño moderno y limpio
- ✅ Navegación intuitiva con sidebar
- ✅ Formularios validados
- ✅ Feedback visual en todas las acciones
- ✅ Responsive design (móvil, tablet, desktop)

---

## 🏗 Estructura del Proyecto

```
src/
│
├── 📂 app/
│   ├── 📂 components/              # Componentes reutilizables
│   │   └── navnar/                 # Barra de navegación
│   │
│   ├── 📂 pages/                   # Páginas principales
│   │   ├── 📂 admin/               # Panel de administración
│   │   │   ├── dashboard/          # Dashboard principal
│   │   │   ├── welcome/            # Página de bienvenida
│   │   │   ├── sidebar/            # Sidebar del admin
│   │   │   ├── add-categorias/     # Crear categoría
│   │   │   ├── view-categorias/    # Listar categorías
│   │   │   ├── add-examen/         # Crear examen
│   │   │   ├── view-examenes/      # Listar exámenes
│   │   │   ├── actualizar-examen/  # Editar examen
│   │   │   ├── view-examen-preguntas/  # Ver preguntas
│   │   │   ├── add-pregunta/       # Crear pregunta
│   │   │   └── actualizar-pregunta/    # Editar pregunta
│   │   │
│   │   ├── 📂 user/                # Panel de usuario
│   │   │   ├── user-dashboard/     # Dashboard del usuario
│   │   │   ├── sidebar/            # Sidebar del usuario
│   │   │   ├── load-examen/        # Cargar exámenes por categoría
│   │   │   ├── instrucciones/      # Instrucciones del examen
│   │   │   └── start/              # Realizar examen
│   │   │
│   │   ├── home/                   # Página de inicio
│   │   ├── login/                  # Inicio de sesión
│   │   ├── signup/                 # Registro de usuarios
│   │   └── profile/                 # Perfil de usuario
│   │
│   ├── 📂 services/                 # Servicios Angular
│   │   ├── login.service.ts        # Servicio de autenticación
│   │   ├── user.service.ts         # Servicio de usuarios
│   │   ├── categoria.service.ts    # Servicio de categorías
│   │   ├── examen.service.ts       # Servicio de exámenes
│   │   ├── pregunta.service.ts     # Servicio de preguntas
│   │   ├── admin.guard.ts          # Guard para admin
│   │   ├── normal.guard.ts         # Guard para usuarios
│   │   ├── auth.interceptor.ts     # Interceptor de autenticación
│   │   └── helper.ts               # Utilidades
│   │
│   ├── 📂 interfaces/               # Interfaces TypeScript
│   │   └── Usuario.ts              # Interface de Usuario
│   │
│   ├── app.component.ts            # Componente raíz
│   ├── app.module.ts               # Módulo principal
│   └── app-routing.module.ts       # Configuración de rutas
│
├── 📂 assets/                       # Recursos estáticos
│   └── *.png                        # Imágenes
│
├── index.html                       # HTML principal
├── main.ts                          # Punto de entrada
└── styles.css                       # Estilos globales
```

---

## 🛠 Tecnologías y Dependencias

### Dependencias Principales

```json
{
  "@angular/core": "^15.2.0",
  "@angular/material": "^15.2.9",
  "@angular/router": "^15.2.0",
  "@angular/forms": "^15.2.0",
  "bootstrap": "^5.3.0",
  "rxjs": "~7.8.0",
  "sweetalert2": "^11.7.5",
  "ngx-ui-loader": "^13.0.0"
}
```

### Características de Angular Utilizadas

- ✅ **Modules**: Arquitectura modular
- ✅ **Components**: Componentes reutilizables
- ✅ **Services**: Lógica de negocio y comunicación HTTP
- ✅ **Guards**: Protección de rutas
- ✅ **Interceptors**: Interceptores HTTP
- ✅ **Routing**: Navegación con Angular Router
- ✅ **Forms**: Formularios reactivos y template-driven
- ✅ **HTTP Client**: Comunicación con API REST

---

## 🗺 Sistema de Rutas

### Rutas Públicas

```typescript
/                    → HomeComponent
/login               → LoginComponent
/signup              → SignupComponent
```

### Rutas Protegidas - Administrador

```typescript
/admin                    → DashboardComponent (WelcomeComponent)
/admin/profile            → ProfileComponent
/admin/categorias         → ViewCategoriasComponent
/admin/add-categoria      → AddCategoriasComponent
/admin/examenes           → ViewExamenesComponent
/admin/add-examen         → AddExamenComponent
/admin/examen/:examenId   → ActualizarExamenComponent
/admin/ver-preguntas/:examenId/:titulo → ViewExamenPreguntasComponent
/admin/add-pregunta/:examenId/:titulo → AddPreguntaComponent
/admin/pregunta/:preguntaId → ActualizarPreguntaComponent
```

### Rutas Protegidas - Usuario Normal

```typescript
/user-dashboard                    → UserDashboardComponent
/user-dashboard/:catId             → LoadExamenComponent
/user-dashboard/instrucciones/:examenId → InstruccionesComponent
/start/:examenId                   → StartComponent
```

---

## 🧩 Componentes Principales

### 🏠 Páginas Públicas

#### HomeComponent
- Página de inicio con información del sistema
- Enlaces a login y registro

#### LoginComponent
- Formulario de autenticación
- Validación de credenciales
- Almacenamiento de token JWT

#### SignupComponent
- Formulario de registro
- Validación de datos
- Creación de nuevos usuarios

### 👨‍💼 Panel de Administración

#### DashboardComponent
- Layout principal del admin
- Sidebar de navegación
- Router outlet para componentes hijos

#### WelcomeComponent
- Página de bienvenida del admin
- Estadísticas generales

#### ViewCategoriasComponent
- Listado de todas las categorías
- Acciones: editar, eliminar

#### AddCategoriasComponent
- Formulario para crear/editar categorías

#### ViewExamenesComponent
- Listado de todos los exámenes
- Filtros y búsqueda
- Acciones: editar, eliminar, activar/desactivar

#### AddExamenComponent
- Formulario para crear exámenes
- Selección de categoría
- Configuración de puntos y preguntas

#### ViewExamenPreguntasComponent
- Listado de preguntas de un examen
- Acciones: agregar, editar, eliminar

#### AddPreguntaComponent
- Formulario para crear preguntas
- Opciones múltiples
- Respuesta correcta

### 👤 Panel de Usuario

#### UserDashboardComponent
- Dashboard del usuario
- Listado de categorías disponibles
- Navegación a exámenes

#### LoadExamenComponent
- Exámenes disponibles por categoría
- Filtro de exámenes activos
- Acceso a realizar examen

#### InstruccionesComponent
- Instrucciones antes de comenzar
- Información del examen
- Botón para iniciar

#### StartComponent
- Interfaz para realizar examen
- Preguntas con opciones múltiples
- Temporizador (si está implementado)
- Envío de respuestas

---

## 🔌 Servicios

### LoginService
```typescript
- generateToken(loginData): Genera token JWT
- loginUser(token): Almacena token en localStorage
- isLoggedIn(): Verifica si hay sesión activa
- logout(): Cierra sesión
- getToken(): Obtiene token actual
```

### UserService
```typescript
- publicUserSignup(user): Registro de usuario
- getUser(username): Obtener datos de usuario
```

### CategoriaService
```typescript
- listarCategorias(): Listar todas
- agregarCategoria(categoria): Crear
- actualizarCategoria(categoria): Actualizar
- eliminarCategoria(categoriaId): Eliminar
```

### ExamenService
```typescript
- listarExamenes(): Listar todos
- listarExamenesActivos(): Solo activos
- obtenerExamen(examenId): Por ID
- agregarExamen(examen): Crear
- actualizarExamen(examen): Actualizar
- eliminarExamen(examenId): Eliminar
- listarExamenesDeUnaCategoria(categoriaId): Por categoría
```

### PreguntaService
```typescript
- listarPreguntasDelExamen(examenId): Preguntas de un examen
- agregarPregunta(pregunta): Crear
- actualizarPregunta(pregunta): Actualizar
- eliminarPregunta(preguntaId): Eliminar
- evaluarExamen(preguntas): Evaluar respuestas
```

---

## 🔒 Seguridad

### Guards

#### AdminGuard
- Protege rutas de administración
- Verifica rol de admin
- Redirige a login si no está autenticado

#### NormalGuard
- Protege rutas de usuario normal
- Verifica autenticación
- Permite acceso a usuarios normales y admin

### AuthInterceptor
- Intercepta todas las peticiones HTTP
- Agrega token JWT al header `Authorization`
- Maneja errores de autenticación

---

## 🎨 Estilos y Diseño

### Frameworks CSS

- **Angular Material**: Componentes UI modernos
  - Tema: Deep Purple & Amber
  - Componentes: Cards, Buttons, Forms, Tables

- **Bootstrap**: Grid system y utilidades
  - Bootstrap Grid Only CSS
  - Sistema de columnas responsive

### Estilos Personalizados

- `styles.css`: Estilos globales
- Componentes con CSS scoped
- Diseño responsive con media queries

---

## 🚀 Instalación y Ejecución

### Prerrequisitos

- 🟢 **Node.js** 16+ y **npm**
- 📦 **Angular CLI** 15.2+

### Pasos para Ejecutar

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar servidor de desarrollo
ng serve

# 3. Abrir en navegador
# http://localhost:4200
```

### Comandos Disponibles

```bash
# Desarrollo
ng serve              # Servidor de desarrollo
ng serve --port 4201  # Puerto personalizado

# Build
ng build              # Build de producción
ng build --prod       # Build optimizado

# Testing
ng test               # Ejecutar tests unitarios
ng e2e                # Tests end-to-end

# Generar componentes
ng generate component nombre-componente
ng generate service nombre-servicio
```

---

## ⚙️ Configuración

### Variables de Entorno

Configurar la URL del backend en los servicios:

```typescript
// En cada servicio, ajustar la URL base
private baseURL = 'http://localhost:8080';
```

### Configuración de Rutas

Las rutas están configuradas en `app-routing.module.ts` con:
- Guards de protección
- Lazy loading (si está implementado)
- Rutas anidadas para admin y user

---

## 📱 Responsive Design

La aplicación está diseñada para ser responsive:

- **Desktop**: Layout completo con sidebar
- **Tablet**: Adaptación de columnas
- **Mobile**: Navegación optimizada

---

## 🎯 Funcionalidades por Rol

### 👨‍💼 Administrador

- ✅ Ver dashboard con estadísticas
- ✅ Gestionar categorías (CRUD completo)
- ✅ Gestionar exámenes (CRUD completo)
- ✅ Activar/desactivar exámenes
- ✅ Gestionar preguntas (CRUD completo)
- ✅ Ver perfil y editar datos

### 👤 Usuario Normal

- ✅ Ver categorías disponibles
- ✅ Ver exámenes activos por categoría
- ✅ Realizar exámenes
- ✅ Ver resultados
- ✅ Gestionar perfil personal

---

## 🔍 Características Técnicas Destacadas

### ✅ Buenas Prácticas Implementadas

- ✅ **Arquitectura modular** con separación de responsabilidades
- ✅ **Servicios reutilizables** para comunicación HTTP
- ✅ **Guards** para protección de rutas
- ✅ **Interceptores** para manejo centralizado de requests
- ✅ **Formularios reactivos** con validación
- ✅ **Manejo de errores** con SweetAlert2
- ✅ **Loading states** con ngx-ui-loader
- ✅ **TypeScript** para type safety
- ✅ **Nomenclatura consistente** en español

---

## 📝 Notas de Desarrollo

- El token JWT se almacena en `localStorage`
- Los guards verifican la autenticación antes de permitir acceso
- Los interceptores agregan automáticamente el token a las peticiones
- Las notificaciones se muestran con SweetAlert2 para mejor UX

---

## 🚧 Mejoras Futuras

- [ ] Implementar lazy loading de módulos
- [ ] Agregar tests unitarios con Jasmine/Karma
- [ ] Implementar PWA (Progressive Web App)
- [ ] Agregar internacionalización (i18n)
- [ ] Mejorar accesibilidad (a11y)
- [ ] Implementar dark mode
- [ ] Agregar gráficos y estadísticas con Chart.js
- [ ] Optimizar bundle size

---

## 👨‍💻 Autor

Desarrollado como parte del portafolio profesional

---

<div align="center">

**Frontend SPA - Sistema de Exámenes Online** 🎨

</div>
