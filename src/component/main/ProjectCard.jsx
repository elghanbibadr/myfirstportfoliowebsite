import React from 'react'
const ProjectCard = (props) => {
  return (
    <div className='  flex flex-col   mx-auto  bg-secondColor text-white    m-4 md:w-3/4 '>
     <div className='p-4 projectImg-wrraper h-80'><img className='rounded-md h-full  mx-auto' src={props.src} /></div>
     <div className="p-4">
       <h3 className='text-xl font-medium my-6 md:text-2xl'>{props.name}</h3>
       <p className='text-sm  my-8 md:text-xl text-left'>{props.desc}</p>
       <div>
          <ul className='flex flex-wrap gap-2  justify-between md:flex-nowrap'>{props.technologie.map(tech=>{
              return <li className='bg-regalBlue text-sm   p-2 md:text-xl'>{tech}</li>
            })}</ul>
            <div className="links flex justify-between mt-4">
              <a  className='projectLinkInfo' target='_blank' href={props.demoLink}>View</a>
              <a className='projectLinkInfo' target='_blank' href={props.githubLink}>Code</a>
                
              </div>
       </div>
     </div>
    </div>
  )
}

export default ProjectCard