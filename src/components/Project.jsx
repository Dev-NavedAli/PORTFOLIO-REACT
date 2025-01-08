import React from 'react'
import { assets } from '../assets/assets'

const Project = () => {
  return (
    <section className='bg-zinc-900'>
      <div className='max-w-6xl mx-auto '> <br />
        <div>
          <h1 className='text-center text-6xl font-bold text-[#FF7051]'>Projects</h1>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row items-center justify-around mt-8 ">
          <div className='bg-[#FF7051] h-[360px] w-[304px] rounded-lg'>
            <p className='font-bold text-2xl text-white mt-4 text-center' >ECOMMERCE-APP</p>
            <img src={assets.ecommerce} className='mt-8' alt="" />
            <div className='flex items-center  justify-around '>
              <a href="https://github.com/Dev-NavedAli/ECOMMERCE"><img src={assets.play} className='w-12  transform transition-all duration-500 hover:scale-110 ' /></a>
              <a href="https://ecommerce-frontend-eight-xi.vercel.app/"><img src={assets.code} className='w-12 border-2  border-white rounded-full transform transition-all duration-500 hover:scale-110 ' /></a>
            </div>
          </div>

          <div className='bg-[#FF7051] h-[360px] w-[304px] rounded-lg'>
            <p className='font-bold text-2xl text-white mt-4 text-center' >DOCTOR-APPOINTMENT</p>
            <img src={assets.doctor} className='w-[300px] h-[200px] mt-8' alt="" srcset="" />
            <div className='flex items-center  justify-around '>
              <a href="https://github.com/Dev-NavedAli/Prescripto"><img src={assets.play} className='w-12 transform transition-all duration-500 hover:scale-110  ' /></a>
              <a href="https://prescripto-frontend-psi-beige.vercel.app"><img src={assets.code} className='w-12 border-2  border-white rounded-full transform transition-all duration-500 hover:scale-110 ' /></a>
            </div>
          </div>
          <div className='bg-[#FF7051] h-[360px] w-[304px] rounded-lg'>
            <p className='font-bold text-2xl text-white mt-4 text-center' >WANDERLUST</p>
            <img src={assets.hospital} alt="" className='mt-8' />
            <div className='flex items-center  justify-around '>
              <a href="https://major-project-45rq.onrender.com/listings"><img src={assets.play} className='w-12  transform transition-all duration-500 hover:scale-110' /></a>
              <a href="https://github.com/Dev-NavedAli/Wanderlust"><img src={assets.code} className='w-12 border-2 border-white rounded-full transform transition-all duration-500 hover:scale-110'/></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Project
