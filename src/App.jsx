import About from './components/About'
import Contact from './components/Contact'
import Cube from './components/Cube'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import Tool from './components/Tool'

function App() {

  return (
    <div>
      <div className='min-h-screen relative'>
        <Navbar />
        <Hero />
        <About />
        <Project />
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
