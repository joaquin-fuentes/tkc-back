/* Este fragmento de código define un esquema Mongoose para una entidad "mensaje". Aquí hay un desglose
de lo que hace cada parte: */
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