'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Ensure the animation plays only once
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
          setHasAnimated(false); // Reset the animation when scrolling up
        }
      },
      {
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div id="about" className='relative flex flex-col w-full h-screen p-12 lg:p-24 justify-center items-center bg-black z-10'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className='flex z-50 flex-col w-full text-xl leading-[2] md:text-3xl max-w-4xl md:leading-[2]'
      >
        At Byxbyte Media, we believe editing is just the beginning. We help creators, brands, and agencies
        not only produce great contentbut also reach the right audience.
        Whether youre posting a YouTube video, running a brand campaign, or dropping a new music
        video, our team ensures your content is polished, optimized, and designed to perform.
        <h1></h1>What Makes Us Different:
        <h1></h1>- Pro-level Video Editing
        <h1></h1>- YouTube Strategy & Growth Consulting
        <h1></h1>- SEO-Optimized Titles, Tags & Descriptions
        <h1></h1>- Custom Thumbnail Design that grabs attention
        <h1></h1>- Channel audits & content planning to boost reach and retention. 
      </motion.div>
    </div>
  );
};

export default About;
