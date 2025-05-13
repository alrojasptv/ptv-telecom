const mongoose = require("mongoose");

const WinnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  wonAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Winner", WinnerSchema);
