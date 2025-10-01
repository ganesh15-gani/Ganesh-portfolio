import React from 'react';
import './Hero.css';
import profile_img from '../../assets/gani3.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" width="15%" />
      <h1><span>I'm Golla Ganesh,</span> frontend developer based in India </h1>
      <p>I am frontend developer from Qis engg college, India. I have 2 Years of experience.</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
