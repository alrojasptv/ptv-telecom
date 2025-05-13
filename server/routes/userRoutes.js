const express = require("express");
const { createUser, getUsers, generateQRCode } = require("../controllers/userController");

const router = express.Router();

// Ruta para crear usuarios
router.post("/", createUser);

// Ruta para obtener todos los usuarios
router.get("/", getUsers);

// Ruta para generar el QR de un usuario
router.get("/generateQR/:telefono", generateQRCode);

module.exports = router;
