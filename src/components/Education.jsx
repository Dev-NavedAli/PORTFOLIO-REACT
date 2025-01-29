import React, { useRef } from "react"
import { assets } from "../assets/assets.js"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Education = () => {

    const divRef = useRef()

   useGSAP(()=>{
    gsap.from(divRef.current,{
        y: 100,
        opacity: 0, 
        delay: 0.5,
        duration: 1,
        scrollTrigger:{
            scroller: "body",
            trigger: divRef.current,
            start: "top 50%",
            end: "bottom 30%",
            markers:true,
        }
    })
   })
    return (
        <div className="bg-zinc-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="w-full  h-1 bg-[#FF7051] mx-auto"></div>
                <h1 className="text-2xl sm:text-6xl text-[#FF7051] font-bold mt-4">Education</h1>
                <div  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
                    <div ref={divRef}  className="flex flex-col items-start gap-x-4 gap-y-8 mt-4 mb-8">
                        <div  className=" bg-[#f565394d] hover:bg-[#FF7051] transition duration-500 ease-in-out rounded-3xl  h-[110px] w-[90%] md:w-[100%] group ">
                            <div className="grid grid-cols-[1fr_3fr] items-center overflow-hidden ">
                                <div className="mt-4 ml-4 bg-[#dc654a] rounded-full w-12 h-12 sm:w-16 sm:h-16 ">
                                    <img className="w-16 h-16" src={assets.graduationIcon} alt="" />
                                </div>
                                <div className="mt-4 group ">
                                    <p className="text-base font-bold group-hover:text-white text-[#FF7051] ">2015-2016</p>
                                    <p className="text-sm sm:text-xl font-bold  text-white" >10TH Grade</p>
                                    <p className="text-sm sm:text-md font-bold text-white" >Sacred Heart Convent School</p>
                                </div>
                            </div>
                        </div>
                        <div className="two bg-[#f565394d] hover:bg-[#FF7051] transition duration-500 ease-in-out  rounded-3xl  h-[110px] w-[90%] md:w-[100%] group">
                            <div className="grid grid-cols-[1fr_3fr] items-center overflow-hidden ">
                                <div className="mt-4 ml-4 bg-[#dc654a] rounded-full w-12 h-12 sm:w-16 sm:h-16">
                                    <img className="w-16 h-16" src={assets.graduationIcon} alt="" />
                                </div>
                                <div className="mt-4  ">
                                    <p className="text-base font-bold group-hover:text-white text-[#FF7051]">2017-2018</p>
                                    <p className="text-sm sm:text-xl font-bold  text-white " >12TH Grade</p>
                                    <p className="text-sm sm:text-md font-bold text-white" >Shri Ram Swaroop Inter College</p>
                                </div>
                            </div>
                        </div>
                        <div className="three bg-[#f565394d] hover:bg-[#FF7051] transition duration-500 ease-in-out  rounded-3xl  h-[110px] w-[90%] md:w-[100%] group">
                            <div className="grid grid-cols-[1fr_3fr] items-center overflow-hidden ">
                                <div className="mt-4 ml-4 bg-[#dc654a] rounded-full w-12 h-12 sm:w-16 sm:h-16">
                                    <img className="w-16 h-16" src={assets.graduationIcon} alt="" />
                                </div>
                                <div className="mt-4 ">
                                    <p className="text-base font-bold group-hover:text-white text-[#FF7051]">2020-2022</p>
                                    <p className="text-sm sm:text-xl font-bold  text-white " >Bachleor of Computer Apllication</p>
                                    <p className="text-sm sm:text-md font-bold text-white" >Bareilly College Bareilly</p>
                                </div>
                            </div>
                        </div>
                        <div className="four bg-[#f565394d] hover:bg-[#FF7051] transition duration-500 ease-in-out  rounded-3xl  h-[128px] w-[90%] md:w-[100%]  group">
                            <div className="grid grid-cols-[1fr_3fr] items-center overflow-hidden ">
                                <div className="mt-4 ml-4 bg-[#dc654a] rounded-full w-12 h-12 sm:w-16 sm:h-16 ">
                                    <img className="w-16 h-16" src={assets.graduationIcon} alt="" />
                                </div>
                                <div className="mt-4 ">
                                    <p className="text-base font-bold group-hover:text-white text-[#FF7051]">2022-2024</p>
                                    <p className="text-sm sm:text-xl font-bold  text-white " >Master of Computer Application</p>
                                    <p className="text-sm sm:text-md font-bold text-white" >Future institute of Engineering and technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="w-96 h-96 sm:ml-6 mb-8"
                            src="https://sunidhi-singh.netlify.app/static/media/eduOrange.c61dcfc316d381d83890e24aabcbfb95.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
