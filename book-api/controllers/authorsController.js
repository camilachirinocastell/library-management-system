// authorsController.js
// El bibliotecario de autores.
// Toma decisiones. No abre archivos ni da formato él mismo.
// Recibe los comandos GET AUTHORS y ADD AUTHOR,
// consulta el archivador (authorsModel) y devuelve la respuesta formateada.


//Las tres primeras líneas son las importaciones — el controlador pide sus herramientas:
const { v4: uuidv4 } = require('uuid') //Trae la función que genera IDs únicos. v4 es la versión que genera IDs al azar. El : uuidv4 es solo ponerle un nombre más cómodo para usarla.
const { obtenerAutores, guardarAutores } = require('../models/authorsModel') //Trae las dos funciones del archivador de autores. Las llaves { } significan "quiero solo estas dos cosas del archivo", no todo.
const { exito, error } = require('../views/responseFormatter') //Trae la impresora de recibos : formatea la respuesta final

// Devuelve todos los autores
function listarAutores() { //cuando alguien pide la lista:
    try {
        const autores = obtenerAutores() // va al archivador y saca todas las fichas
        return exito(autores) //// las manda a la impresora y devuelve el recibo
    } catch (e) {
        return error('No se pudo obtener la lista de autores')
    }
}

// Agrega un autor nuevo
function agregarAutor(nombre, nacionalidad) { //cuando alguien quiere agregar uno nuevo:
    try {
        const autores = obtenerAutores() //abre el archivador
        const nuevoAutor = { // crea la ficha nueva con sus datos
            id: uuidv4(),
            nombre: nombre,
            nacionalidad: nacionalidad
        }
        autores.push(nuevoAutor) // agrega la ficha al montón
        guardarAutores(autores) // cierra el archivador con la ficha adentro
        return exito(nuevoAutor)  // imprime el recibo con los datos del nuevo autor
    } catch (e) {
        return error('No se pudo agregar el autor')
    }
}

module.exports = { listarAutores, agregarAutor } //las dos funciones disponibles para que el servidor las use cuando llegue un comando. Lo que no está acá adentro, no existe para el resto del proyecto.