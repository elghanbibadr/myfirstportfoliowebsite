import React, { useState, useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';

const Skills = () => {
  const containerRef = useRef(null);
  const tagCloudInstanceRef = useRef(null);

  const texts = [
    "HTML",
    "CSS",
    "JavaScript",
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

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const radius = screenWidth <= 800 ? 180 : 380;

      const options = {
        radius: radius,
        maxSpeed: "fast",
        initSpeed: "normal",
        keep: true,
        itemClass: 'tagItems',
        direction: 100
      };

      // Clear previous TagCloud instance before creating a new one
      if (tagCloudInstanceRef.current) {
        tagCloudInstanceRef.current.destroy();
      }

      // Create new TagCloud instance
      tagCloudInstanceRef.current = TagCloud(containerRef.current, texts, options);
    };

    // Set up the initial TagCloud
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      // Destroy TagCloud instance on component unmount
      if (tagCloudInstanceRef.current) {
        tagCloudInstanceRef.current.destroy();
      }
    };
  }, [texts]);

  return (
    <section id='skills' className='skills flex flex-col items-center justify-center'>
      <h2 className='text-white text-xl md:text-3xl'>Skills</h2>
      <div className="tagCloudWrapper">
        <span ref={containerRef} className='tagcloud' />
      </div>
    </section>
  );
};

export default Skills;
