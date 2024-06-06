import React, { useState, useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
const Skills = () => { 
  const containerRef = useRef(null);
  useEffect(() => {
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
      'REACT QUERY',
      "GITHUB",
      "FRAMER MOTION"
    ];

    let option={
      radius: 280,
      maxSpeed: "fast",
      initSpeed: "normal",
      keep: true,
      itemClass: 'tagItems',
      direction: 100
    }
   
     TagCloud(containerRef.current, texts, option);

  }, []);
  console.log('running')
  return (
    <section id='skills' className='skills flex  flex-col items-center justify-center'>
      <h2 className='text-white  text-xl md:text-3xl'>Skills</h2>
      <div className="tagCloudWrraper">
        <span ref={containerRef} className='tagcloud'/> 
      </div>

    </section>
  );
};

export default Skills;
