import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import logoImage from '../assets/regaldane-transformed.png'

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
        <li><Link to="/">HOME</Link></li>
        <li>
        <span>ABOUT
        <ul className="dropdown-menu">
        <li><Link to="/about/us">ABOUT US</Link></li>
        <li><Link to="/about/events">EVENTS</Link></li>
        <li><Link to="/about/rainbowbridge">RAINBOW BRIDGE</Link></li>
        </ul>
        </span>
       </li>
        <li>
        <span>ADOPT
        <ul className="dropdown-menu">
        <li><Link to="/adopt/danes">OUR ADOPTABLE DANES</Link></li>
        <li><Link to="/adopt/process">ADOPTION PROCESS</Link></li>
        <li><Link to="/adopt/form">ADOPTION APPLICATION</Link></li>
        <li><Link to="/adopt/foreverhomes">FOREVER HOMES FOUND</Link></li>
        </ul>
        </span>
       </li>
       <li>
        <span>GET INVOLVED
        <ul className="dropdown-menu">
        <li><Link to="/help/donate">DONATE</Link></li>
        <li><Link to="/help/sponsor">SPONSOR A GREAT DANE</Link></li>
        <li><Link to="/help/foster">FOSTER</Link></li>
        <li><Link to="/help/volunteer">VOLUNTEER</Link></li>
        <li><Link to="/help/stores">SHOP AT THESE STORES</Link></li>
        </ul>
        </span>
       </li>
       <div className="header-image">
      <img src={logoImage} alt="logo" className="logo-header"/>
      </div>
        <li><Link to="/surrender">SURRENDER</Link></li>
        <li><Link to="/education">EDUCATION</Link></li>
        <li><Link to="/referrals">RESOURCES</Link></li>
        <li><Link to="/contact">CONTACT US</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;