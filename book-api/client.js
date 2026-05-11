// client.js
// El teléfono del usuario.
// Cliente TCP que se conecta al servidor en el puerto 8080 y permite enviar comandos.
// Comandos disponibles: GET BOOKS, ADD BOOK, GET AUTHORS, ADD AUTHOR, GET PUBLISHERS, ADD PUBLISHER.

const net = require('net')
const readline = require('readline')

// Nos conectamos al servidor
const client = net.connect({ port: 8080 }, () => {
    console.log('Conectado a la biblioteca')
    console.log('Comandos disponibles:')
    console.log('  GET BOOKS')
    console.log('  GET AUTHORS')
    console.log('  GET PUBLISHERS')
    console.log('  ADD BOOK|titulo|autor|anio')
    console.log('  ADD AUTHOR|nombre|nacionalidad')
    console.log('  ADD PUBLISHER|nombre|pais')
    console.log('─────────────────────────────')
})

// Cuando llega una respuesta del servidor, la mostramos
client.on('data', (data) => {
    console.log('Respuesta:', data.toString())
})

// Si hay un error de conexión
client.on('error', (err) => {
    console.error('Error al conectar con el servidor:', err.message)
})

// Cuando el servidor se desconecta
client.on('end', () => {
    console.log('Servidor desconectado')
})

// Interfaz para escribir comandos en la terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (linea) => {
    client.write(linea.trim())
})