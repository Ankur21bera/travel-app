import React from 'react'
import './Tour.css'
import gallery_1 from '../../assets/popular-forest.jpg'
import gallery_2 from '../../assets/popular-lake.jpg'
import gallery_3 from '../../assets/popular-mountain.jpg'
import gallery_4 from '../../assets/popular-mountain.jpg'
import { BsArrowBarLeft } from 'react-icons/bs'
const Tour = () => {
  return (
    <div className='tour'>
      <div className='gallery'>
       <img src={gallery_1} alt="" />
       <img src={gallery_2} alt="" />
       <img src={gallery_3} alt="" />
       <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <BsArrowBarLeft/></button>
    </div>
  )
}

export default Tour
