import React from 'react'
import './App.scss'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Destinations from './Components/Destinations/Destinations'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Tour from './Components/Tour/Tour'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subtitle='Our Tour' title='What We Offer'/>
      <Destinations/>
      <About/>
      <Title subtitle='Gallery' title='Our Tour Photos'/>
      <Tour/>
      <Title subtitle='Testimoinals' title='what people says it'/>
     <Testimonials/>
     <Title subtitle='Contact Us' title='Get In Touch'/>
     <Contact/>
     <Footer/>
      </div>
    </div>
  )
}

export default App
