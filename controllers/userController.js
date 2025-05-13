const User = require("../models/User");

const verifiedUsers = new Set(); // Evita duplicados en memoria

exports.verifyPhone = async (req, res) => {
  const { phone } = req.body;

  if (verifiedUsers.has(phone)) {
    return res.status(400).json({ message: "Ya registrado." });
  }

  const user = await User.findOne({ phone });

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado." });
  }

  verifiedUsers.add(phone);
  return res.json({ message: "Usuario verificado", user });
};

exports.registerUser = async (req, res) => {
  const { name, lastname, phone } = req.body;

  if (await User.findOne({ phone })) {
    return res.status(409).json({ message: "Ya registrado." });
  }

  const newUser = new User({ name, lastname, phone });
  await newUser.save();
  res.status(201).json({ message: "Usuario registrado", user: newUser });
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
