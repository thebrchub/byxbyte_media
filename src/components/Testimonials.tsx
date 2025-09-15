// components/Testimonials.tsx
"use client";
import Image from "next/image";

const logos = [
  { id: 1, name: "Client1", img: "/logos/1.png" },
  { id: 2, name: "Client2", img: "/logos/2.png" },
  { id: 3, name: "Client3", img: "/logos/3.png" },
  { id: 4, name: "Client4", img: "/logos/4.png" },
  { id: 5, name: "Client5", img: "/logos/5.png" },
  { id: 6, name: "Client6", img: "/logos/15.png" },
  { id: 7, name: "Client7", img: "/logos/7.png" },
  { id: 8, name: "Client8", img: "/logos/8.png" },
  { id: 9, name: "Client9", img: "/logos/9.png" },
  { id: 10, name: "Client10", img: "/logos/10.png" },
  { id: 11, name: "Client11", img: "/logos/11.png" },
  { id: 12, name: "Client12", img: "/logos/12.png" },
  { id: 13, name: "Client13", img: "/logos/13.png" },
  { id: 14, name: "Client14", img: "/logos/14.png" },
];

export default function Testimonials() {
  return (
    <div className="relative w-full py-16 flex flex-col items-center justify-center overflow-hidden bg-black bg-grid-white/[0.1]">
      
      {/* Hero-like mask overlay */}
      <div className="absolute inset-0 pointer-events-none bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Heading / tagline */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-20 z-10 text-center">
        Trusted by <span className="text-orange-400">Leading Companies</span>
      </h2>

      {/* Logo carousel */}
      <div className="relative w-full overflow-hidden z-10">
        {/* Gradient edges */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

        {/* Moving logos */}
        <div className="flex animate-marquee gap-10">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-40 h-20 relative">
              <Image
                src={logo.img}
                alt={logo.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Infinite scroll animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          gap: 4rem;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
