"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from 'next/image';

export type YoutubeVideo = {
  url: string;
  title: string;
};

export type WorkItem = {
  id: number;
  title: string;
  description: string;
  category: "Advertisement" | "Music Video" | "Corporate";
  tag: string;
  img: string;
  albums?: {
    title: string;
    cover: string;
    images: string[];
  }[];
  youtubeLinks?: YoutubeVideo[];
  beforeAfterPairs?: { before: string; after: string }[];
  year?: number;
};

interface WorkModalProps {
  work: WorkItem;
  onClose: () => void;
}

export default function WorkModal({ work, onClose }: WorkModalProps) {
  // ✅ only keep overview, images, videos
  const availableTabs = [
    { key: "overview", label: "Overview", show: true },
    { key: "images", label: "Images", show: !!work.albums?.length },
    { key: "videos", label: "Videos", show: !!work.youtubeLinks?.length },
  ].filter((tab) => tab.show);

  const [activeTab, setActiveTab] = useState<string>(availableTabs[0].key);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-gray-700/50 backdrop-blur-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-6 border-b border-gray-700/50">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {work.title}
            </h2>
            <p className="text-gray-300">{work.description}</p>

            {/* Tabs */}
            <div className="flex space-x-2 mt-4 bg-gray-800/50 rounded-2xl p-1">
              {availableTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6 custom-scrollbar">

            {/* Overview */}
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="flex flex-col space-y-3">
                  <div className="flex gap-4">
                    <span className="text-gray-400 w-32">Category:</span>
                    <span className="text-gray-200">{work.category}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-gray-400 w-32">Tag:</span>
                    <span className="text-gray-200">{work.tag}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Images (Albums) */}
            {activeTab === "images" && work.albums && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="space-y-8">
                  {work.albums.map((album, albumIdx) => (
                    <div key={albumIdx}>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {album.title}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {album.images.map((img, idx) => (
                          <div
                            key={idx}
                            className="aspect-video rounded-xl overflow-hidden bg-gray-900 relative"
                          >
                            <Image
                              src={img}
                              alt={`${album.title} ${idx + 1}`}
                              fill
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Videos */}
            {activeTab === "videos" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {work.youtubeLinks?.map((video, idx) => (
                  <div
                    key={idx}
                    className="aspect-video rounded-xl overflow-hidden bg-black relative"
                  >
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white px-3 py-1 text-sm">
                      {video.title}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
