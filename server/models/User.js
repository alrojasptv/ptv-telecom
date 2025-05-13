const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellidos: { type: String, required: true },
  telefono: { type: String, required: true, unique: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
