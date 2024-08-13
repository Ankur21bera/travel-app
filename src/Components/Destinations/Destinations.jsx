import React from 'react'
import './Destinations.css'
import img from '../../assets/home-beach.jpg'
import img2 from '../../assets/popular-lake.jpg'
import img3 from '../../assets/home-mountain.jpg'
const Destinations = () => {
  return (
    <div className='destinations'>
      <div className='destination'>
        <img src={img} alt="" />
        <div className='caption'>
            <p>Beach Island</p>
        </div>
      </div>
      <div className='destination'>
        <img src={img2} alt="" />
        <div className='caption'>
            <p>Explore Island</p>
        </div>
      </div>
      <div className='destination'>
        <img src={img3} alt="" />
        <div className='caption'>
            <p>Mountain Tour</p>
        </div>
      </div>
    </div>
  )
}

export default Destinations
