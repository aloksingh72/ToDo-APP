import React from 'react';
import icon from '../assets/icon.png'

const Header = () => {
  return (
    <header className='flex'>
      <h1 className='h1'>To-Do App</h1>
    <img className='img' src={icon} alt="image" />
    </header>
  );
};

export default Header;