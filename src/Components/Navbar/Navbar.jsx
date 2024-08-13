import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/plane.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu-icon.png'
const Navbar = () => {

     const [sticky,setStcky] = useState(false);

     useEffect(()=> {
       window.addEventListener('scroll',()=> {
        window.scrollY > 50 ? setStcky(true) : setStcky(false);
       })
     },[]);

     const [mobileMenu, setMobileMenu] = useState(false);
     const toggleMenu = () => {
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
     }
  return (
    <div>
      <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
       <img src={logo} className='logo' alt="" />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='destinations' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Destination</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
        </ul>
        <img onClick={toggleMenu} src={menu} className='menu-icon' alt="" />
      </nav>
    </div>
  )
}

export default Navbar
