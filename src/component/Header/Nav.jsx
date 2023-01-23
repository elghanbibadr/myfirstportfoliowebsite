import React from 'react'
import { useState } from 'react';
import Menu from './icons/Menu';
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
    <nav className="flex  pt-8 items-center justify-between  text-white md:relative ">
      <h4 className=' myName'>Badr Ghanbi</h4>
      {menuOpen && (
        <div className="absolute m-6 z-50 inset-0 bg-secondColor px-10 py-4  md:hidden">
          <div className="flex justify-between">
            <h4 className='myName'>Badr Gh</h4>
            <CloseIcon onClick={handleCloseClick} />
          </div>
          <List linkStyle='mt-8' className='listForMobile  mt-10' />
        </div>
      )}
      <div className="flex items-center">
        <Menu  className='w-6 h-4 md:hidden' onClick={handleMenuClick} />
      </div>
      <List linkStyle='lg:mx-6' className="listForDesktop hidden md:flex" />

    </nav>
  );
};


export default Nav