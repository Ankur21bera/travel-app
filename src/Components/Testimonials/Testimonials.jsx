import React, { useRef } from 'react'
import './Testimonials.css'
import icon_1 from '../../assets/next-icon.png'
import icon_2 from '../../assets/back-icon.png'
import user_1 from '../../assets/client-1.jpg'
import user_2 from '../../assets/client-2.jpg'
import user_3 from '../../assets/client-3.jpg'
import user_4 from '../../assets/explore-perfil.png'
const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
       if(tx > -50) {
        tx -= 25;
       }
       slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if(tx < -50) {
            tx -= 25;
           }
           slider.current.style.transform = `translateX(${tx}%)`
    }
  return (
    <div className='testimonials'>
      <img onClick={slideForward} src={icon_1} alt=""className='next-btn' />
      <img onClick={slideBackward} src={icon_2} className='back-btn' alt="" />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Travel-app, india</span>
                        </div>
                    </div>
                    <p>
                    Choosing to Tour-package  at travel-app was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to trip have truly exceeded my expectations.
                    </p>
                </div>
            </li>
             <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Travel-app, india</span>
                        </div>
                    </div>
                    <p>
                    Choosing to Tour-package  at travel-app was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to trip have truly exceeded my expectations.
                    </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Travel-app, india</span>
                        </div>
                    </div>
                    <p>
                    Choosing to Tour-package  at travel-app was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to trip have truly exceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Travel-app, india</span>
                        </div>
                    </div>
                    <p>
                    Choosing to Tour-package  at travel-app was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to trip have truly exceeded my expectations.
                    </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
