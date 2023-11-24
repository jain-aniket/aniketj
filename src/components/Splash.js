import React from 'react';
import './Splash.css';
import ButtonSolid from './ButtonSolid';

const Splash = () => {
  return (
    <section className='splash'>
      <h1>Welcome to my portfolio!</h1>
      <p>This is a paragraph</p>
      <ButtonSolid text='Astro + Aniket' linkto='#' />
    </section>
  );
};

export default Splash;
