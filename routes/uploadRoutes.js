const express = require("express");
const router = express.Router();
const UploadController = require("../controllers/uploadController");

// Ruta para cargar un archivo CSV
router.post("/upload-csv", UploadController.uploadCsv);

// Ruta para descargar el archivo CSV de usuarios verificados
router.get("/download-csv", UploadController.downloadCsv);

module.exports = router;
