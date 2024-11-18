import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'


function App() {
  
  return (
    <>
    <Router basename='/portfolio'>
      <div className='min-h-screen bg-base-100'>
        <Navbar/>
        <main>
          <Routes>
           <Route path="/" element={
            <>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            </>
           } />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
