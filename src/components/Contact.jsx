import React, { useState } from 'react';
import axios from 'axios';
import { assets } from '../assets/assets';
import {toast } from 'react-toastify';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (name && email && message) {
        const { data } = await axios.post(import.meta.env.VITE_BACKEND_URL + '/mail/send-mail', { name, email, message });
        if (data.success) {
          toast.success("Mail sent Succesfully")
          setName(""); 
          setEmail("");
          setMessage("");
        }
      }
    } catch (error) {
      console.log(error);
      alert("Failed to send message. Please try again."); // Show an error message to the user
    }
  };

  return (
    <section className='bg-zinc-900 max-h-[800px]'>
      <div className='max-w-6xl mx-auto'>
        <br />
        <h1 className='text-6xl font-bold text-[#2f1009] mt-8'>Contacts</h1>
        <div className='grid md:grid-cols-[1fr_1fr_1fr] mt-8'>
          <div className='form'>
            <form onSubmit={onSubmitHandler} className='bg-zinc-900'>
              <div>
                <p htmlFor="name" className='text-[#FF7051] text-xl font-bold'>Name</p>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  name="name"
                  id="name"
                  placeholder='john doe'
                  className='bg-zinc-900 text-white text-lg rounded-md w-[90%] px-3 py-2 mt-4 border-2 border-[#FF7051]'
                  value={name}
                />
              </div>
              <div className='mt-4'>
                <p htmlFor="email" className='text-[#FF7051] text-xl font-bold'>Email</p>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name='email'
                  id="email"
                  placeholder='johndoe@gmail.com'
                  className='bg-zinc-900 text-white text-lg rounded-md w-[90%] px-3 py-2 mt-4 border-2 border-[#FF7051]'
                  value={email}
                />
              </div>
              <div className='mt-4'>
                <p name="message" className='text-[#FF7051] text-xl font-bold'>Message</p>
                <textarea
                  name='message'
                  onChange={(e) => setMessage(e.target.value)}
                  id='message'
                  rows={6}
                  placeholder='Type your message.....'
                  className='bg-zinc-900 text-white text-xl rounded-md w-[90%] px-3 py-2 mt-4 border-2 border-[#FF7051]'
                  value={message}
                ></textarea>
              </div>
              <button className='bg-[#FF7051] rounded-lg border-none w-[100px] h-[40px] text-white font-medium mt-4 mb-2'>Send</button>
            </form>
          </div>
          <div className='hidden md:block'>
            <div className='md:flex md:flex-col gap-y-8 ml-4 mt-8'>
              <div className='flex items-center'>
                <div><img src={assets.mail} alt="" /></div>
                <div className='ml-2 text-lg font-bold text-white'><p>nomanali50997@gmail.com</p></div>
              </div>
              <div className='flex items-center'>
                <div><img src={assets.gps} alt="" /></div>
                <div className='ml-3 text-lg font-bold text-white'><p>Bareilly, India</p></div>
              </div>
              <div className='flex items-center'>
                <div><img src={assets.phone} alt="" /></div>
                <div className='ml-2 text-lg font-bold text-white'><p>+91 8077669812</p></div>
              </div>
            </div>
            <div>
              <div className="hidden sm:flex gap-8 ml-8 mt-16 text-white/90 mb-8">
                <a href="https://linkedin.com">
                  <i className="fa-brands fa-linkedin transform transition-all duration-500 hover:scale-110" style={{ color: "#FF7051", fontSize: "40px" }}></i>
                </a>
                <a href="https://github.com">
                  <i className="fa-brands fa-github transform transition-all duration-500 hover:scale-110" style={{ color: "#FF7051", fontSize: "40px" }}></i>
                </a>
                <a href="https://blog.com">
                  <i className="fa-brands fa-instagram transform transition-all duration-500 hover:scale-110" style={{ color: "#FF7051", fontSize: "40px" }}></i>
                </a>
              </div>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='md:relative md:h-full'>
              <div className='h-[150px] w-[150px] absolute top-4'><img src={assets.message} alt="" /></div>
              <div className='h-[150px] w-[150px] absolute left-12 top-28'><img src={assets.notes} alt="" /></div>
              <div><img className='h-[350px] w-[350px] absolute top-40' src={assets.devices} alt="" /></div>
            </div>
          </div>
        </div>
      </div>
      <p className='text-xl font-bold text-zinc-200 text-center'>
        Made with <span><img src={assets.heart} className='inline' alt="" /></span> by Naved Ali Khan
      </p>
    </section>
  );
};

export default Contact;