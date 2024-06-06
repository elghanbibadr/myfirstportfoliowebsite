import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"
import githubIcon from '../../assets/github.svg'
import vercelIcon from '../../assets/shuttle.png'

const ProjectCard = (props) => {
  AOS.init();

  {console.log(props.index % 2 === 0,props.index)}

  const rowPlace=props.index === 0 ? 'row-start-1' : props.index === 1 ? 'row-start-2' : props.index === 2 ? 'row-start-3' : props.index === 3  ? 'row-start-4': 'row-start-5'
  return (
    <>
    <div className={`p-4 md:px-6 projectImg-wrraper md:h-[400px] w-full md:w-[90%] ${props.index % 2 === 0 ? 'col-start-1  ' :'col-start-2'}     flex justify-center items-center`}>
      <img className='rounded-md  mx-auto' src={props.src} /></div>

      <div  className={`text-left   ${props.index % 2 === 0 ? 'col-start-2 ' :`col-start-1 ${rowPlace}`}`}>
     <div className="p-4">
       <h3 className='text-xl font-medium my-6 md:text-3xl'>{props.name}</h3>
       <p className='text-sm  my-8 md:text-xl lg:text-2xl leading-[30px] lg:w-[87%]  text-left'>{props.desc}</p>
       <div>
          <ul className='flex  gap-4  '>{props.technologie.map(tech=>{
            console.log(tech.icon)
              return <li className='flex p-2 rounded-md bg-regalBlue items-center gap-2'>
                <span className=' text-xs hidden sm:inline-flex   text-white'>{tech.name}</span>
                <img className='h-5 ' src={tech.icon} alt="tech icon" />
                </li>
            })}</ul>
            <div className="links flex gap-5 mt-5 mb-14">
              <a target='_blank' href={props.githubLink}><img  className='h-5 hover:scale-110 duration-200' src={githubIcon} alt="" /></a>
              <a target='_blank' href={props.demoLink}><img className='h-5 hover:scale-110 duration-200' src={vercelIcon} alt="" /></a>
              {/* <a  className='projectLinkInfo' target='_blank' href={props.demoLink}>View</a>
              <a className='projectLinkInfo' target='_blank' href={props.githubLink}>Code</a> */}
              </div>
       </div>
     </div>
    </div>
    </>
  
  )
}

export default ProjectCard