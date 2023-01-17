import React from 'react'
import badr from '../../assets/badr.jpg'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
const Hero = () => {

  return (
    <section className='hero my-20  md:grid items-center grid-cols-2' >
      <div  className='text-center md:text-left'>
        <h1 className='text-2xl  font-bold leading-10 md:text-6xl '>
          HI, MY NAME IS Badr Ghanbi.
          <Typewriter
            options={{
              strings: [' I Am A Front-End Developer. '],
              pauseFor: 3000,
              autoStart: true,
              loop: true,
              delay: 200,
              deleteSpeed: 300,
              cursorClassName: 'hidden',
            }}
          />
        </h1>
        <p className='text-white mt-10 text-sm md:text-xl'>"As a Front-End Developer, I have a solid understanding of HTML, CSS, and JavaScript. I am experienced in using modern frameworks such as React. I am able to create responsive and visually pleasing websites. I am dedicated to ensuring the best user experience. I am a quick learner and able to adapt to new technologies. I am eager to gain more experience  👨‍💻</p>
      </div>
      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        className='w-3/4 mt-10 mx-auto imgWrraper flex justify-center rounded-md lg:w-3/5 '>
        <img className='rounded-full p-8' src={badr} />
      </motion.div>
    </section>

  )
}

export default Hero;