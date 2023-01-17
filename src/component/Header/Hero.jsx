import React from 'react'
import badr  from '../../assets/badr.jpg'
const Hero = () => {
  return (
    <section className='hero my-20 text-center md:grid items-center grid-cols-2' >
      <h1 className='text-3xl font-bold leading-10 md:text-5xl text-left'>
      HI, MY NAME IS
      Ashraf Chowdury.
      I Am A Front-End Developer.
      </h1>
      <div className='w-3/4 mx-auto imgWrraper flex justify-center rounded-md md:w-1/2 '>
        <img className='rounded-full p-8' src={badr} />
      </div>
    </section>

  )
}

export default Hero