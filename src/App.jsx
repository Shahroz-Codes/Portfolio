import { useState } from 'react'

import './App.css'
import { Hero, Navbar } from './components'

function App() {

  return (
    <>
    <div 
    className="container mx-auto max-w-7xl"
    >
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default App
