document.getElementById("uploadForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fileInput = document.getElementById("csvFile");
  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  fetch("/api/upload/upload-csv", {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => alert("Archivo subido correctamente"))
    .catch(err => alert("Error al subir el archivo"));
});
