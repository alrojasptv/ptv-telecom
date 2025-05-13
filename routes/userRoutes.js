const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// Ruta para registrar un usuario verificando su teléfono
router.post("/register", UserController.registerUser);

// Ruta para obtener la lista de usuarios registrados
router.get("/", UserController.getUsers);

// Ruta para verificar si un número de teléfono está registrado
router.post("/verify", UserController.verifyPhone);

module.exports = router;
