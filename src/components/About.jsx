const About = () => {
    return (
      <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Sobre Mí</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img src="./foto.jpg" alt="foto" className="w-45 h-40 rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-lg mb-4">
          Aprendiz en formación del programa Tecnólogo en análisis y desarrollo de
          software del SENA. Con conocimientos sólidos en programación y
          desarrollo web, poseo experiencia en lenguajes de programación como
          Python, PHP y JavaScript. Además, dispongo una certificación en Técnico en programación de software.
          </p>
        
          <p className="text-lg mb-4">
          Estoy interesada en el desarrollo de software y la resolución de problemas
          complejos mediante la programación. Me apasiona aprender nuevas
          tecnologías y lenguajes de programación. Busco oportunidades para
          aplicar y expandir mis habilidades en un entorno práctico.
          </p>  
          <div className="flex justify-center md:justify-start gap-4">
          <a href='./cv.pdf' download className="btn btn-secondary">Descargar CV</a>
          <button href="https://github.com/mjjkk13?tab=repositories" className="btn btn-secondary">Ver Proyectos</button>
          </div>
        </div>
        </div>
      </div>
      </section>
    )
  }
  
  export default About