import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>Aniket Jain</p>
      <a href="https://www.github.com/jain-aniket" target="_blank" rel="noopener noreferrer">
        <img src="/github.svg" alt="GitHub" />
        <span>Github</span>
      </a>
      <a href="mailto:me.aniket.jain@gmail.com">
        <img src="/email.svg" alt="Email" />
        <span>Email</span>
      </a>
    </footer>
  );
};

export default Footer;
