const express = require("express");
const router = express.Router();
const QrController = require("../controllers/qrController");

// Ruta para generar un código QR para un usuario
router.post("/generate", QrController.generateQr);

module.exports = router;
