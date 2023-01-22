import React, { useState, useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

const Skills = React.memo(() => { 
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

    console.log('runnuing')
    const option={
      radius: 220,
      maxSpeed: "fast",
      initSpeed: "normal",
      keep: true,
      itemClass: 'tagItems',
      direction: 100
    }

  return ()=>  TagCloud(containerRef.current, texts, option);
  }, []);

  return (
    <section id='skills' className='skills flex p-8 flex-col items-center justify-center'>
      <h2 className='text-white font-bold text-xl md:text-3xl'>Skills</h2>
      <div className="tagCloudWrraper">
        <span ref={containerRef} className='tagcloud'/> 
      </div>
    </section>
  );
});

export default Skills;
