import React, { useState } from 'react';
import './Navbar.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

const Navbar = () => {
  const [isDay, setIsDay] = useState(true);
  return (
    <nav>
      <a href="/">Aniket Jain</a>
      <div>
        <a href="#">Projects</a>
        <a href="#">Astro + Aniket</a>
        <a href="#">About</a>
        <img src={isDay ? sun : moon} alt='Toggle day/night' onClick={() => setIsDay(!isDay)} />
      </div>
    </nav>
  );
};

export default Navbar;
