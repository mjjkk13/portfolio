// api/send-email.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, text } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: process.env.SMTP_HOST,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS, // Utiliza una contraseña de aplicación si usas Gmail
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.SMTP_USER,
        subject,
        text: `Name: ${name}\nEmail: ${email}\n\n${text}`,
      });

      res.status(200).send("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
}
