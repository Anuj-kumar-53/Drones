import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Videos from './components/Videos'
import Cards from './components/Cards'
import Fotter from './components/Fotter'

function App() {
  return (
    
    <div className=' '>
    <div className='container'>
      <Navbar className="fixed" />
      <Hero />
      </div>
      <Section />
      <Videos />
      <Cards />
      <Fotter />
    </div>
  )
}

export default App