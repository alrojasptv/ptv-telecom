const mongoose = require("mongoose");

const VerifiedUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  qrId: { type: String, required: true, unique: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("VerifiedUser", VerifiedUserSchema);
