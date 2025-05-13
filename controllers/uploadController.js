const fs = require("fs");
const path = require("path");
const User = require("../models/User");
const csv = require("csv-parser");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const uploadPath = path.join(__dirname, "..", "data");

exports.uploadCsv = async (req, res) => {
  const { csvData } = req.body; // Simulación de carga de archivo

  const users = [];

  // Aquí usarías un módulo para leer CSV real
  csvData.forEach(user => {
    users.push({
      name: user.name,
      lastname: user.lastname,
      phone: user.phone,
    });
  });

  await User.insertMany(users);
  res.status(200).json({ message: "CSV importado con éxito", users });
};

exports.downloadCsv = async (req, res) => {
  const users = await User.find();
  const csvWriter = createCsvWriter({
    path: path.join(uploadPath, "usuarios.csv"),
    header: [
      { id: "name", title: "Nombre" },
      { id: "lastname", title: "Apellido" },
      { id: "phone", title: "Teléfono" },
    ],
  });

  await csvWriter.writeRecords(users);
  res.download(path.join(uploadPath, "usuarios.csv"));
};
