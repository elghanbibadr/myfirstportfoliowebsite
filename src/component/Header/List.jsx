import React from 'react'
import home from '../../assets/home.png'
import contactMe from '../../assets/call.png'
import skills from '../../assets/skill.png'
import project from '../../assets/project.png'
const List = (props) => {
  return (
    <ul className={props.className}>
    <li  className={`${props.linkStyle} flex items-center`}>
        <img src={home} className='h-6 w-6' /> 
        <a href="#" className="block px-4 py-2">Home</a>
        </li>
          <li className={`${props.linkStyle} flex items-center`}>
            <img src={project} className='h-6 w-6' />
            <a href="#" className="block px-4 py-2">Projects</a>
          </li>
          <li className={`${props.linkStyle} flex items-center`}>
            <img src={skills} className='h-6 w-6' />
            <a href="#" className="block px-4 py-2">Skills</a>
          </li>
          <li className={`${props.linkStyle} flex items-center`}>
            <img src={contactMe} className='h-6 w-6' />
            <a href="#" className="block px-4 py-2">contact Me</a>
          </li>

    </ul>
  )
}

export default List