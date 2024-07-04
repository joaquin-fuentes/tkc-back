/**
 * El código anterior contiene funciones de controlador para manejar operaciones CRUD en mensajes en
 * una aplicación Node.js usando Express y Mongoose.
 * @param req - El parámetro `req` en su código representa el objeto de solicitud en Express.js.
 * Contiene información sobre la solicitud HTTP, como los encabezados de la solicitud, los parámetros,
 * el cuerpo, los parámetros de consulta, etc.
 * @param res - El parámetro `res` en los fragmentos de código que proporcionó representa el objeto de
 * respuesta en Express.js. Se utiliza para enviar una respuesta al cliente que realiza la solicitud
 * HTTP. El objeto de respuesta (`res`) tiene métodos como `res.status()` para establecer el código de
 * estado HTTP de la respuesta, `
 */
import { validationResult } from "express-validator"
import Mensaje from "../models/mensaje"

//Controlador para obtener mensajes

export const obtenerMensajes = async (req, res) => {
    try {
        const mensajes = await Mensaje.find()
        res.status(200).json(mensajes)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar los mensajes de la base de datos"
        })
    }
}
//Controlador para obtener un solo mensaje

export const obtenerMensaje = async (req, res) => {
    try {
        const { id } = req.params
        const mensaje = await Mensaje.findById(id)
        res.status(200).json(mensaje)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al buscar el mensaje de la base de datos"
        })
    }
}

// Controlador para crear un mensaje

export const crearMensaje = async (req, res) => {
    try {
        //trabajar con el resultado de la validacion de express-validator
        const errors = validationResult(req)
        // errors.isEmpty() // true: esta vacio, false: hay error
        if (!errors.isEmpty()) {
            return res.status(400).json({ errores: errors.array() })
        }
        const mensajeNuevo = new Mensaje(req.body)
        await mensajeNuevo.save()
        res.status(201).json({
            mensaje: "El mensaje fue creado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al crear el mensaje"
        })
    }
}

// controlador para eliminar un mensaje

export const borrarMensaje = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const { id } = req.params
        await Mensaje.findByIdAndDelete(id)
        res.status(200).json({
            mensaje: "El mensaje fue eliminado"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al eliminar el mensaje"
        })
    }
}

// controlador para editar un mensaje

export const editarMensaje = async (req, res) => {
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const { id } = req.params
        await Mensaje.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje: "El mensaje fue actualizado correctamente"
        })
    }
    catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "Error al editar el mensaje"
        })
    }
}