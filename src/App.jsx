import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Services from './components/Services'

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
     <About />
    <Services />
    <Contact />
    <Footer />
    </>
  )
}

export default App