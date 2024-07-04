/* Este código JavaScript configura un enrutador utilizando el marco Express para una aplicación de
mensajería. Aquí hay un desglose de lo que hace cada parte: */
import { Router } from "express";
import {
    borrarMensaje,
    crearMensaje,
    editarMensaje,
    obtenerMensaje,
    obtenerMensajes
} from "../controllers/mensajes.controllers";
import { check } from "express-validator"

const router = Router()


router.route("/mensajes")
    .get(obtenerMensajes)
    .post([check("comentario")
        .notEmpty()
        .withMessage("El comentario es un dato obligatorio")]
        , crearMensaje)
router.route("/mensajes/:id")
    .get(obtenerMensaje)
    .delete(borrarMensaje)
    .put(editarMensaje)

export default router