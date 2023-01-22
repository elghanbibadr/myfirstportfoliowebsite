import React from 'react'

const Experience = () => {
  return (
    <section className="experience  text-center flex flex-col items-center">
        <h2 className='text-xl text-white p-8 md:text-2xl' >Experience</h2>
        <div className='  p-10 md:w-3/4'>
            <p>2021-2022</p>
            <h3 className='text-white my-4'>Starting</h3>
            <p >I started my first journey in 2021 with HTML and CSS and learned how to build websites using basic HTML, CSS,Sass and Bootstrap. and Also about how to web works In late 2021, I started learning about front-end frameworks such as ReactJS.</p>
        </div>
        <div className='  p-10 md:w-3/4'>
            <p>2022-2023</p>
            <h3 className='text-white my-4'>Right Now</h3>
            <p>
            Right now, I'm working with ReactJS and Redux, trying to learn all I can think about them. I'm also starting to dabble in server-side rendering with Next.js and React Query.
            </p>
        </div>
    </section>
  )
}

export default Experience