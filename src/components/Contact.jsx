import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const Contact = () => {

  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    name: "",
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({ ...emailData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5173/send-email", emailData);
      Swal.fire({
      icon: 'success',
      title: 'Correo enviado',
      text: response.data.message,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Error al enviar el correo',
      });
    }
  };

    return (
      <section id="contact" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contáctame</h2>
          <div className="max-w-md mx-auto">
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input type="text" name="name" value={emailData.name} onChange={handleChange} className="input input-bordered w-full" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" value={emailData.email} onChange={handleChange}  className="input input-bordered w-full" />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Asunto</span>
                </label>
                <input type="text" name="subject" value={emailData.subject} onChange={handleChange} className="input input-bordered w-full" />
              </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mensaje</span>
                </label>
                <textarea name="text" value={emailData.text} onChange={handleChange} className="textarea textarea-bordered h-32"></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>
    )
  }
  
  export default Contact