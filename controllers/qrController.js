const QRCode = require("qrcode");

exports.generateQr = async (req, res) => {
  const { name, lastname, phone } = req.body;

  if (!name || !lastname || !phone) {
    return res.status(400).json({ message: "Faltan datos." });
  }

  const data = JSON.stringify({ name, lastname, phone });
  
  try {
    const qrImage = await QRCode.toDataURL(data);
    res.json({ qrImage });
  } catch (err) {
    res.status(500).json({ message: "Error generando QR", error: err });
  }
};
