// authorsModel.js
// El archivador de autores.
// Solo sabe abrir y cerrar el cajón — leer y escribir en authors.json.
// No toma decisiones. No sabe quién pregunta ni para qué.

const fs = require('fs')
const path = require('path')

const rutaAutores = path.join(__dirname, '../data/authors.json')

function obtenerAutores() {
    const datos = fs.readFileSync(rutaAutores, 'utf8')
    return JSON.parse(datos)
}

function guardarAutores(autores) {
    fs.writeFileSync(rutaAutores, JSON.stringify(autores, null, 2))
}

module.exports = { obtenerAutores, guardarAutores }