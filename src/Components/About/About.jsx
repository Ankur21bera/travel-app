import React from 'react'
import './About.css'
import { FaPlay } from 'react-icons/fa'
import image from '../../assets/popular-lake.jpg'
const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={image} className='about-img' alt="" />
        <FaPlay className='play-icon'/>
      </div>

      <div className='about-right'>
        <h3>About Our Tour Destination</h3>
        <h2>The Tour We Will Provide It Will be Memorable.</h2>
        <p>Rich with history and natural beauty, Jordan has an impressive selection of crusader castles, archaeological sites and beautiful desert scenery</p>
        <p>Enjoy round-the-clock support – in person, over the phone and online. This is made possible by our well-travelled staff and unrivalled network of offices in destinations across the world.</p>
      </div>
    </div>
  )
}

export default About
