# Sistema de Gestión de Biblioteca — Camila Chirino Castell

Sistema de gestión de biblioteca con dos etapas: lógica en JavaScript vanilla y API con servidor TCP en Node.js.

## 🛠️ Stack
JavaScript (vanilla) · Node.js · Módulo NET · Módulo FS

## 💡 Funcionalidades
### Etapa 1 — JavaScript vanilla
- CRUD de libros y usuarios
- Sistema de préstamos
- Búsqueda lineal por título, autor o género
- Ordenamiento con algoritmo bubble sort
- Reportes con .filter(), .map() y .reduce()
- Estadísticas con objeto Math
- Normalización de datos con métodos de strings
- Menú interactivo por consola con prompt()

### Etapa 2 — API con servidor TCP
- Servidor TCP con módulo NET en puerto 8080
- Arquitectura MVC
- Persistencia de datos en archivos JSON con módulo FS
- Cliente TCP con comandos GET BOOKS, ADD BOOK, GET AUTHORS, ADD AUTHOR, GET PUBLISHERS, ADD PUBLISHER

## 📁 Estructura del proyecto
library-management-system/
├── index.html
├── main.js
├── book-api/
│   ├── controllers/
│   │   ├── booksController.js
│   │   ├── authorsController.js
│   │   └── publishersController.js
│   ├── models/
│   │   ├── booksModel.js
│   │   ├── authorsModel.js
│   │   └── publishersModel.js
│   ├── views/
│   │   └── responseFormatter.js
│   ├── data/
│   │   ├── books.json
│   │   ├── authors.json
│   │   └── publishers.json
│   ├── server.js
│   ├── client.js
│   └── package.json
├── .gitignore
└── README.md

## 🚀 Cómo ejecutar

### Etapa 1
Abrir `index.html` en el navegador, presionar F12 y en la consola escribir: `menuPrincipal()`

### Etapa 2 — API

**Terminal 1 — iniciar el servidor:**
```bash
cd book-api
npm install
node server.js
```

**Terminal 2 — iniciar el cliente:**
```bash
node client.js
```

## 📡 Comandos disponibles

### Libros
GET BOOKS
ADD BOOK {"titulo":"Sentido y sensibilidad","autor":"Jane Austen","año":1811,"genero":"Novela romántica"}

### Autores
GET AUTHORS
ADD AUTHOR {"nombre":"Mary Shelley","nacionalidad":"Inglesa","añoNacimiento":1797,"añoMuerte":1851}

### Editoriales
GET PUBLISHERS
ADD PUBLISHER {"nombre":"Lackington Hughes","pais":"Reino Unido","añoFundacion":1774}

## ✅ Respuesta esperada — éxito
```json
{
  "estado": "exito",
  "datos": [...]
}
```

## ❌ Respuesta esperada — error
```json
{
  "estado": "error",
  "mensaje": "Comando no reconocido"
}
```

## 👩‍💻 Autora
Camila Chirino Castell — ADA ITW 2026