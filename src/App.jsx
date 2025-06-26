import './App.css'
import { Hero, Navbar, Projects, Contact, Footer } from './components'
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
        <Contact />
        <Footer />
        <section className='min-h-screen'></section>
      </div>
    </>
  )
}

export default App
