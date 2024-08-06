import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Guten Morgen *Benutzername*</h1>
        <p>Sind sie bereit loszulegen?</p>
        <button className='btn'>Los gehts!<img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
