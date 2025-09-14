"use client";
import React, { useState, useEffect, useRef } from "react";
import { Play, X, ExternalLink, ChevronLeft, ChevronRight, Pause } from "lucide-react";
import Image from 'next/image';

// New type for videos
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const extractVideoId = (url: string): string | null => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const getThumbnail = (url: string): string | null => {
    const videoId = extractVideoId(url);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : null;
  };

  const getEmbedUrl = (url: string): string => {
    const videoId = extractVideoId(url);
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
  };

  const duplicatedLinks = [...youtubeLinks, ...youtubeLinks, ...youtubeLinks];

  const openVideoModal = (videoUrl: string) => setSelectedVideo(videoUrl);
  const closeVideoModal = () => setSelectedVideo(null);

  const slideLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const togglePlayPause = () => setIsPaused(!isPaused);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeVideoModal();
      if (event.key === " " && !selectedVideo) {
        event.preventDefault();
        togglePlayPause();
      }
      if (event.key === "ArrowLeft" && !selectedVideo) slideLeft();
      if (event.key === "ArrowRight" && !selectedVideo) slideRight();
    };

    document.addEventListener("keydown", handleKeyDown);

    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

  return (
    <>
      <div className="relative overflow-hidden py-8">
        <h4 className="text-3xl font-semibold text-white mb-8 text-center">
          Video Gallery 
          {/* - {projectTitle} */}
        </h4>

        {/* Manual Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
          <button
            onClick={slideLeft}
            className="bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-200 border border-white/20"
            title="Slide Left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
          <button
            onClick={slideRight}
            className="bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-200 border border-white/20"
            title="Slide Right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Pause/Play Control */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={togglePlayPause}
            className="bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-3 transition-all duration-200 border border-white/20"
            title={isPaused ? "Resume Auto-scroll" : "Pause Auto-scroll"}
          >
            {isPaused ? <Play className="w-5 h-5 text-white" fill="white" /> : <Pause className="w-5 h-5 text-white" />}
          </button>
        </div>

        <div 
          ref={scrollContainerRef}
          className={`flex space-x-6 ${isPaused ? '' : 'animate-scroll-left'} overflow-x-auto scrollbar-hide`}
        >
          {duplicatedLinks.map((video, index) => {
            const thumbnail = getThumbnail(video.url);
            const videoId = extractVideoId(video.url);

            return (
              <div
                key={`${videoId ?? "video"}-${index}`}
                className="flex-shrink-0 w-80 h-48 relative group cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => openVideoModal(video.url)}
              >
                <div className="w-full h-full rounded-xl overflow-hidden bg-gray-900 relative shadow-lg">
                  {thumbnail && (
                    <Image
                      src={thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Video title strip at bottom */}
                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-3 py-1 text-sm truncate">
                    {video.title}
                  </div>

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </div>

                  {/* Video number */}
                  <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                    #{index + 1}
                  </div>

                  {/* External link icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Fade edges with multiple layers */}
        <div className="absolute top-0 left-0 w-56 h-full bg-gradient-to-r from-gray-900 via-gray-900/90 via-gray-900/60 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-56 h-full bg-gradient-to-l from-gray-900 via-gray-900/90 via-gray-900/60 to-transparent pointer-events-none z-10" />
        
        {/* Inner glow gradients */}
        <div className="absolute top-0 left-56 w-20 h-full bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-56 w-20 h-full bg-gradient-to-l from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none z-10" />
        
        {/* Outer shadow edges */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black/40 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black/40 to-transparent pointer-events-none z-10" />
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeVideoModal}
            className="absolute top-8 right-8 z-60 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-colors duration-200 border border-white/10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div className="relative w-full max-w-5xl aspect-video">
            <iframe
              src={getEmbedUrl(selectedVideo)}
              title="YouTube video player"
              className="w-full h-full rounded-lg shadow-2xl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="absolute inset-0 -z-10" onClick={closeVideoModal} />
        </div>
      )}

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
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