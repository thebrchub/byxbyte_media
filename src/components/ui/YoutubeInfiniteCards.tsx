"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface YoutubeVideo {
  url: string;
  title: string;
}

export interface YoutubeInfiniteCardsProps {
  youtubeLinks: YoutubeVideo[];
  projectTitle: string;
}

const YoutubeInfiniteCards: React.FC<YoutubeInfiniteCardsProps> = ({
  youtubeLinks,
  projectTitle,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  let resumeTimeout: NodeJS.Timeout | null = null;

  const extractVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getThumbnail = (url: string) => {
    const videoId = extractVideoId(url);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : null;
  };

  const getEmbedUrl = (url: string) => {
    const videoId = extractVideoId(url);
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
  };

  const duplicatedLinks = [...youtubeLinks, ...youtubeLinks];

  const openVideoModal = (videoUrl: string) => setSelectedVideo(videoUrl);
  const closeVideoModal = () => setSelectedVideo(null);

  // Manual scroll with pause/resume
  const scrollByAmount = (amount: number) => {
    if (!scrollContainerRef.current) return;

    setIsPaused(true);
    scrollContainerRef.current.scrollBy({ left: amount, behavior: "smooth" });

    if (resumeTimeout) clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  const slideLeft = () => scrollByAmount(-320); // one card
  const slideRight = () => scrollByAmount(320);

  // --- Auto scroll logic ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const speed = 0.5; // pixels per frame
    let lastTime = performance.now();

    const step = (time: number) => {
      if (!isPaused) {
        const delta = time - lastTime;
        lastTime = time;
        container.scrollLeft += speed * (delta / 16.67);

        // Reset when reaching half
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      } else {
        lastTime = time; // reset timer to avoid jump
      }

      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isPaused, youtubeLinks]);

  return (
    <>
      <div className="relative py-12 px-4 sm:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Video Gallery
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Arrow Controls */}
        <button
          onClick={slideLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full p-3 sm:p-4 transition-all duration-300 border border-white/20 hover:border-white/30 shadow-2xl hover:shadow-white/10 transform hover:scale-110"
          title="Previous videos"
        >
          <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </button>
        <button
          onClick={slideRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full p-3 sm:p-4 transition-all duration-300 border border-white/20 hover:border-white/30 shadow-2xl hover:shadow-white/10 transform hover:scale-110"
          title="Next videos"
        >
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
        </button>

        {/* Video Cards */}
        <div className="relative overflow-hidden rounded-2xl">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 py-8 overflow-x-scroll scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedLinks.map((video, index) => {
              const thumbnail = getThumbnail(video.url);
              const videoId = extractVideoId(video.url);
              return (
                <div
                  key={`${videoId ?? "video"}-${index}`}
                  className="flex-shrink-0 w-56 h-40 sm:w-72 sm:h-52 md:w-96 md:h-60 relative group cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2"
                  onClick={() => openVideoModal(video.url)}
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-800 relative shadow-xl hover:shadow-2xl transition-all duration-500 ring-1 ring-white/10 hover:ring-white/20">
                    {thumbnail && (
                      <Image
                        src={thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-red-600 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:shadow-red-500/30 transform group-hover:scale-110 ring-2 sm:ring-4 ring-white/20 group-hover:ring-white/30">
                        <Play
                          className="w-5 sm:w-7 md:w-8 h-5 sm:h-7 md:h-8 text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 text-white font-semibold text-sm sm:text-base md:text-lg line-clamp-2 drop-shadow-lg">
                      {video.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Overlays */}
          <div className="absolute left-0 top-0 h-full w-10 sm:w-20 pointer-events-none bg-gradient-to-r from-black/90 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-10 sm:w-20 pointer-events-none bg-gradient-to-l from-black/90 to-transparent" />
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6">
          <button
            onClick={closeVideoModal}
            className="absolute top-6 right-6 z-60 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full p-3 transition-all duration-300 border border-white/20 hover:border-white/30 shadow-2xl hover:shadow-white/10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={getEmbedUrl(selectedVideo)}
              title="YouTube video player"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
};

export default YoutubeInfiniteCards;
