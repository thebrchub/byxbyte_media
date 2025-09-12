"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import dynamic from "next/dynamic";

const ReactCompareImage: any = dynamic(() => import("react-compare-image"), { ssr: false });

type WorkItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  tag: string;
  img: string;
  images?: string[];
  youtubeLinks?: { url: string; title: string }[];
  beforeAfterPairs?: { before: string; after: string }[];
};

interface WorkModalProps {
  work: WorkItem;
  onClose: () => void;
}

export default function WorkModal({ work, onClose }: WorkModalProps) {
  const availableTabs = [
    { key: "overview", label: "Overview", show: true },
    { key: "images", label: "Images", show: !!work.images?.length },
    { key: "videos", label: "Videos", show: !!work.youtubeLinks?.length },
    { key: "beforeAfter", label: "Before & After", show: !!work.beforeAfterPairs?.length },
  ].filter((tab) => tab.show);

  const [activeTab, setActiveTab] = useState<string>(availableTabs[0].key);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
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

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{work.title}</h2>
            <p className="text-gray-300">{work.description}</p>

            {/* Tabs */}
            <div className="flex space-x-2 mt-4 bg-gray-800/50 rounded-2xl p-1">
              {availableTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.key ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6">
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
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

            {activeTab === "images" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {work.images?.map((img, idx) => (
                    <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-gray-900">
                      <img
                        src={img}
                        alt={`${work.title} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "videos" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {work.youtubeLinks?.map((video, idx) => (
                  <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-black relative">
                    <iframe
                      src={video.url}
                      title={video.title} // now using the proper title
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


            {activeTab === "beforeAfter" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-6">
                {work.beforeAfterPairs?.map((pair, idx) => (
                  <div key={idx} className="aspect-video rounded-xl overflow-hidden bg-gray-900">
                    <ReactCompareImage
                      leftImage={pair.before}
                      rightImage={pair.after}
                      sliderLineColor="#3B82F6"
                      sliderPositionPercentage={50}
                      handleSize={30}
                    />
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
