import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/gani3.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" width="100%" height="100%"/>
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an expreinced Frontend Developer With Over a decade of professional expertise in the field. Throughout my career, I have had the privileage of collaborating with prestigious organizations,contributing to their sucess and growth.</p>
            <p>My passion for frontend development is not only reflected in my skills, but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
            <div className="about-skills">
              <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>React js</p><hr style={{width:"70%"}}/></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
              <div className="about-skill"><p>Next Js</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>My Sql</p><hr style={{width:"40%"}}/></div>
              <div className="about-skill"><p>MongoDB</p><hr style={{width:"30%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-acheivements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
         <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
         <div className="about-achievement">
          <h1>6+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
