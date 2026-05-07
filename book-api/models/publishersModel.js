// publishersModel.js
// El archivador de editoriales.
// Solo sabe abrir y cerrar el cajón — leer y escribir en publishers.json.
// No toma decisiones. No sabe quién pregunta ni para qué.

const fs = require('fs')
const path = require('path')

const rutaEditoriales = path.join(__dirname, '../data/publishers.json')

function obtenerEditoriales() {
    const datos = fs.readFileSync(rutaEditoriales, 'utf8')
    return JSON.parse(datos)
}

function guardarEditoriales(editoriales) {
    fs.writeFileSync(rutaEditoriales, JSON.stringify(editoriales, null, 2))
}

module.exports = { obtenerEditoriales, guardarEditoriales }