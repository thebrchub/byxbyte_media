'use client';
import React, { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionVisibility = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionVisibility.set(entry.target.id, entry.intersectionRatio);
        });

        // Find section with highest visibility
        let maxRatio = 0;
        let mostVisibleSection = activeSection;

        sectionVisibility.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        setActiveSection(mostVisibleSection);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0 to 1 in steps of 0.01
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <header className='w-full fixed top-0 z-50 px-6 py-4 bg-black/60 backdrop-blur-md flex items-center justify-between'>
      <div className='flex'>
        <span className='text-2xl font-bold'>Byxbyte Media</span>
      </div>
      <div className='flex items-center gap-10'>
        <ul className='flex gap-10 text-gray-400'>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`hover:text-white duration-300 ${
                  activeSection === item.id ? 'text-orange-400 font-semibold' : ''
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
