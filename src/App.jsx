import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </Router>
  )
}

export default App
