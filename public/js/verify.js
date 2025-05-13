document.getElementById("verifyForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message");
  const canvas = document.getElementById("qrcode");

  fetch("/api/users/verify", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        message.textContent = "Usuario verificado. Descarga tu código QR.";
        QRCode.toCanvas(canvas, JSON.stringify(data.qrData), function (error) {
          if (error) console.error(error);
        });
      } else {
        message.textContent = "LO SENTIMOS. ESTE USUARIO YA HA SIDO REGISTRADO O NO SE ENCUENTRA EN NUESTRO SISTEMA";
        message.style.color = "red";
      }
    })
    .catch(err => {
      message.textContent = "Error en la verificación";
      message.style.color = "red";
    });
});
