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
      "GITHUB",
      "FRAMER MOTION"
    ];

    let option={
      radius: 200,
      maxSpeed: "fast",
      initSpeed: "normal",
      keep: true,
      itemClass: 'tagItems',
      direction: 100
    }
   return()=> TagCloud(containerRef.current, texts, option);
  }, []);
  return (
    <section id='skills' className='skills flex p-8 flex-col items-center justify-center'>
      <h2 className='text-white  text-xl md:text-3xl'>Skills</h2>
      <div className="tagCloudWrraper">
        <span ref={containerRef} className='tagcloud'/> 
      </div>

    </section>
  );
};

export default Skills;
