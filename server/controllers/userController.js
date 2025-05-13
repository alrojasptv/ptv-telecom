const User = require("../models/User");
const QRCode = require("qrcode");

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { nombre, apellidos, telefono } = req.body;
  
  try {
    const newUser = new User({ nombre, apellidos, telefono });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "No se pudo crear el usuario." });
  }
};

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener usuarios." });
  }
};

// Generar QR para un usuario
exports.generateQRCode = async (req, res) => {
  const { telefono } = req.params;

  try {
    const user = await User.findOne({ telefono });
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    const qrData = {
      id: user._id,
      nombre: user.nombre,
      apellidos: user.apellidos,
      telefono: user.telefono
    };

    QRCode.toDataURL(JSON.stringify(qrData), (err, url) => {
      if (err) return res.status(500).json({ error: "Error generando el QR." });
      res.json({ qr: url });
    });
  } catch (error) {
    res.status(500).json({ error: "Error al generar el código QR." });
  }
};
