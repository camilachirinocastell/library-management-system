// booksModel.js
// El archivador de libros.
// Solo sabe abrir y cerrar el cajón — leer y escribir en books.json.
// No toma decisiones. No sabe quién pregunta ni para qué.

const fs = require('fs')
const path = require('path')

// Construye la ruta al archivo books.json de forma segura
// __dirname = la carpeta donde está este archivo (models/)
// '../data/books.json' = subir una carpeta, entrar a data, abrir books.json
const rutaLibros = path.join(__dirname, '../data/books.json')

// LEER — abre el cajón y devuelve todas las fichas
function obtenerLibros() {
    const datos = fs.readFileSync(rutaLibros, 'utf8')
    return JSON.parse(datos)
}

// ESCRIBIR — recibe fichas actualizadas y las guarda en el cajón
function guardarLibros(libros) {
    fs.writeFileSync(rutaLibros, JSON.stringify(libros, null, 2))
}

// Exporta las funciones para que otros archivos puedan usarlas
module.exports = { obtenerLibros, guardarLibros }