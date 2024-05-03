import { Router } from "express";
import {check} from "express-validator"
import { crearUsuario, obtenerUsuarios, obtenerUsuario, borrarUsuario, editarUsuario,login } from "../controllers/usuarios.controllers";

const router = Router()


router.route("/usuarios")
.get(obtenerUsuarios)
.post(login)

router.route("/usuarios/crear")
.post([check("nombreUsuario")
        .notEmpty()
        .withMessage("El nombreUsuario es un dato obligatorio")]
         ,crearUsuario)

router.route("/usuarios/:id")
    .get(obtenerUsuario)
    .delete(borrarUsuario)
    .put(editarUsuario)


export default router