import React from 'react'
import badr from '../../assets/badr.jpg'
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import hand from '../../assets/hand.svg'
import Aos from 'aos';
import "aos/dist/aos.css"

const Hero = () => {
Aos.init()
  return (
    <section className='hero my-20  lg:grid items-center grid-cols-2' >
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000"  className='text-center md:text-left'>
        <h1 className='text-2xl  font-bold leading-10 md:text-6xl '>
          HI, MY NAME IS Badr Ghanbi
          <motion.img whileHover={{ scale: 1.3 }}
            animate={{ rotate: [-40, 40] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='w-6 mx-4 h-8 inline' src={hand} alt='hand' />

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
        <p  className='text-white mt-10 text-sm md:text-xl'>"As a Front-End Developer, I have a solid understanding of HTML, CSS, and JavaScript. I am experienced in using modern frameworks such as React. I am able to create responsive and visually pleasing websites. I am dedicated to ensuring the best user experience. I am a quick learner and able to adapt to new technologies. I am eager to gain more experience  👨‍💻</p>
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