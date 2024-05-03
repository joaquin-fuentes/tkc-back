import { validationResult } from "express-validator"
import Mensaje from "../models/mensaje"

//Controlador para obtener mensajes

export const obtenerMensajes = async (req, res)=>{
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

export const obtenerMensaje = async (req, res)=>{
    try {
        const {id} = req.params
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

export const crearMensaje = async (req, res)=>{
    try {
         //trabajar con el resultado de la validacion de express-validator
         const errors = validationResult(req)
         // errors.isEmpty() // true: esta vacio, false: hay error
         if(!errors.isEmpty()){
             return res.status(400).json({errores: errors.array()})
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

export const borrarMensaje = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el borrar   
        const {id} = req.params   
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

export const editarMensaje = async (req, res)=>{
    try {
        //obtener el id y luego solicitar a moongoose el editar   
        const {id} = req.params   
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