const SKILLS = [
  { name: "JavaScript", level: 85, abbr: "JS",  category: "Frontend" },
  { name: "CSS",        level: 85, abbr: "CSS", category: "Frontend" },
  { name: "MySQL",      level: 80, abbr: "SQL", category: "Base de datos" },
  { name: "Python",     level: 60, abbr: "Py",  category: "Backend" },
  { name: "React",      level: 50, abbr: "Re",  category: "Frontend" },
  { name: "Node.js",    level: 50, abbr: "Nd",  category: "Backend" },
  { name: "TailwindCSS",level: 50, abbr: "TW",  category: "Frontend" },
  { name: "PHP",        level: 50, abbr: "PHP", category: "Backend" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Lo que sé</p>
          <h2 className="text-4xl lg:text-5xl font-bold">Mis Habilidades</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="card bg-base-200 border border-base-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="card-body p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-xs font-bold shrink-0">
                    {skill.abbr}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm truncate">{skill.name}</h3>
                    <p className="text-xs text-base-content/40">{skill.category}</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-base-content/40 mb-1.5">
                    <span>Nivel</span>
                    <span>{skill.level}%</span>
                  </div>
                  <progress
                    className="progress progress-primary w-full h-1.5"
                    value={skill.level}
                    max="100"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
