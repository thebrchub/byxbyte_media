// Enhanced BentoGrid.tsx (replace your old file)
"use client";
import React, { useState } from "react";
import { cn } from "@/utils/cn";

/* ---------- BentoGrid ---------- */
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 lg:gap-6 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

/* ---------- InfiniteScrollMedia ---------- */
type MediaItem = { src: string; type: "image" | "video"; alt?: string };

const InfiniteScrollMedia = ({
  media,
  direction = "horizontal",
  speed = "normal",
  className,
}: {
  media: MediaItem[];
  direction?: "horizontal" | "vertical";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const speedClass = {
    slow: direction === "horizontal" ? "animate-scroll-x-slow" : "animate-scroll-y-slow",
    normal: direction === "horizontal" ? "animate-scroll-x" : "animate-scroll-y",
    fast: direction === "horizontal" ? "animate-scroll-x-fast" : "animate-scroll-y-fast",
  } as const;

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={cn(
          "flex",
          direction === "horizontal" ? "flex-row" : "flex-col",
          speedClass[speed],
          isPaused && "pause-animation"
        )}
        aria-hidden
      >
        {/* first copy */}
        {media.map((item, idx) => (
          <div
            key={`first-${idx}`}
            className="flex-shrink-0 w-full h-full mr-4"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <img
                src={item.src}
                alt={item.alt || "media"}
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>

        ))}

        {/* duplicate for seamless loop */}
        {media.map((item, idx) => (
          <div
            key={`second-${idx}`}
            className={cn("flex-shrink-0", direction === "horizontal" ? "w-80 h-full mr-4" : "w-full h-80 mb-4")}
          >
            {item.type === "video" ? (
              <video src={item.src} autoPlay muted loop playsInline className="w-full h-full object-cover rounded-lg" />
            ) : (
              <img src={item.src} alt={item.alt || "media"} className="w-full h-full object-cover rounded-lg" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ---------- BentoGridItem (supports `movingItems` alias) ---------- */
type RawMovingItem = {
  // accept either shape so existing code can pass arrays of objects like { img: '/x.jpg' } or { src: '/x.jpg' }
  src?: string;
  img?: string;
  type?: "image" | "video";
  alt?: string;
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  descriptionClassName,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  onClick,
  media = [],
  movingItems = [], // <-- this fixes your TS error
  scrollDirection = "horizontal",
  scrollSpeed = "normal",
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  spareImg?: string;
  onClick?: () => void;
  // canonical media shape
  media?: MediaItem[];
  // legacy / custom shape developers might pass
  movingItems?: RawMovingItem[];
  scrollDirection?: "horizontal" | "vertical";
  scrollSpeed?: "slow" | "normal" | "fast";
}) => {
  // normalize media: prefer `media` prop, else map `movingItems`
  const normalizedMedia: MediaItem[] =
    (media && media.length > 0)
      ? media
      : (movingItems && movingItems.length > 0)
      ? movingItems.map((m) => ({
          src: m.src || m.img || "",
          type: m.type || "image",
          alt: m.alt,
        }))
      : [];

  // grid sizing helper
  // inside BentoGridItem
  const getGridClasses = (id: number) => {
  switch (id) {
    case 1: // Video Production
      return "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 h-64";
    case 2: // Color Grading
      return "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 h-64";
    case 3: // Post Production (wider)
      return "col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4 row-span-1 h-64";
    case 4: // Script Writing
      return "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 h-64";
    case 5: // Storyboarding
      return "col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-2 row-span-1 h-64";
    case 6: // CTA / full-width section
      return "col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-4 row-span-1 h-48";
    default:
      return "col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 row-span-1 h-64";
  }
};



  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition-all duration-500 cursor-pointer justify-between flex flex-col space-y-4 hover:scale-[1.02] hover:border-blue-500/30",
        getGridClasses(id),
        className
      )}
      style={{
        background: "rgba(4,7,29,0.8)",
        backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {normalizedMedia.length > 0 ? (
          <InfiniteScrollMedia
            media={normalizedMedia}
            direction={scrollDirection}
            speed={scrollSpeed}
            className="opacity-40 group-hover/bento:opacity-60 transition-opacity duration-500"
          />
        ) : (
          <>
            {img && (
              <img
                src={img}
                alt={typeof title === "string" ? title : "Service"}
                className={cn(
                  imgClassName,
                  "object-cover object-center w-full h-full opacity-40 group-hover/bento:opacity-60 transition-opacity duration-500"
                )}
              />
            )}
            {spareImg && (
              <img
                src={spareImg}
                alt={typeof title === "string" ? title : "Service"}
                className="absolute right-0 bottom-0 object-cover object-center w-full h-full opacity-40 group-hover/bento:opacity-60 transition-opacity duration-500"
              />
            )}
          </>
        )}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-1"></div>

      {/* Content */}
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-1 transition-all duration-300 relative h-full flex flex-col justify-end px-6 py-6 lg:px-8 lg:py-8 z-10"
        )}
      >
        <div className="font-sans text-lg lg:text-2xl max-w-96 font-bold z-10 mb-3 text-white group-hover/bento:text-blue-100 transition-colors duration-300">
          {title}
        </div>

        <div
          className={cn(
            descriptionClassName,
            "font-sans font-light text-sm lg:text-base text-gray-300 z-10 group-hover/bento:text-gray-100 transition-colors duration-300"
          )}
        >
          {description}
        </div>

        {id === 6 ? (
          <div className="mt-6 relative z-20 flex items-center justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-base font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105">
              Let&apos;s Talk
            </button>
          </div>
        ) : (
          <div className="mt-4 flex items-center text-blue-400 group-hover/bento:text-blue-300 transition-colors duration-300 opacity-0 group-hover/bento:opacity-100 transform translate-y-2 group-hover/bento:translate-y-0 transition-all duration-300">
            <span className="text-sm font-medium">View Details</span>
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Hover border */}
      <div className="absolute border-2 border-transparent group-hover/bento:border-blue-500/20 rounded-3xl transition-all duration-500 pointer-events-none"></div>
    </div>
  );
};
