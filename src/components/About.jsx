import React from  "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const About = () => {

const divRef = useRef();

useGSAP(()=>{
  gsap.from(divRef.current,{
    y:100,
    opacity:0,
    delay:1,
    duration:1,
  })
})

  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center flex  flex-col items-start">
          <div className="w-full h-1 bg-[#FF7051] mx-auto"></div>
          <h2 className="text-6xl font-bold text-[#FF7051] mt-8 mb-4">Who I Am</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-row space-y-6 text-zinc-400  text-xl sm:text-2xl">
            <div ref={divRef} className="mt-4">
              <p>
                Hello! I'm a passionate Full Stack web developer with a strong foundation in modern web technologies.
                My journey in web development started with self-learning and has evolved into creating
                professional, responsive, and user-friendly websites.
              </p>
              <p>
                I specialize in front-end development and Backend Development using MERN, with a keen eye for
                design and user experience. I'm also proficient in Database technologies and always
                eager to learn new skills.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing my knowledge through technical blog posts.
              </p>
            </div>
          </div>
          <img
                src="https://sunidhi-singh.netlify.app/static/media/orangeTheme-girl.d0ad58bec646941d6d69f4117c2796d9.svg"
                alt=""
                className="w-96 h-96 mt-8 sm:ml-4 xl:ml-20"
              />


        </div>
      </div>
    </section>
  );
};

export default About;
