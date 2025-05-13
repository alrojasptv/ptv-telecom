const express = require('express');
const router = express.Router();
const User = require('../models/User');  // Asegúrate de tener un modelo de usuario

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const users = await User.find();  // Asegúrate de que tu modelo 'User' esté definido
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Verificar si un usuario está registrado por su número de teléfono
router.post('/verify', async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const user = await User.findOne({ phoneNumber: phoneNumber });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.json(user);  // Si el usuario existe, devuelve los datos
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Ruta para obtener la lista de todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();  // Aquí recuperamos todos los usuarios de la base de datos
    res.json(users);  // Devolvemos la lista de usuarios en formato JSON
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
