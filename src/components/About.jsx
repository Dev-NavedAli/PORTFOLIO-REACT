const About = ({ stats }) => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#FF7051] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-zinc-400">
            <p>
              Hello! I'm a passionate web developer with a strong foundation in modern web technologies. 
              My journey in web development started with self-learning and has evolved into creating 
              professional, responsive, and user-friendly websites.
            </p>
            <p>
              I specialize in front-end development using React.js and Next.js, with a keen eye for 
              design and user experience. I'm also proficient in back-end technologies and always 
              eager to learn new skills.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge through technical blog posts.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-800 rounded-lg">
                <h3 className="text-2xl font-bold text-[#FF7051] mb-2">Name</h3>
                <p className="text-zinc-400">Value</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
