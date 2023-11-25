import React from 'react';
import './Navbar.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav>
      <Link className='hoverUnderline' to='/'>Aniket Jain</Link>
      <div>
        <Link className='hoverUnderline' to='/projects'>Projects</Link>
        <Link className='hoverUnderline' to='/astro'>Astro + Aniket</Link>
        <Link className='hoverUnderline' to='/about'>About</Link>
        <img src={theme === 'palette1' ? sun : moon} alt='Toggle day/night' onClick={() => setTheme(theme === 'palette1' ? 'palette2' : 'palette1')} />
      </div>
    </nav>
  );
};

export default Navbar;
