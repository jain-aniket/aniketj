import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a href="/">Aniket Jain</a>
      <div>
        <a href="#">Projects</a>
        <a href="#">Astro + Aniket</a>
        <a href="#">About</a>
      </div>
    </nav>
  );
};

export default Navbar;
