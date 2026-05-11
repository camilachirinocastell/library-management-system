// server.js
// El mostrador de atención de la biblioteca.
// Servidor TCP que escucha en el puerto 8080.
// Recibe comandos de client.js y los deriva al controlador correspondiente.

const net = require('net')

// Importamos los controladores — los tres bibliotecarios
const { listarLibros, agregarLibro }           = require('./controllers/booksController')
const { listarAutores, agregarAutor }          = require('./controllers/authorsController')
const { listarEditoriales, agregarEditorial }  = require('./controllers/publishersController')

// Creamos el servidor TCP
const server = net.createServer((socket) => {

    console.log('Cliente conectado')

    // Cuando llega un mensaje del cliente
    socket.on('data', (data) => {

        // Convertimos los bytes a texto y sacamos espacios sobrantes
        const mensaje = data.toString().trim()
        console.log('Comando recibido:', mensaje)

        let respuesta

        // Comparamos el comando y derivamos al controlador correcto
        if (mensaje === 'GET BOOKS') {
            respuesta = listarLibros()

        } else if (mensaje === 'GET AUTHORS') {
            respuesta = listarAutores()

        } else if (mensaje === 'GET PUBLISHERS') {
            respuesta = listarEditoriales()

        } else if (mensaje.startsWith('ADD BOOK')) {
            // Formato esperado: ADD BOOK|titulo|autor|anio
            const partes = mensaje.split('|')
            respuesta = agregarLibro(partes[1], partes[2], partes[3])

        } else if (mensaje.startsWith('ADD AUTHOR')) {
            // Formato esperado: ADD AUTHOR|nombre|nacionalidad
            const partes = mensaje.split('|')
            respuesta = agregarAutor(partes[1], partes[2])

        } else if (mensaje.startsWith('ADD PUBLISHER')) {
            // Formato esperado: ADD PUBLISHER|nombre|pais
            const partes = mensaje.split('|')
            respuesta = agregarEditorial(partes[1], partes[2])

        } else {
            // Comando no reconocido
            respuesta = JSON.stringify({
                estado: 'error',
                mensaje: 'Comando no reconocido: ' + mensaje
            })
        }

        // Mandamos la respuesta al cliente + salto de línea para que llegue limpia
        socket.write(respuesta + '\n')
    })

    // Cuando el cliente se desconecta
    socket.on('end', () => {
        console.log('Cliente desconectado')
    })

    // Si hay un error en la conexión
    socket.on('error', (err) => {
        console.error('Error en la conexión:', err.message)
    })
})

// El servidor empieza a escuchar en el puerto 8080
server.listen(8080, () => {
    console.log('Biblioteca abierta — escuchando en puerto 8080')
})