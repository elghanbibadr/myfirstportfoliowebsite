import React from 'react'
import badr from '../../assets/badr.jpg'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
const Hero = () => {

  return (
    <section className='hero my-20 text-center md:grid items-center grid-cols-2' >
      <h1 className='text-2xl font-bold leading-10 md:text-5xl text-left'>
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
      <motion.div
        drag
        dragConstraints={{
          top: -10,
          left: -10,
          right: 10,
          bottom: 10,
        }}
        className='w-3/4 mt-10 mx-auto imgWrraper flex justify-center rounded-md md:w-1/2 '>
        <img className='rounded-full p-8' src={badr} />
      </motion.div>
    </section>

  )
}

export default Hero;