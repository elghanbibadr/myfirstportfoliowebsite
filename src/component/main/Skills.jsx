import React, { useEffect } from 'react'
import TagCloud from 'TagCloud'

const Skills = () => {
    useEffect(()=>{
        return()=>{
            const container=".tagcloud";
            const texts=[
                "HTML",
                "CSS",
                "Javascirpt",
                "GIT",
                "BOOTSTRAP",
                "REACT",
                "TYPESCRIPT",
                "FIREBASE",
                "CYPRESS",
                "NEXT JS",
                "TAILWIND",
                "SASS",
            ];
            const option={
                radius:240,
                maxSpeed:"fast",
                initSpeed:"normal",
                keep:true,
                itemClass:'tagItems',
                direction:100
            };
            TagCloud(container,texts,option)
        }
    },[])


  return (
    <section className='skills flex p-8 flex-col items-center justify-center'>
        <h2 className='text-white font-bold text-xl md:text-3xl'>Skills</h2>
        <div className="tagCloudWrraper ">
            <span className='tagcloud'></span>
            </div>
    </section>
  )
}

export default Skills