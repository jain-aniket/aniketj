import React from 'react';
import './ButtonSolid.css';

const ButtonSolid = ({ text, linkto }) => {
  return (
    <a href={linkto} className='button-solid'>
      {text}
    </a>
  );
};

export default ButtonSolid;
