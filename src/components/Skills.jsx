const Skills = () => {
    const skills = [
      { name: "React", level: 50 },
      { name: "JavaScript", level: 85 },
      { name: "Node.js", level: 50 },
      { name: "TailwindCSS", level: 50 },
      { name: "MySQL", level: 80 },
      { name: "CSS", level: 85},
      { name: "PHP", level: 50}
    ]
  
    return (
      <section id="skills" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Mis Habilidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body">
                  <h3 className="card-title">{skill.name}</h3>
                  <progress 
                    className="progress progress-primary w-full" 
                    value={skill.level} 
                    max="100"
                  ></progress>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills