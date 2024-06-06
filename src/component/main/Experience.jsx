import React from 'react'
import Aos from 'aos'
 import "aos/dist/aos.css"

const Experience = () => {
  Aos.init()
  return (
    <section className="experience  text-center flex flex-col items-center">
        <h2 className='text-xl text-white p-8 md:text-3xl' >Experience</h2>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className='  p-10 md:w-3/4'>
            <p>2021-2022</p>
            <h3 className='text-white my-4'>Starting</h3>
            <p >I started my first journey in 2021 with HTML and CSS and learned how to build websites using basic HTML, CSS,Sass and Bootstrap. and Also about how to web works In late 2021, I started learning about front-end frameworks such as ReactJS.</p>
        </div>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className='  p-10 md:w-3/4'>
            <p>2023-2024</p>
            <h3 className='text-white my-4'>Right Now</h3>
            <p>Right now, I'm leveraging my extensive freelancing experience as a front-end developer on Upwork. I specialize in creating front-end interfaces, taking projects from design to live websites. I have successfully completed 38 different projects, accumulating over 238 hours of work and earning more than $6,000.Right now

            </p>
        </div>
    </section>
  )
}

export default Experience