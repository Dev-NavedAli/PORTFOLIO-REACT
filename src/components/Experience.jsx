const Experience = () => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Corp',
      period: '2022 - Present',
      description: 'Led the frontend development team in creating modern web applications using React and Next.js.',
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed responsive websites and web applications for various clients using modern technologies.',
    },
    {
      title: 'Junior Developer',
      company: 'Startup Inc',
      period: '2019 - 2020',
      description: 'Started my journey as a web developer, working on various frontend projects.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-[#FF7051] mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-lg shadow-md p-6 border border-transparent hover:border-[#FF7051] transition"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-[#FF7051]">{exp.company}</p>
                  <p className="text-zinc-400 text-sm">{exp.period}</p>
                </div>
                <p className="text-zinc-400 flex-1">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
