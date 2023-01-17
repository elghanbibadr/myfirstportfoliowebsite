import React from 'react'
import home from '../../assets/home.png'


const List = (props) => {
  return (
    <ul className={props.className}>
    <li className='flex items-center'><img src={home} className='h-6 w-6' /> <a href="#" className="block px-4 py-2">Home</a></li>
          <li className='flex items-center'>
            <img src={home} className='h-6 w-6' />
            <a href="#" className="block px-4 py-2">Projects</a>
          </li>
          <li className='flex items-center'>
            <img src={home} className='h-6 w-6' />
            <a href="#" className="block px-4 py-2">Blogs</a>
          </li>
          <li className='flex items-center'>
            <img src={home} className='h-6 w-6' />
            <a href="#" className="block px-4 py-2">About Me</a>
          </li>

    </ul>
  )
}

export default List