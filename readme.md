# API de Tareas con Node.js, Express y Sequelize

Esta es una actividad práctica para estudiantes que están aprendiendo Node.js con Express, TypeScript y Sequelize. La actividad consiste en crear una API REST para gestionar tareas (To-Do List).

## Objetivos de Aprendizaje

- Entender la estructura de un proyecto Node.js con TypeScript
- Aprender a usar Sequelize como ORM
- Implementar operaciones CRUD
- Manejar rutas y controladores en Express
- Trabajar con variables de entorno
- Implementar validaciones básicas

## Requisitos Previos

- Node.js instalado
- MySQL instalado y configurado
- Conocimientos básicos de TypeScript
- Conocimientos básicos de bases de datos relacionales

## Configuración del Proyecto

1. Clonar el repositorio
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear una base de datos MySQL llamada `todo_db`
4. Configurar las variables de entorno en el archivo `.env`:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   DB_NAME=todo_db
   PORT=3000
   ```

## Estructura del Proyecto

```
src/
├── config/
│   └── database.ts
├── controllers/
│   └── TaskController.ts
├── models/
│   └── Task.ts
├── routes/
│   └── taskRoutes.ts
└── app.ts
```

## Endpoints Disponibles

- `GET /api/tasks` - Obtener todas las tareas
- `GET /api/tasks/:id` - Obtener una tarea por ID
- `POST /api/tasks` - Crear una nueva tarea
- `PUT /api/tasks/:id` - Actualizar una tarea
- `DELETE /api/tasks/:id` - Eliminar una tarea

## Ejemplo de Uso

### Crear una Tarea
```json
POST /api/tasks
{
  "title": "Aprender Node.js",
  "description": "Estudiar los fundamentos de Node.js",
  "completed": false
}
```

### Actualizar una Tarea
```json
PUT /api/tasks/1
{
  "completed": true
}
```

## Ejecutar el Proyecto

- Modo desarrollo:
  ```bash
  npm run dev
  ```
- Modo producción:
  ```bash
  npm run build
  npm start
  ```

## Tiempo Estimado

La actividad está diseñada para completarse en aproximadamente 2 horas.


## Notas para el Instructor

Esta actividad está diseñada para ser completada en un tiempo máximo de 2 horas y cubre los conceptos fundamentales de:
- Configuración de un proyecto Node.js con TypeScript
- Uso de Sequelize como ORM
- Implementación de una API REST
- Manejo de errores y validaciones
- Trabajo con bases de datos MySQL

## Pasos para Completar la Actividad

### 1. Configuración Inicial (15 minutos)
1. Crear la estructura de carpetas del proyecto
2. Inicializar el proyecto con npm
3. Instalar las dependencias necesarias
4. Configurar TypeScript
5. Crear el archivo .env con las variables de entorno

### 2. Configuración de la Base de Datos (15 minutos)
1. Crear la base de datos en MySQL
2. Implementar la configuración de Sequelize
3. Crear el modelo Task con sus atributos
4. Configurar las validaciones del modelo

### 3. Implementación de la API (1 hora)
1. Crear el controlador TaskController con los métodos:
   - getAllTasks
   - getTaskById
   - createTask
   - updateTask
   - deleteTask
2. Implementar las rutas en taskRoutes.ts
3. Configurar el archivo app.ts con:
   - Middleware de CORS
   - Middleware para parsear JSON
   - Configuración de rutas
   - Inicialización del servidor

### 4. Pruebas y Depuración (30 minutos)
1. Probar cada endpoint con Postman o similar:
   - Crear una nueva tarea
   - Obtener todas las tareas
   - Obtener una tarea específica
   - Actualizar una tarea
   - Eliminar una tarea
2. Verificar el manejo de errores
3. Comprobar las validaciones


### Puntos de Verificación
- [ ] La base de datos se conecta correctamente
- [ ] El modelo Task tiene todos los campos requeridos
- [ ] Los endpoints funcionan correctamente
- [ ] Las validaciones funcionan como se espera
- [ ] El manejo de errores es adecuado
- [ ] El código está documentado

### Consejos
- Usa try-catch para manejar errores
- Implementa validaciones en el modelo
- Mantén el código organizado y limpio
- Prueba cada funcionalidad antes de continuar
- Usa Postman o similar para probar los endpoints


## Extras (Opcional)
- Agregar autenticación de usuarios
- Implementar filtros y búsqueda
- Agregar paginación
