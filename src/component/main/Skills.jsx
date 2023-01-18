import React, { useState, useEffect } from 'react';
import TagCloud from 'TagCloud';

const Skills = () => { 
  const [option, setOption] = useState({
    radius: 200,
    maxSpeed: "fast",
    initSpeed: "normal",
    keep: true,
    itemClass: 'tagItems',
    direction: 100
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700) {
        setOption({ ...option, radius:400});
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('effect 1 ruuning')
    };
  }, [option]);

  useEffect(() => {
    return()=>{
      const container = ".tagcloud";
      const texts = [
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
        "API",
        "GITHUB",
        "FRAMER MOTION"
      ];
      console.log('runung')
  
      TagCloud(container, texts, option);

    }
  }, [handleResize]);

  return (
    <section className='skills flex p-8 flex-col items-center justify-center'>
      <h2 className='text-white font-bold text-xl md:text-3xl'>Skills</h2>
      <div className="tagCloudWrraper">
        <span className='tagcloud'/> 
      </div>
    </section>
  );
}

export default Skills;
