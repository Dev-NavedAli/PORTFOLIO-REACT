import React from 'react'
import { assets } from '../assets/assets'

const Project = () => {
  return (
    <section className='bg-zinc-900'>
      <div className='max-w-6xl mx-auto '> <br />
        <div>
          <h1 className='text-center text-6xl font-bold text-[#FF7051]'>Projects</h1>
        </div>
        <div className="flex flex-row items-center justify-around mt-8 ">

            
          <div className='bg-[#FF7051] h-[360px] w-[304px] rounded-lg'>
            <p className='font-bold text-2xl text-white mt-4 text-center' >ECOMMERCE-APP</p>
            <img src={assets.ecommerce} className='mt-8' alt="" />
            <div className='flex items-center  justify-around '>
              <button  ><img src={assets.play} className='w-12  ' /></button>
              <button  ><img src={assets.code} className='w-12 border-2  border-white rounded-full ' /></button>
            </div>
          </div>

          <div className='bg-[#FF7051] h-[360px] w-[304px] rounded-lg'>
          <p className='font-bold text-2xl text-white mt-4 text-center' >DOCTOR-APPOINTMENT</p>
            <img src={assets.doctor} className='w-[300px] h-[200px] mt-8' alt="" srcset="" />
            <div className='flex items-center  justify-around '>
              <button  ><img src={assets.play} className='w-12  ' /></button>
              <button  ><img src={assets.code} className='w-12 border-2  border-white rounded-full ' /></button>
            </div>
          </div>
          <div className='bg-[#FF7051] h-[360px] w-[304px] rounded-lg'>
          <p className='font-bold text-2xl text-white mt-4 text-center' >WANDERLUST</p>
            <img src={assets.hospital} alt="" className='mt-8' />
            <div className='flex items-center  justify-around '>
              <button  ><img src={assets.play} className='w-12  ' /></button>
              <button  ><img src={assets.code} className='w-12 border-2  border-white rounded-full ' /></button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Project
