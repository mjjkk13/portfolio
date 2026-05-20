import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const INITIAL_FORM = { name: "", email: "", subject: "", text: "" };

const Contact = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/send-email", form);
      Swal.fire({
        icon: "success",
        title: "¡Mensaje enviado!",
        text: response.data.message,
        background: "#1e293b",
        color: "#e2e8f0",
        confirmButtonColor: "#7c3aed",
      });
      setForm(INITIAL_FORM);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        background: "#1e293b",
        color: "#e2e8f0",
        confirmButtonColor: "#7c3aed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">¿Hablamos?</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Contáctame</h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          <div className="lg:col-span-2 space-y-8">
            <p className="text-base-content/70 text-lg leading-relaxed">
              ¿Tienes un proyecto en mente o simplemente quieres conectar? No dudes en escribirme.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-base-content/40 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-base-content font-medium">marianajimenezv2006@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-base-content/40 uppercase tracking-wider mb-0.5">Ubicación</p>
                  <p className="text-base-content font-medium">Colombia</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/mjjkk13"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm gap-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mariana-jiménez-villa-114a63253"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm gap-2 rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card bg-base-200 border border-base-300 shadow-xl">
              <div className="card-body p-6 sm:p-8">
                <form onSubmit={sendEmail} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label className="label pb-1.5">
                        <span className="label-text font-medium text-sm">Nombre</span>
                      </label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange}
                        required placeholder="Tu nombre"
                        className="input input-bordered bg-base-100 text-sm"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label pb-1.5">
                        <span className="label-text font-medium text-sm">Email</span>
                      </label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        required placeholder="tu@email.com"
                        className="input input-bordered bg-base-100 text-sm"
                      />
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label pb-1.5">
                      <span className="label-text font-medium text-sm">Asunto</span>
                    </label>
                    <input
                      type="text" name="subject" value={form.subject} onChange={handleChange}
                      required placeholder="Asunto del mensaje"
                      className="input input-bordered bg-base-100 text-sm"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label pb-1.5">
                      <span className="label-text font-medium text-sm">Mensaje</span>
                    </label>
                    <textarea
                      name="text" value={form.text} onChange={handleChange}
                      required placeholder="Escribe tu mensaje aquí..."
                      className="textarea textarea-bordered bg-base-100 h-36 resize-none text-sm"
                    />
                  </div>

                  <button type="submit" disabled={loading} className="btn btn-primary w-full rounded-full gap-2">
                    {loading ? (
                      <>
                        <span className="loading loading-spinner loading-sm" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
