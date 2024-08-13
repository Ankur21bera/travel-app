import React from 'react'
import './Hero.css'
import { FaArrowRight } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure that You Have a better experience to through our agency.</h1>
        <p>
        Our expert travel agents work and guide the various people for their travel plans. So, when you want to take flights from Melbourne to India or any other place in the world, we prepare the custom plan and make further arrangements for you. For more information feel free to get with us connected.
        </p>
        <button className='btn'>Explore Now<FaArrowRight className='icon'/></button>
      </div>
    </div>
  )
}

export default Hero
