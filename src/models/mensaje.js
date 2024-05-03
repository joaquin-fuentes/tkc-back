import { Schema, model } from "mongoose"

const mensajeSchema = new Schema({
    comentario: {
        type: String,
        minLength: 2,
        maxLength: 500,
        required: true
    },
    email: {
        type: String,
        minLength: 2,
        maxLength: 50,
        unique: true,
        required: true
    },
    nombre: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true,
    },
    fecha: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    }

})

const Mensaje = model("mensaje", mensajeSchema)

export default Mensaje