import React from 'react'
import { useState } from 'react';
import menuLogo from '../../assets/bars-solid.svg'
import sun from '../../assets/sun-solid.svg'
import close from '../../assets/x-solid.svg'
const Nav = () => {
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
      <div className="hidden md:flex">
        <a href="#" className="px-4">Link 1</a>
        <a href="#" className="px-4">Link 2</a>
        <a href="#" className="px-4">Link 3</a>
        <a href="#" className="px-4">Link 4</a>
      </div>
      <div className="flex md:hidden">
        <img src={menuLogo} alt="Menu" className="w-6 cursor-pointer" onClick={handleMenuClick}/>
        <img src={sun}  alt="Moon" className="w-6 cursor-pointer" onClick={handleMenuClick}/>
      </div>
      {menuOpen && (
        <div className="absolute  left-0 bottom-0 top-0 right-0 bg-gray-800 p-10 md:hidden">
          <div className="flex justify-between">
            <h4 className='myName'>Badr Gh</h4>
            <img src={close} alt="Close" className="w-8 cursor-pointer" onClick={handleCloseClick}/>
          </div>
          <ul>
            <li><a href="#" className="block px-4 py-2">Link 1</a></li>
            <li><a href="#" className="block px-4 py-2">Link 1</a></li>
            <li><a href="#" className="block px-4 py-2">Link 1</a></li>
            <li><a href="#" className="block px-4 py-2">Link 1</a></li>
           
          </ul>
        </div>
      )}
    </nav>
  );
};


export default Nav