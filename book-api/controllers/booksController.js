// booksController.js — el bibliotecario de libros
// Toma decisiones. No abre archivos ni da formato él mismo.

//Por qué try/catch
//La analogía: si el archivador está trabado (el archivo JSON está corrupto o no existe), el bibliotecario no se queda paralizado. Le dice al usuario "hubo un problema" y sigue atendiendo. Sin try/catch, un error derrumba todo el servidor.

//Las tres primeras líneas son las importaciones — el controlador pide sus herramientas:
const { v4: uuidv4 } = require('uuid')
const { obtenerLibros, guardarLibros } = require('../models/booksModel')
const { exito, error } = require('../views/responseFormatter')

// Devuelve todos los libros
function listarLibros() {
    try {
        const libros = obtenerLibros()
        return exito(libros)
    } catch (e) {
        return error('No se pudo obtener la lista de libros')
    }
}

// Agrega un libro nuevo
function agregarLibro(titulo, autor, anio) {
    try {
        const libros = obtenerLibros()
        const nuevoLibro = {
            id: uuidv4(),
            titulo: titulo,
            autor: autor,
            anio: anio
        }
        libros.push(nuevoLibro)
        guardarLibros(libros)
        return exito(nuevoLibro)
    } catch (e) {
        return error('No se pudo agregar el libro')
    }
}

module.exports = { listarLibros, agregarLibro }