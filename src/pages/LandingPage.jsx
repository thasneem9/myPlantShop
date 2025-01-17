import React from 'react'
import { Link } from 'react-router-dom';

import './landingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
    <div className="background"></div>
    <div className="content">
      <h1>WELCOME TO PLANT NURSERY</h1>
      <p className="about-us">
          At Plant Nursery, we are passionate about transforming spaces into lush, green environments that inspire and rejuvenate. From tiny succulents to towering indoor plants, we offer a curated selection to suit every taste and setting. Our commitment goes beyond just selling plants—we're here to guide you in creating a sustainable and thriving indoor garden.
        </p>
      <Link to="/plants">
        <button className='get-started-button'>Get Started</button>
      </Link>
    </div>
  </div>
  )
}

export default LandingPage