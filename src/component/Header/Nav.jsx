import React from 'react'
import { useState } from 'react';
import Menu from './icons/Menu';
import SunIcon from './icons/SunIcon';
import CloseIcon from './icons/CloseIcon';

const Nav = () => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  const handleCloseClick = () => {
    setMenuOpen(false);
  }

  return (
    <nav className="flex items-center justify-between p-4  text-white">
      <h4 className='myName'>Badr Gh</h4>
      {menuOpen && (
         <div  className="absolute m-6  inset-0 bg-gray-800 px-10 py-4  md:hidden">
          <div className="flex justify-between">
            <h4 className='myName'>Badr Gh</h4>
            <CloseIcon onClick={handleCloseClick}  />
          </div>
          <ul >
            <li><a href="#" className="block px-4 py-2">Link 1</a></li>
            <li><a href="#" className="block px-4 py-2">Link 1</a></li>
            <li><a href="#" className="block px-4 py-2">Link 1</a></li>
            <li><a href="#" className="block px-4 py-2">Link 1</a></li>
           
          </ul>
        </div>
      )}
      <div className="flex items-center md:hidden">
        <Menu  onClick={handleMenuClick} />
       <SunIcon />
      </div>
      <ul  className="hidden md:flex">
        <li><a href="#" className="px-4">Link 1</a></li>
        <li><a href="#" className="px-4">Link 1</a></li>
        <li><a href="#" className="px-4">Link 1</a></li>
        <li><a href="#" className="px-4">Link 1</a></li>
       
      </ul>
    </nav>
  );
};


export default Nav