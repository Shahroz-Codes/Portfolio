import { useState } from 'react'

import './App.css'
import { Hero, Navbar, Projects } from './components'
import About from './components/About/About'

function App() {

  return (
    <>
    <div 
    className="container mx-auto max-w-7xl"
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <section className='min-h-screen'></section>
    </div>
    </>
  )
}

export default App
