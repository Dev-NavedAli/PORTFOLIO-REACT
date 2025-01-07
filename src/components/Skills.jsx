import React from 'react'
import { assets } from '../assets/assets'

const Skills = () => {
  return (
    <section className='min-h-screen bg-zinc-900'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8' >
        <div className='w-full h-1 bg-[#FF7051] mx-auto'></div>
        <h1 className='text-6xl font-bold text-[#FF7051] mt-8 text-center'>Skills</h1>
      </div>
      <div className="animate-scroll cards flex mt-10">
        <div className="flex flex-shrink-0   justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.html} alt="" />
            <p className='text-center p-2 text-white font-bold mt-4 ' >HTML</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.css} alt="" />
            <p className='text-center p-2 text-white font-bold mt-4 ' >CSS</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.javascript} className='ml-4' alt="" />
            <p className='text-center p-2 text-white font-bold mt-4 ' >JAVASCRIPT</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.bootstrap} className='ml-4' alt="" />
            <p className='text-center p-2 text-white font-bold mt-4  ' >BOOTSTRAP</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.tailwind} alt="" className=' mb-2' />
            <p className='text-center p-2 text-white font-bold ' >TAILWIND</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.react} alt="" />
            <p className='text-center p-2 text-white font-bold  mt-4 ' >REACT</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.git} alt="" />
            <p className='text-center p-2 text-white font-bold mt-4 ' >GIT</p>
          </div>
        </div>
        <div className="flex  flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.github} alt="" />
            <p className='text-center p-2 text-white font-bold mt-4 ' >GITHUB</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.mongodb} alt="" />
            <p className='text-center p-2 text-white font-bold ' >MONGODB</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.mysql} alt="" />
            <p className='text-center p-2 text-white font-bold mt-4 ' >MYSQL</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.node} alt="" />
            <p className='text-center p-2 text-white font-bold mt-4 ' >NODE</p>
          </div>
        </div>
        <div className="flex flex-shrink-0  justify-center items-center  ml-8 card w-[160px] h-[160px] rounded-lg shadow-[0_0_30px_rgba(245,101,57,0.3)] bg-zinc-800 ">
          <div >
            <img src={assets.express} className='w-[65px]'  alt="" />
            <p className='text-center p-2 text-white font-bold mt-4 ' >EXPRESS</p>
          </div>
        </div>
      </div>

      <style>{`
        .animate-scroll {
          display: flex;
          animation: scroll 10s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

    </section>
  )
}

export default Skills