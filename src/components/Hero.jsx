const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-[35%] bg-[#F56539] p-6 flex flex-col justify-between">
        <div className="mt-10">
          <h1  className="name text-6xl  text-black">
            naved khan
          </h1>
        </div>
        <div className="flex gap-8 ml-6 text-white/90 mb-8">
          <a href="https://linkedin.com">
          <i className="fa-brands fa-linkedin transform transition-all duration-500 hover:scale-110" style={{color:"black", fontSize:"40px" }} ></i>
          </a>
          
          <a href="https://github.com">
          <i className="fa-brands fa-github transform transition-all duration-500 hover:scale-110 " style={{color:"black", fontSize:"40px" }} ></i>
          </a>
          <a href="https://blog.com">
          <i className="fa-brands fa-instagram transform transition-all duration-500 hover:scale-110" style={{color:"black", fontSize:"40px" }} ></i>
          </a>
        </div>
      </div>

      <div className="absolute left-[30%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-40 h-40 lg:w-56 lg:h-56">
          <div className= " h-[420px] w-[420px] absolute -left-3 -top-20 rounded-full overflow-hidden  shadow-lg">
            <img
              src="https://avatars.githubusercontent.com/u/113710115?v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />  
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[65%] bg-zinc-900 p-6 flex flex-col justify-center items-end">
        <div className="max-w-2xl mx-auto lg:ml-24 text-left pt-24 lg:pt-0">
          <div className="space-y-4 ml-[50%] w-full ">
            <p className="text-white">Full Stack Web Developer</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Naved Ali Khan</h1>
            <p className="text-zinc-400 max-w-lg text-xl">
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
