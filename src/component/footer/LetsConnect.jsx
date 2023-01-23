import React from 'react'
import github from "../../assets/icon-github.svg"
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/linkedin.png"
import { motion } from 'framer-motion'
const LetsConnect = () => {
  return (
    <div className='flex flex-col p-8 items-center justify-center'>
        <h2 className='text-white my-12  text-xl md:text-3xl'>Let's Connect</h2>
        <ul className='flex mt-10 justify-between items-center'>
            <motion.li  whileHover={{ scale: 1.1 }}><a target='_blank' href='https://github.com/elghanbibadr'>
            <img className='transform scale-75 md:scale-100 h-10 w-10 mx-10' src={github} alt='github icon' />
            </a></motion.li>
            <motion.li  whileHover={{ scale: 1.1 }}><a target='_blank' href='https://www.linkedin.com/in/badr-ghanbi-612a63208/'>
            <img className='transform scale-75 md:scale-100 h-10 w-10 mx-10' src={linkedin} alt='linkedin icon' />
            </a></motion.li>
            <motion.li  whileHover={{ scale: 1.1 }}><a target='_blank' href='https://twitter.com/GhanbiBadr'>
            <img className='transform scale-75 md:scale-100 h-10 w-10 mx-10' src={twitter} alt='twitter icon' />
            </a></motion.li>
        </ul>
   </div>
  )
}

export default LetsConnect