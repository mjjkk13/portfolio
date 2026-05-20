const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              ¡Hola! Soy
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Mariana
              </span>
              <br />
              <span className="text-base-content">Jiménez Villa</span>
            </h1>
            <p className="text-base-content/60 text-lg sm:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Desarrolladora Full Stack apasionada por crear soluciones innovadoras y experiencias digitales únicas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#projects" className="btn btn-primary rounded-full px-8 gap-2">
                Ver Proyectos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="btn btn-outline rounded-full px-8">
                Contáctame
              </a>
            </div>
          </div>

          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-base-100 shadow-2xl">
                <img
                  src="./foto.jpg"
                  alt="Mariana Jiménez Villa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 bg-primary text-primary-content text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Full Stack Dev
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
