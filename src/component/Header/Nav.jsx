import React from 'react'
import { useState } from 'react';
import Menu from './icons/Menu';
import SunIcon from './icons/SunIcon';
import CloseIcon from './icons/CloseIcon';
import List from './List';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  }

  const handleCloseClick = () => {
    setMenuOpen(false);
  }

  return (
    <nav className="flex items-center justify-between   text-white">
      <h4 className='myName'>Badr Gh</h4>
      {menuOpen && (
        <div className="absolute m-6  inset-0 bg-gray-800 px-10 py-4  md:hidden">
          <div className="flex justify-between">
            <h4 className='myName'>Badr Gh</h4>
            <CloseIcon onClick={handleCloseClick} />
          </div>
          <List linkStyle='mt-8' className='listForMobile mt-10' />
        </div>
      )}
      <div className="flex items-center md:hidden">
        <Menu onClick={handleMenuClick} />
        <SunIcon />
      </div>
      <List linkStyle='lg:ml-8' className="listForDesktop hidden md:flex" />

    </nav>
  );
};


export default Nav