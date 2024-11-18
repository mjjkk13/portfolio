# Portafolio Personal - Vite React

Este es un proyecto de **portafolio personal** desarrollado con **Vite React**. El portafolio incluye una sección para mostrar proyectos destacados y un formulario de contacto funcional que utiliza **Nodemailer** para enviar correos electrónicos desde un servidor backend.

---

## Características

- Interfaz moderna y responsiva.
- Sección de proyectos destacados.
- Formulario de contacto para enviar correos electrónicos.
- Implementación cliente-servidor para el manejo de solicitudes de correo.

---

## Tecnologías Utilizadas

- **Vite**: Herramienta de construcción rápida para aplicaciones React.
- **React**: Biblioteca para construir interfaces de usuario.
- **Node.js y Express.js**: Backend para manejar solicitudes de correo.
- **Nodemailer**: Para enviar correos electrónicos desde el servidor.
- **Axios**: Para realizar solicitudes HTTP desde el cliente.
- **CORS**: Para manejar políticas de intercambio de recursos en el servidor.

---

## Requisitos Previos

Asegúrate de tener instalados en tu máquina:

- **Node.js** (v16 o superior)
- **npm** o **yarn**
- **Git**

---

## Configuración e Instalación

### **1. Cliente (Frontend)**

1. **Clona el repositorio y accede al directorio del cliente:**
   ```bash
   git clone https://github.com/mjjkk13/portfolio-vite-react.git
   cd portfolio-vite-react/client
   ```

2. **Instala las dependencias necesarias:**
   ```bash
   npm install
   # o
   yarn
   ```

3. **Configura las variables de entorno (opcional):**
   Crea un archivo `.env` en el directorio del cliente con la configuración necesaria. Ejemplo:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Ejecuta el cliente en modo desarrollo:**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

   El cliente estará disponible en `http://localhost:5173`.

---

### **2. Servidor (Backend)**

1. **Accede al directorio del servidor:**
   ```bash
   cd portfolio-vite-react/server
   ```

2. **Instala las dependencias necesarias:**
   ```bash
   npm install
   npm install nodemailer cors axios
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en el directorio del servidor con las siguientes variables:
   ```env
   PORT=5000
   SMTP_HOST=smtp.tu-proveedor-correo.com
   SMTP_PORT=587
   SMTP_USER=tu-correo@example.com
   SMTP_PASS=tu-contraseña
   ```

4. **Configura el middleware y Nodemailer en el servidor:**
   En el archivo principal del servidor (`send-email.js` o similar), asegúrate de incluir lo siguiente:

   ```javascript
   const express = require('express');
   const nodemailer = require('nodemailer');
   const cors = require('cors');

   const app = express();

   // Middleware
   app.use(cors());
   app.use(express.json());

   // Endpoint para enviar correos
   app.post('/send-email', async (req, res) => {
       const { name, email, message } = req.body;

       const transporter = nodemailer.createTransport({
           host: process.env.SMTP_HOST,
           port: process.env.SMTP_PORT,
           auth: {
               user: process.env.SMTP_USER,
               pass: process.env.SMTP_PASS,
           },
       });

       try {
           await transporter.sendMail({
               from: email,
               to: process.env.SMTP_USER,
               subject: `Nuevo mensaje de ${name}`,
               text: message,
           });
           res.status(200).send('Correo enviado correctamente.');
       } catch (error) {
           console.error(error);
           res.status(500).send('Error al enviar el correo.');
       }
   });

   const PORT = process.env.PORT || 5000;
   app.listen(PORT, () => {
       console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
   });
   ```

5. **Inicia el servidor:**
   ```bash
   npm start
   ```

   El servidor estará disponible en `http://localhost:5000`.

---

### **3. Integración Cliente-Servidor**

1. En el cliente, asegúrate de que las solicitudes apunten al backend configurado. Por ejemplo, en el archivo `components/Contact.jsx`:
   ```
   javascript
   import axios from 'axios';

   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

   export const sendEmail = async (formData) => {
       try {
           const response = await axios.post(`${API_URL}/send-email`, formData);
           return response.data;
       } catch (error) {
           console.error('Error al enviar correo:', error);
           throw error;
       }
   };

   ```

2. En el formulario de contacto, utiliza `sendEmail` para enviar los datos al servidor.

---

## Scripts Disponibles

### Cliente:
- `npm run dev`: Inicia el entorno de desarrollo.
- `npm run build`: Genera los archivos de producción.
- `npm run preview`: Previsualiza la aplicación de producción.

### Servidor:
- `npm start`: Inicia el servidor en modo producción.

---

## Despliegue

### Cliente:
- Despliega en servicios como **Netlify** o **Vercel**.

### Servidor:
- Despliega en plataformas como **Render**, **Heroku** o cualquier VPS.

---

## Contribución

1. Haz un fork del proyecto.
2. Crea una nueva rama:
   ```
   bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```
   bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Haz push a tu rama y crea un pull request.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---

¡Gracias por visitar mi portafolio! 😊
