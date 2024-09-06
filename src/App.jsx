import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
  <>
    <div className='w-full lg:w-[80%] mx-auto'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
      <Footer />
  </>
  )
}

export default App