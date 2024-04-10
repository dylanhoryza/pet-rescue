import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logoImage from '../assets/regaldane.jpeg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.classList.contains('menu-toggle')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState); // Toggle isOpen
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
       {/* <div className="header-image">
      <img src={logoImage} alt="logo" className="logo-header"/>
      </div> */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isOpen ? 'open' : ''}`}></div>
      </div>
      {isOpen && (
        <ul className="menu-items"     style={{
          display: isOpen ? 'block' : 'none',
          position: 'absolute',
          top: '50px',
          left: 0,
          width: '100%',
          backgroundColor: '#333',
        }} ref={menuRef}>
          <li className='background-nav-container'><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li className='background-nav-container'>
        <span className='menu-span'>Videos</span>
        <ul className="dropdown-menu">
          <li><Link to="/videos/music" onClick={closeMenu}>Music Videos</Link></li>
          <li><Link to="/videos/events" onClick={closeMenu}>Events</Link></li>
          <li><Link to="/videos/lifestyle" onClick={closeMenu}>Lifestyle</Link></li>
          <li><Link to="/videos/commercials" onClick={closeMenu}>Commercials</Link></li>
        </ul>
      </li>
          <li className='background-nav-container'><Link to="/photos" onClick={closeMenu}>Photos</Link></li>
          <li className='background-nav-container'><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li className='background-nav-container'><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      )}
     
      <ul className="desktop-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
        <span>Adopt a Great Dane
        <ul className="dropdown-menu">
        <li><Link to="/adopt/danes">Our Adoptable Danes</Link></li>
        <li><Link to="/adopt/process">Adoption Process</Link></li>
        <li><Link to="/adopt/form">Adoption Application Form</Link></li>
        <li><Link to="/adopt/foreverhomes">Forever Homes Found</Link></li>
        </ul>
        </span>
       </li>
       <li>
        <span>How Can You Help?
        <ul className="dropdown-menu">
        <li><Link to="/help/donate">Donate</Link></li>
        <li><Link to="/help/sponsor">Sponsor a Great Dane</Link></li>
        <li><Link to="/help/foster">Foster</Link></li>
        <li><Link to="/help/volunteer">Volunteer</Link></li>
        <li><Link to="/help/stores">Shop At These Stores</Link></li>
        </ul>
        </span>
       </li>
        <li><Link to="/surrender">Surrender a Dane</Link></li>
        <li><Link to="/education">Great Dane Education</Link></li>
        <li><Link to="/rainbowbridge">Rainbow Bridge</Link></li>
        <li><Link to="/referrals">Referrals</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;