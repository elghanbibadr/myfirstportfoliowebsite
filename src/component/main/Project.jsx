import React from 'react'
import ProjectCard from './ProjectCard'
import { data } from './Data'
const Project = () => {
  return (
    <section className='text-center '>
    <h2 className='text-white text-2xl md:text-3xl my-20'>Projects</h2>
    <div className='lg:grid  grid-cols-2'>
        {data.map(({name,src,technologie,desc,demoLink,githubLink},index)=>{
        return <ProjectCard key={index} demoLink={demoLink} githubLink={githubLink} name={name} src={src} technologie={technologie} desc={desc} />
        })}
    </div>
    </section>
  )
}

export default Project