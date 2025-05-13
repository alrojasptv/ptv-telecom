const express = require('express');
const router = express.Router();

// Aquí iría el código para manejar la carga de archivos
router.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  let uploadedFile = req.files.file;
  uploadedFile.mv(`${__dirname}/uploads/${uploadedFile.name}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('File uploaded!');
  });
});

module.exports = router;
