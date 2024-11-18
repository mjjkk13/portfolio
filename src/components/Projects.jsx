const Projects = () => {
    const projects = [
      {
        title: "Proyecto 1",
        description: "Descripción del proyecto 1",
        image: "/path-to-project1-image.jpg",
        tech: ["React", "Node.js", "MongoDB"],
        demoLink: "#",
        codeLink: "#"
      },
      // Añade más proyectos aquí
    ]
  
    return (
      <section id="projects" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Mis Proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card bg-base-200 shadow-xl">
                <figure>
                  <img src={project.image} alt={project.title} />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tech.map((tech, i) => (
                      <div key={i} className="badge badge-primary">{tech}</div>
                    ))}
                  </div>
                  <div className="card-actions justify-end">
                    <a href={project.demoLink} className="btn btn-primary btn-sm">Demo</a>
                    <a href={project.codeLink} className="btn btn-outline btn-sm">Código</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects