import { Router } from "express";
import {
    borrarMensaje,
    crearMensaje,
    editarMensaje,
    obtenerMensaje,
    obtenerMensajes
} from "../controllers/mensajes.controllers";
import {check} from "express-validator"

const router = Router()


router.route("/mensajes")
    .get(obtenerMensaje)
    .post([check("mensaje")
           .notEmpty()
           .withMessage("El mensaje es un dato obligatorio")]
                ,crearMensaje)
router.route("/mensajes/:id")
    .get(obtenerMensaje)
    .delete(borrarMensaje)
    .put(editarMensaje)

export default router