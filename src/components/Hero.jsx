import { Github, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-[35%] bg-[#F56539] p-6 flex flex-col justify-between">
        <div className="mt-10">
          <h1 style={{ fontFamily: 'Pacifico, cursive' }} className="text-6xl  text-black">
            naved khan
          </h1>
        </div>
        <div className="flex gap-6 text-white/90 mb-8">
          <a href="https://linkedin.com" className="hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com" className="hover:text-white transition-colors">
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://blog.com" className="hover:text-white transition-colors">
            <FileText className="w-6 h-6" />
            <span className="sr-only">Blog</span>
          </a>
        </div>
      </div>

      <div className="absolute left-[30%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-40 h-40 lg:w-56 lg:h-56">
          <div className= " h-[420px] w-[420px] absolute -top-20 rounded-full overflow-hidden  shadow-lg">
            <img
              src="https://avatars.githubusercontent.com/u/113710115?v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />  
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[65%] bg-zinc-900 p-6 flex flex-col justify-center">
        <div className="max-w-2xl mx-auto lg:ml-24 text-left pt-24 lg:pt-0">
          <div className="space-y-4 ml-[30%] ">
            <p className="text-zinc-400">Web Developer</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Portfolio Name
            </h1>
            <p className="text-zinc-400 max-w-lg">
              A confident, passionate, determined, and self-taught individual, seeking various opportunities to explore and research in the area of computer science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="/cv.pdf" className="border border-[#F56539] text-[#FF7051] px-4 py-2 rounded hover:bg-[#F56539] hover:text-white transition">
                Download CV
              </a>
              <a href="#contact" className="bg-[#F56539] text-white px-4 py-2 rounded hover:bg-[#F56539]/90 transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
