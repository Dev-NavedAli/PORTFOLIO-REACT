import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <section className='bg-zinc-900 max-h-[800px] '>
      <div className='max-w-6xl mx-auto'><br /> 
        <h1 className='text-6xl font-bold text-[#FF7051] mt-8'>Contacts</h1>
        <div className='grid md:grid-cols-[1fr_1fr_1fr] mt-8' >
          <div className='form'> {/* First div */}
            <form className='bg-zinc-900   '>
              <div>
                <p htmlFor="name" className='text-[#FF7051] text-xl font-bold'>Name</p>
                <input type="text" id="name" placeholder='john doe' className='bg-zinc-900  text-white text-lg  rounded-md w-[90%] px-3 py-2  mt-4 border-2 border-[#FF7051]  ' />
              </div>
              <div className='mt-4'>
                <p htmlFor="email" className='text-[#FF7051] text-xl font-bold'>Email</p>
                <input type="email" id="name" placeholder='johndoe@gmail.com' className='bg-zinc-900 text-white text-lg  rounded-md w-[90%] px-3 py-2   mt-4  border-2 border-[#FF7051] ' />
              </div>
              <div className='mt-4'>
                <p name="message" className='text-[#FF7051] text-xl font-bold  ' >Message</p>
                <textarea id='message' rows={6} placeholder='Type your message.....' className='bg-zinc-900 text-white text-xl rounded-md w-[90%] px-3 py-2  mt-4  border-2 border-[#FF7051]' >
                </textarea>
              </div>
              <button className='bg-[#FF7051] rounded-lg border-none w-[100px] h-[40px] text-white font-medium mt-4 mb-2' >Send</button>
            </form>
          </div>
          <div className='hidden md:block'  >     {/* Second div */}
            <div className='md:flex md:flex-col gap-y-8 ml-4 mt-8'>
              <div className='flex items-center  '>
                <div><img src={assets.mail} alt="" /></div>
                <div className='ml-2 text-lg font-bold text-white'><p>nomanali50997@gmail.com</p></div>
              </div>
              <div className='flex items-center'>
                <div><img src={assets.gps} alt="" /></div>
                <div className='ml-3 text-lg font-bold text-white' ><p>Bareilly, India</p></div>
              </div>
              <div className='flex items-center'>
                <div><img src={assets.phone} alt="" /></div>
                <div className='ml-2 text-lg font-bold text-white'><p>+91 8077669812</p></div>
              </div>
            </div>
            <div>
              <div className=" hidden sm:flex gap-8 ml-8 mt-16 text-white/90 mb-8">
                <a href="https://linkedin.com">
                  <i className="fa-brands fa-linkedin transform transition-all duration-500 hover:scale-110" style={{ color: "#FF7051", fontSize: "40px" }} ></i>
                </a>
                <a href="https://github.com">
                  <i className="fa-brands fa-github transform transition-all duration-500 hover:scale-110 " style={{ color: "#FF7051", fontSize: "40px" }} ></i>
                </a>
                <a href="https://blog.com">
                  <i className="fa-brands fa-instagram transform transition-all duration-500 hover:scale-110" style={{ color: "#FF7051", fontSize: "40px" }} ></i>
                </a>
              </div>
            </div>
          </div>
          <div className='hidden md:block' >   {/* Third Div */}
            <div className='md:relative  md:h-full '>
              <div className='h-[150px] w-[150px] absolute top-4 ' ><img src={assets.message} alt="" /></div>
              <div className='h-[150px] w-[150px] absolute  left-12 top-28 '><img src={assets.notes} alt="" /></div>
              <div><img className='h-[350px] w-[350px] absolute top-40 ' src={assets.devices} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
