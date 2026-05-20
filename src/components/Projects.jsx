const PROJECTS = [
  {
    title: "Portfolio Personal",
    description:
      "Sitio web personal desarrollado con React, Vite y TailwindCSS. Incluye formulario de contacto con Nodemailer desplegado como Serverless Function en Vercel.",
    tech: ["React", "TailwindCSS", "Vite", "Node.js"],
    demoLink: "https://mjjkk13.github.io/portfolio",
    codeLink: "https://github.com/mjjkk13/portfolio",
  },
  {
    title: "Próximamente...",
    description:
      "Estoy trabajando en nuevos proyectos. ¡Visita mi GitHub para ver las novedades!",
    tech: [],
    demoLink: "https://github.com/mjjkk13",
    codeLink: "https://github.com/mjjkk13",
  },
];

const CodePlaceholder = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 text-base-content/10"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Mi trabajo</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Mis Proyectos</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <figure className="bg-base-300/50 h-44 flex items-center justify-center border-b border-base-300">
                <CodePlaceholder />
              </figure>
              <div className="card-body flex-1 flex flex-col p-6">
                <h3 className="card-title text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-base-content/60 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="badge badge-sm badge-outline badge-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-3 mt-5">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm rounded-full flex-1"
                  >
                    Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm rounded-full flex-1"
                  >
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
