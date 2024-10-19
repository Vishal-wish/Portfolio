import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Project from './Components/Project'
import Education from './Components/Education'
import Experience from './Components/Experience.jsx'

const App = () => {
  return (
    <div>
     <Navbar/> 
     <Home/>
     <About/>
     <Experience/>
     <Skills/>
     <Project/>
     <Education/>
     <Contact/>
    </div>
  )
}

export default App
