'use client';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export function Footer() {
  const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const handleMouseEnter = (item: HTMLElement) => {
      const textInitial = item.querySelector('.initial');
      const textHover = item.querySelector('.hover');
      gsap.to(textInitial, {
        yPercent: -100,
        perspective: 1000,
        rotationX: 90,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.to(textHover, {
        yPercent: 0,
        perspective: 1000,
        rotationX: 0,
        duration: 1,
        ease: 'power4.out',
      });
    };

    const handleMouseLeave = (item: HTMLElement) => {
      const textInitial = item.querySelector('.initial');
      const textHover = item.querySelector('.hover');
      gsap.to(textInitial, {
        yPercent: 0,
        perspective: 1000,
        rotationX: 0,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.to(textHover, {
        yPercent: 100,
        perspective: 1000,
        rotationX: -90,
        duration: 1,
        ease: 'power4.out',
      });
    };

    const addEventListeners = (item: HTMLElement | null) => {
      if (!item) return;
      const textHover = item.querySelector('.hover');
      gsap.set(textHover, { yPercent: 100, perspective: 1000, rotationX: -90 });

      const enterHandler = () => handleMouseEnter(item);
      const leaveHandler = () => handleMouseLeave(item);

      item.addEventListener('mouseenter', enterHandler);
      item.addEventListener('mouseleave', leaveHandler);

      (item as any).__enterHandler = enterHandler;
      (item as any).__leaveHandler = leaveHandler;
    };

    const removeEventListeners = (item: HTMLElement | null) => {
      if (!item) return;
      item.removeEventListener('mouseenter', (item as any).__enterHandler);
      item.removeEventListener('mouseleave', (item as any).__leaveHandler);
    };

    listItemsRef.current.forEach(addEventListeners);
    return () => {
      listItemsRef.current.forEach(removeEventListeners);
    };
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Works', 'Contact'];
  const navLinks = ['/', '/About', '/Service', '/Work', '/Contact']; // actual pages

  return (
    <footer className="container py-12 h-auto">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Navigation Section */}
        <div>
          <ul className="flex flex-col gap-5 uppercase w-24">
            {navItems.map((text, index) => (
              <li
                key={index}
                ref={(el) => { listItemsRef.current[index] = el; }}
                className="relative overflow-hidden h-5 cursor-pointer"
              >
                <Link
                  href={navLinks[index]}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <span className="block initial absolute top-0 left-0 w-full h-full">{text}</span>
                  <span className="block hover absolute top-0 left-0 w-full h-full">{text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold uppercase mb-4">Contact Us</h2>
          <p className="mb-2">Got a video to edit? A YouTube channel to grow? A campaign to launch?</p>
          <p className="mb-4">Let's bring your story to life and help it reach the right audience</p>
          <div className="space-y-1">
            <p><strong>Email:</strong> <a href="mailto:Tanmaynikumbh@byxbytemedia.com" className="text-orange-400 hover:text-orange-300 transition-colors">Tanmaynikumbh@byxbytemedia.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919359136696" className="text-orange-400 hover:text-orange-300 transition-colors">+91 93591 36696</a></p>
            <p><strong>Location:</strong> Mumbai, Maharashtra, India</p>
          </div>
        </div>
      </div>

      <div className='relative overflow-hidden group/line py-12 mx-auto w-fit cursor-pointer'>
        <span className='block w-full bg-white h-3 -translate-x-full group-hover/line:translate-x-0 duration-500 opacity-0 group-hover/line:opacity-100' />
      </div>

      <div className='w-full flex flex-col md:flex-row gap-10 justify-between'>
        <div className='flex gap-10 uppercase'>
          {['mail','github','behance','dribble','linkedin'].map((item,index)=>(
            <div key={index} className='relative overflow-hidden group/line cursor-pointer'>
              <h1 className='leading-none pb-2'>{item}</h1>
              <span className='block bg-white h-[2px] -translate-x-full group-hover/line:translate-x-0 group-hover/line:opacity-100 opacity-0 duration-500' />
            </div>
          ))}
        </div>
        <div className='flex gap-10 uppercase'>
          <span>2025 © Byxbyte Media</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
