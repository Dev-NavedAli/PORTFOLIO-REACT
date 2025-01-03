const Skills = () => {
  const skills = [
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'React.js', level: 85 },
    { name: 'Next.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'TypeScript', level: 82 },
    { name: 'Tailwind CSS', level: 88 },
  ];

  return (
    <section id="skills" className="py-20 bg-zinc-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Skills</h2>
          <div className="w-20 h-1 bg-[#FF7051] mx-auto"></div>
        </div>

        <div className="relative">
          <div className="skill-track flex animate-skill-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="w-64 flex-shrink-0 bg-zinc-900 border-none mx-4 p-6 rounded-lg"
              >
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-zinc-700">
                      <div
                        style={{ width: `${skill.level}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#FF7051]"
                      ></div>
                    </div>
                  </div>
                  <p className="text-[#FF7051] font-medium">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
