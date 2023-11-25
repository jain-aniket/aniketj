import React from 'react';
import './Navbar.css';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import { useTheme } from '../ThemeContext';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav>
      <a className='hoverUnderline' href='/'>Aniket Jain</a>
      <div>
        <a className='hoverUnderline' href='#'>Projects</a>
        <a className='hoverUnderline' href='#'>Astro + Aniket</a>
        <a className='hoverUnderline' href='#'>About</a>
        <img src={theme === 'palette1' ? sun : moon} alt='Toggle day/night' onClick={() => setTheme(theme === 'palette1' ? 'palette2' : 'palette1')} />
      </div>
    </nav>
  );
};

export default Navbar;
