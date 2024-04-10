import React from 'react';
import '../styles/homepage.css';
import logoImage from '../assets/regaldane-transformed.png';

export default function HomePage() {
  return (
    <div className='home-container'>
      <div className='home-about-section'>
        <div className='title-container'>
          <h3 className='home-title'>OUR MISSION</h3>
          <p className='section-description'>
            We are dedicated to the rescue, rehabilitation and rehoming of
            abandoned, neglected and owner-surrendered Great Danes of all ages.
            We also provide education to the public about the Great Dane breed
            and about responsible pet ownership.
          </p>
        </div>
      </div>
    </div>
  );
}
