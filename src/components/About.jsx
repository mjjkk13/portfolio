const HIGHLIGHTS = ["Python", "JavaScript", "PHP", "React", "Node.js", "MySQL"];

const About = () => {
  return (
    <section id="about" className="py-24 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Quién soy</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-base-content">Sobre Mí</h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">

          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-2xl">
                <img src="./foto.jpeg" alt="Mariana Jiménez" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-72 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/10 rounded-xl -z-10 blur-sm" />
            </div>
          </div>

          <div className="md:col-span-3 space-y-5">
            <p className="text-base-content/80 text-lg leading-relaxed">
              Tecnóloga en Análisis y Desarrollo de Software con experiencia en soporte técnico de primer nivel y desarrollo de soluciones digitales internas. 
              Actualmente me desempeño como Auxiliar Digital en BIMEDCO, brindando soporte a usuarios, automatizando procesos y apoyando el mantenimiento de plataformas web. 
              Conocimientos solidos en JavaScript, PHP, TypeScript, .NET, Node.js, React, SQL Server y MySQL. 
              Pronto inicio estudios universitarios en Ingeniería en Ciencia de Datos (ingreso a 4.o semestre en agosto de 2026).
            </p>
            <p className="text-base-content/80 text-lg leading-relaxed">
              Me apasiona el desarrollo de software y la resolución de problemas complejos. Siempre estoy aprendiendo
              nuevas tecnologías y buscando oportunidades para aplicar y expandir mis habilidades en entornos prácticos.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {HIGHLIGHTS.map((tech) => (
                <span key={tech} className="badge badge-outline badge-primary px-4 py-3 text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a href="./Mariana_Jimenez_CV.pdf" download className="btn btn-primary rounded-full gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar CV
              </a>
              <a
                href="https://github.com/mjjkk13?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-full gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Ver Proyectos
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
