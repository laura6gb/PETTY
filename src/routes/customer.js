//src/routes/customer.js
const express = require("express");
const router = express.Router();

const customerController = require("../controllers/customerController");

//Rutas CRUD
router.get("/", customerController.list); //Listar todos los clientes
router.get("/:iduser", customerController.get); //Obtener un cliente por ID
router.post("/", customerController.create); //Crear un cliente
router.put("/:iduser", customerController.update); //Actualizar un cliente por ID
router.delete("/:iduser", customerController.delete); //Eliminar un cliente por ID

module.exports = router;
