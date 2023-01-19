import React from 'react'
const ProjectCard = (props) => {
  return (
    <div className=' p-4 flex flex-col  mx-auto gap bg-secondColor text-white w-3/4  m-4'>
     <img className='w-full h-1/2' src={props.src} />
     <h3 className='text-xl my-6'>{props.name}</h3>
     <p className='my-8'>{props.desc}</p>
     <div>
        <ul className='flex  justify-between'>{props.technologie.map(tech=>{
            return <li className='bg-regalBlue p-2'>{tech}</li>
          })}</ul>
          <div className="links flex justify-between mt-4">
            <a className='' href={props.href}>View</a>
            <a className='' href={props.href}>Code</a>
            </div>
     </div>
    </div>
  )
}

export default ProjectCard