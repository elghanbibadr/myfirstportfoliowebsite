import React from 'react'
import ProjectCard from './ProjectCard'
import { data } from './Data'
import ta from '../../assets/supabase.svg'
const Project = () => {

  return (
    <section id="project" className='text-center '>
    <h2 className='text-white text-2xl md:text-5xl mt-20 mb-32'>Projects</h2>
    <div className='lg:grid gap-y-28 gap-x-10 grid-cols-2'>
        {data.map(({name,src,technologie,desc,demoLink,githubLink},index)=>{
          return <ProjectCard fadeDirection={ index % 2 === 0 ? "zoom-in"  : "zoom-in-up"} key={index} index={index} demoLink={demoLink} githubLink={githubLink} name={name} src={src} technologie={technologie} desc={desc} />
        })}
    </div>
    </section>
  )
}

export default Project