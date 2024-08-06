import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', ()=> {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    }, [])

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li> 
          <Link to='hero' smooth={true} offset={0} duration={500}>Hauptmenü</Link>
        </li>
        <li>
          <Link to='program' smooth={true} offset={-360} duration={500}>Angebote</Link>
        </li>
        <li>
          <Link to='about' smooth={true} offset={-240} duration={500}>Anleitung</Link>
        </li>
        <li>
          <Link to='campus' smooth={true} offset={-340} duration={500}>Vorschau</Link>
        </li>
        <li>
          <Link to='testimonials' smooth={true} offset={-340} duration={500}>Was Kunden sagen</Link>
        </li>
        <li>
            <Link to='contact' smooth={true} offset={-360} duration={500} className='btn'>Kontakt</Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
