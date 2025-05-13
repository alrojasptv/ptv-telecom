# 📘 Proyecto: ptv-telecom

## 🧾 Descripción General

`ptv-telecom` es una aplicación web que gestiona un sistema de verificación de usuarios mediante códigos QR para realizar un sorteo. Funciona con frontend en HTML/CSS/JS Vanilla y backend en Node.js/Express, con base de datos MongoDB.

---

## 🧩 Estructura del Proyecto

```
ptv-telecom/
├── /controllers         # Lógica de negocio
├── /models              # Esquemas de MongoDB
├── /routes              # Endpoints del backend
├── /public              # Archivos estáticos frontend
│   ├── /js              # JS Vanilla
│   └── /css             # Estilos globales
├── /data                # CSVs generados
├── .env                 # Variables de entorno
├── package.json         # Dependencias y scripts
├── server.js            # Punto de entrada del servidor
└── README.md            # Documentación del proyecto
```

---

## 🔧 Tecnologías Usadas

| Área       | Tecnología       |
|------------|------------------|
| Frontend   | HTML5, CSS3, JS Vanilla |
| Backend    | Node.js, Express |
| Base Datos | MongoDB (Mongoose) |
| Otros      | QRCode, csv-writer, multer, dotenv |

---

## ⚙️ Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/tuusuario/ptv-telecom.git
cd ptv-telecom
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno (`.env`):
```
PORT=5000
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/ptv-telecom
```

4. Inicia el servidor:
```bash
npm start
```

5. Abre el frontend (`/public/index.html`) directamente en el navegador.

---

## 🧪 Funcionalidades Principales

1. **Carga de Usuarios** vía CSV.
2. **Verificación de Usuario** y generación de QR.
3. **Escaneo de QR** y registro de usuarios escaneados.
4. **Sorteo aleatorio** entre verificados con animación.
5. **Descarga** de registros CSV.
6. **Botón BORRAR DATOS** con confirmación.

---

## 🧑‍💻 Endpoints API

| Método | Ruta                     | Función                        |
|--------|--------------------------|--------------------------------|
| POST   | `/api/users/verify`      | Verifica número telefónico     |
| POST   | `/api/users/register`    | Registra usuario               |
| GET    | `/api/users`             | Obtiene todos los usuarios     |
| POST   | `/api/qr/generate`       | Genera QR                      |
| POST   | `/api/upload/upload-csv` | Sube CSV                       |
| GET    | `/api/upload/download-csv` | Descarga CSV verificados    |

---

## 🧾 Modelos MongoDB

### User.js
```js
{ name, lastname, phone }
```

### VerifiedUser.js
```js
{ name, lastname, phone, qrId, timestamp }
```

### Winner.js
```js
{ name, lastname, phone, wonAt }
```

---

## 📱 Estilo y Responsive

- Responsive en móvil y escritorio.
- Botones con color `#00b1aa` y hover blanco.
- Espaciado vertical adecuado.

---

## 🧼 Seguridad

- Teléfonos duplicados no permitidos.
- Verificación única por usuario.
- Confirmación antes de borrar datos.

---

## 📤 Despliegue en Render

1. Subir a GitHub.
2. Conectar Render.
3. Configurar `.env` con `PORT` y `MONGO_URI`.
4. Comando de inicio: `npm start`.

---

## ✨ Autor

Aplicación desarrollada para control de sorteos vía QR para telecomunicaciones.