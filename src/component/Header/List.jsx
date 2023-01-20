import React from 'react'
import home from '../../assets/home.png'
import contactMe from '../../assets/call.png'
import skills from '../../assets/skill.png'
import project from '../../assets/project.png'
import { Link } from 'react-scroll'
const List = (props) => {
  return (
    <ul className={props.className}>
    <li  className={`${props.linkStyle} flex items-center`}>
        <img src={home} className='h-6 w-6' /> 
        <Link spy={true} smooth={true} offset={50} duration={500} to='home'  className="block px-4 py-2">Home</Link>
        </li>
          <li className={`${props.linkStyle} flex items-center`}>
            <img src={project} className='h-6 w-6' />
            <Link spy={true} smooth={true} offset={50} duration={500} to='project'  className="block px-4 py-2">Projects</Link>
          </li>
          <li className={`${props.linkStyle} flex items-center`}>
            <img src={skills} className='h-6 w-6' />
            <Link spy={true} smooth={true} offset={50} duration={500} to='skills'  className="block px-4 py-2">Skills</Link>
          </li>
          <li className={`${props.linkStyle} flex items-center`}>
            <img src={contactMe} className='h-6 w-6' />
            <Link spy={true} smooth={true} offset={50} duration={500} to='contact'  className="block px-4 py-2">contact me</Link>
          </li>

    </ul>
  )
}

export default List