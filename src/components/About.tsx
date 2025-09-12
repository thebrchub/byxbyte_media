'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { CheckCircle, Target, Zap, Users, Trophy, Star } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        } else if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
          setIsVisible(false);
          setHasAnimated(false);
        }
      },
      {
        threshold: 0.3,
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

  const features = [
    { icon: <Zap className="w-5 h-5" />, text: "Pro-level Video Editing" },
    { icon: <Target className="w-5 h-5" />, text: "YouTube Strategy & Growth Consulting" },
    { icon: <Star className="w-5 h-5" />, text: "SEO-Optimized Titles, Tags & Descriptions" },
    { icon: <Trophy className="w-5 h-5" />, text: "Custom Thumbnail Design that grabs attention" },
    { icon: <Users className="w-5 h-5" />, text: "Channel audits & content planning to boost reach and retention" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50M+", label: "Views Generated" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section
      id="about"
      className="w-full flex flex-col relative bg-grid-white/[0.05] py-20 min-h-screen"
    >
      {/* Same background styling as Services */}
      <div className="absolute pointer-events-none inset-0 top-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div
        className="h-[50vh] absolute w-full top-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(22,26,66,0) 0%, rgba(0,0,0,1) 85%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              About Byxbyte Media
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl leading-relaxed text-gray-300 mb-16 max-w-4xl"
          >
            <p className="mb-6">
              At <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Byxbyte Media</span>, 
              we believe editing is just the beginning. We help creators, brands, and agencies 
              not only produce great content but also reach the right audience.
            </p>
            <p>
              Whether you're posting a YouTube video, running a brand campaign, or dropping a new music 
              video, our team ensures your content is polished, optimized, and designed to perform.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 w-full max-w-4xl"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* What Makes Us Different Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-4xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              What Makes Us <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Different</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex items-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <p className="ml-4 text-gray-300 font-medium group-hover:text-white transition-colors">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 text-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Start Your Project
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;