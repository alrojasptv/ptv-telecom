document.getElementById("userForm").addEventListener("submit", async function (e) {
    e.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const telefono = document.getElementById("telefono").value;
    
    const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellidos, telefono })
    });
    
    const result = await response.json();
    if (result.error) {
        alert("Error al registrar el usuario.");
    } else {
        alert("Usuario registrado correctamente.");
    }
});

async function generateQRCode() {
    const telefono = document.getElementById("telefonoQR").value;
    const response = await fetch(`/api/users/generateQR/${telefono}`);
    const data = await response.json();
    
    if (data.error) {
        alert(data.error);
    } else {
        const img = document.createElement("img");
        img.src = data.qr;
        document.getElementById("qrContainer").appendChild(img);
    }
}
