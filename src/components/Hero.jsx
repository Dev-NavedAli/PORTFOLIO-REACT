import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {

  const postRef = useRef();
  const nameRef = useRef();

  const tl = gsap.timeline();

  useGSAP(()=>{
    tl.from(postRef.current,{
      y:30,
      opacity:0,
      delay:0.8,
      duration:0.5,
    })
    tl.from(nameRef.current,{
      y:30,
      opacity:0,
      duration:0.5,
    })
    tl.from(".desc",{
      y:30,
      opacity:0,
      duration:0.8,
    })
  })

  return (
    <section id="home" className="sm:h-[600px]  flex flex-col lg:flex-row md:flex-row  sm:flex-row relative">
      <div className="lg:w-[35%] md:w-[35%] bg-[#F56539] p-6 flex flex-col justify-between">
        <div className=" mt-20 sm:mt-10">
          <h1 className="name  sm:-mt-12 text-4xl lg:text-5xl md:text-4xl sm:text-4xl  text-black">
            Naved khan
          </h1>
        </div>
        <div className=" hidden sm:flex gap-8 ml-6 text-white/90 mb-8">
          <a href="https://linkedin.com">
            <i className="fa-brands fa-linkedin transform transition-all duration-500 hover:scale-110" style={{ color: "black", fontSize: "40px" }} ></i>
          </a>

          <a href="https://github.com">
            <i className="fa-brands fa-github transform transition-all duration-500 hover:scale-110 " style={{ color: "black", fontSize: "40px" }} ></i>
          </a>
          <a href="https://blog.com">
            <i className="fa-brands fa-instagram transform transition-all duration-500 hover:scale-110" style={{ color: "black", fontSize: "40px" }} ></i>
          </a>
        </div>
      </div>

      <div className="absolute lg:left-[30%] sm:left-[35%] md:left-[30%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative w-40 h-40 lg:w-56 lg:h-56 md:w-56 md:h-56 sm:w-56 sm:h-56 lg:bottom-0 lg:left-0 md:bottom-0 md:left-0  sm:bottom-0 sm:left-0 bottom-40 left-44 ">
          <div className="md:h-[250px] md:w-[250px] lg:h-[350px] lg:w-[350px]   absolute  md:-left-3 md:-top-20 rounded-full sm:-top-[-15px]   overflow-hidden  shadow-lg">
            <img
              src="https://avatars.githubusercontent.com/u/113710115?v=4"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[65%] md:w-[65%] bg-zinc-900 p-6 flex flex-col justify-center items-end">
        <div className="max-w-2xl mx-auto lg:ml-24 text-left pt-24 lg:pt-0">
          <div   className="space-y-4 lg:ml-[40%] md:ml-[40%] sm:ml-[25%] xl:ml-[40%]  ">
            <p ref={postRef} className="text-white lg:text-2xl">Full Stack Web Developer</p>
            <h1 ref={nameRef}  className="text-4xl md:text-4xl font-bold text-white w-full ">Naved Ali Khan</h1>
            <p className="desc text-zinc-400 lg:max-w-lg text-lg xl:text-lg xl:max-w-lg">
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

  )
};

export default Hero;






