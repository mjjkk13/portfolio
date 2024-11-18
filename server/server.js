import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "marianajimenezv2006@gmail.com",
        pass: "twctsncdzzsxtedh", // Utiliza una contraseña de aplicación si usas Gmail
      },
    });

    await transporter.sendMail({
      from: "marianajimenezv2006@gmail.com",
      to: "marianajimenezv2006@gmail.com",
      subject,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${text}`,
    });

    res.status(200).send({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error al enviar el correo" });
  }
});

app.listen(5000, () => {
  console.log("Servidor ejecutándose en http://localhost:5173");
});
