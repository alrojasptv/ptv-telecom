let scannedUsers = [];
const userList = document.getElementById("scannedUsers");

function onScanSuccess(decodedText) {
  const user = JSON.parse(decodedText);
  if (!scannedUsers.find(u => u.phone === user.phone)) {
    scannedUsers.push(user);
    const li = document.createElement("li");
    li.textContent = user.name + " " + user.lastname + " - " + user.phone;
    userList.appendChild(li);
  }
}

new Html5Qrcode("preview").start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 250 },
  onScanSuccess
);

document.getElementById("downloadScans").addEventListener("click", () => {
  let csv = "name,lastname,phone\n";
  scannedUsers.forEach(u => {
    csv += `${u.name},${u.lastname},${u.phone}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "verificados.csv";
  a.click();
});
