const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');
const path = require('path');

// Middleware para manejar la carga de archivos
router.use(fileUpload());

// Ruta para cargar archivos
router.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const uploadedFile = req.files.file;  // El nombre del input del archivo debe ser 'file'
  const uploadPath = path.join(__dirname, '../uploads', uploadedFile.name);

  uploadedFile.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded to ' + uploadPath);
  });
});

module.exports = router;
