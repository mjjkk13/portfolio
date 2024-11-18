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
      service: 'gmail',
      auth: {
        user: 'marianajimenezv2006@gmail.com',
        pass: 'twctsncdzzsxtedh', // Utiliza una contraseña de aplicación si usas Gmail
      },
    });

    await transporter.sendMail({
      from: 'marianajimenezv2006@gmail.com',
      to: 'marianajimenezv2006@gmail.com',
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${text}`,
    });

    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.error("Error sending Message:", error);
    res.status(500).send("Error sending Message");
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});