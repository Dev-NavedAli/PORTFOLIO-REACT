import React from 'react'

import About from './components/About'
// import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Project'
import Contact from './components/Contact'
import Education from './components/Education'

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Education/>
      <Skills/>
      <Projects/>
     <Contact/>
    </>
  )
}

export default App
