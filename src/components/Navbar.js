import React, { useState } from 'react';
import './Navbar.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

const Navbar = () => {
  const [isDay, setIsDay] = useState(true);
  return (
    <nav>
      <a className="hoverUnderline" href="/">Aniket Jain</a>
      <div>
        <a className="hoverUnderline" href="#">Projects</a>
        <a className="hoverUnderline" href="#">Astro + Aniket</a>
        <a className="hoverUnderline" href="#">About</a>
        <img src={isDay ? sun : moon} alt='Toggle day/night' onClick={() => setIsDay(!isDay)} />
      </div>
    </nav>
  );
};

export default Navbar;
