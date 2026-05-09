// publishersController.js
// El bibliotecario de editoriales.
// Toma decisiones. No abre archivos ni da formato él mismo.
// Recibe los comandos GET PUBLISHERS y ADD PUBLISHER,
// consulta el archivador (publishersModel) y devuelve la respuesta formateada.




// Herramientas que usa este controlador
//Las importaciones traen el archivador de editoriales en vez del de libros o autores:
const { v4: uuidv4 } = require('uuid')                                          // generador de IDs únicos
const { obtenerEditoriales, guardarEditoriales } = require('../models/publishersModel')  // archivador de editoriales
const { exito, error } = require('../views/responseFormatter')                   // formatea la respuesta final

// Devuelve todas las editoriales
function listarEditoriales() {
    try {
        const editoriales = obtenerEditoriales()
        return exito(editoriales)
    } catch (e) {
        return error('No se pudo obtener la lista de editoriales')
    }
}

// Agrega una editorial nueva
function agregarEditorial(nombre, pais) {
    try {
        const editoriales = obtenerEditoriales()
        const nuevaEditorial = {
            id: uuidv4(),
            nombre: nombre,
            pais: pais
        }
        editoriales.push(nuevaEditorial)
        guardarEditoriales(editoriales)
        return exito(nuevaEditorial)
    } catch (e) {
        return error('No se pudo agregar la editorial')
    }
}

module.exports = { listarEditoriales, agregarEditorial }