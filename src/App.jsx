import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Serviceme/Service'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Content />
      <Contact />
      <Footer />
    </>
  )
}

export default App
