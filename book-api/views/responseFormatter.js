// responseFormatter.js — la impresora de recibos
// No decide nada. Solo da forma a la respuesta.

// Recibo de ÉXITO: cuando todo salió bien
function exito(datos) {
    return JSON.stringify({
        estado: "exito",
        datos: datos
    })
}

// Recibo de ERROR: cuando algo falló
function error(mensaje) {
    return JSON.stringify({
        estado: "error",
        mensaje: mensaje
    })
}

module.exports = { exito, error }