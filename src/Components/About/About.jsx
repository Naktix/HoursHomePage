import React from 'react'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import './About.css'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>Über unser Programm</h3>
        <h2>Wie du hours verwendest</h2>
        <p>Entweder du machst x</p>
        <p>Manchmal hilft auch y</p>
        <p>Definitiv hilft dir dieses Video z</p>
      </div>
    </div>
  )
}

export default About
