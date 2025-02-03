import React from 'react'

import About from './components/About'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Project'
import Contact from './components/Contact'
import Education from './components/Education'
import { ToastContainer, toast } from 'react-toastify'

const App = () => {
  return (
    <>
      <ToastContainer />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
