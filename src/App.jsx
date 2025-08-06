// ...existing code...
import React, { Suspense, lazy } from 'react'
import './App.css'
import { Navbar, Contact, Footer } from './components'
const Hero = lazy(() => import('./components/Hero/Hero'))
const Projects = lazy(() => import('./components/Projects/Projects'))
import About from './components/About/About'

function App() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <Navbar />
          <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Projects />
        </Suspense>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
// ...existing code...