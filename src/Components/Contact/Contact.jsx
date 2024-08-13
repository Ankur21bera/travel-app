import React from 'react'
import './Contact.css'
import { TiMessages } from 'react-icons/ti'
import { CiMail } from 'react-icons/ci'
import { FaAddressCard, FaPhone } from 'react-icons/fa'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ab7c34f7-42d6-4790-acbc-9a64988978ca");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }   
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send Us a Message<TiMessages className='img'/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our travel-app community.</p>
        <ul>
            <li><CiMail className='icon'/>Travel-app86@gmail.com</li>
            <li><FaPhone className='icon'/>1800-200-2345</li>
            <li><FaAddressCard className='icon'/>66 delhi street <br />Delhi,India</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Phone Number' />
            <label>Write Your Message Here</label>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Enter Your Message Here' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
