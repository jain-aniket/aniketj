import React from 'react';
import './Splash.css';
import ButtonSolid from './ButtonSolid';

const Splash = () => {
  return (
    <section className='splash'>
      <h1>Aniket Jain</h1>
      <p>Passionate about computer science, astrophysics, and the realms of coding and data science. My portfolio is a collection of diverse projects, highlighting expertise in machine learning and AI, particularly through the implementation of CNNs and LLMs. Explore the intersection of my interests and accomplishments on this platform.</p>
      <ButtonSolid text='Astro + Aniket' linkto='#' />
    </section>
  );
};

export default Splash;
