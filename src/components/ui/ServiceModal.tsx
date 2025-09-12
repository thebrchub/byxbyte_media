"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { Service } from "../type/service";

const ReactCompareImage: any = dynamic(() => import("react-compare-image"), {
  ssr: false,
});

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export default function ServiceModal({
  isOpen,
  onClose,
  service,
}: ServiceModalProps) {
  const [activeTab, setActiveTab] = useState<
    "overview" | "gallery" | "process"
  >("overview");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setActiveTab("overview");
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const beforeAfterLength = service?.beforeAfterPairs?.length ?? 0;
  const galleryLength = service?.gallery?.length ?? 0;

  const handlePrevImage = useCallback(() => {
    const length = beforeAfterLength || galleryLength;
    if (length === 0) return;
    setCurrentImageIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [beforeAfterLength, galleryLength]);

  const handleNextImage = useCallback(() => {
    const length = beforeAfterLength || galleryLength;
    if (length === 0) return;
    setCurrentImageIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [beforeAfterLength, galleryLength]);

  if (!isOpen || !service) return null;

  const hasBeforeAfter = beforeAfterLength > 0;
  const hasGallery = galleryLength > 0;
  const hasProcess = service.process?.length ?? 0 > 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 30 }}
          className="relative z-10 w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl bg-gradient-to-br from-gray-900/95 to-gray-800/95 border border-gray-700/50 backdrop-blur-xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative p-4 sm:p-6 border-b border-gray-700/50 flex-shrink-0">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl sm:text-3xl font-bold text-white mb-2">
              {service.title}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              {service.detailedDescription}
            </p>

            {/* Tabs */}
            <div className="flex space-x-1 mt-4 bg-gray-800/50 rounded-xl p-1 overflow-x-auto">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                Overview
              </button>
              {(hasBeforeAfter || hasGallery) && (
                <button
                  onClick={() => setActiveTab("gallery")}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeTab === "gallery"
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  {hasBeforeAfter ? "Before & After" : "Gallery"}
                </button>
              )}
              {hasProcess && (
                <button
                  onClick={() => setActiveTab("process")}
                  className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeTab === "process"
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                >
                  Process
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-4">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  Key Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-3 rounded-xl bg-gray-800/30 border border-gray-700/30"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm sm:text-base">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "gallery" && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    {service.beforeAfterPairs?.length ? (
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Before & After Samples
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.beforeAfterPairs.map((pair, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-gray-900 p-2"
            >
              {pair.before && pair.after ? (
                <ReactCompareImage
                  leftImage={pair.before}
                  rightImage={pair.after}
                  sliderLineColor="#3B82F6"
                  sliderPositionPercentage={50}
                  handleSize={20}
                  handle={
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
                  }
                  style={{ pointerEvents: "auto" }}  // 👈 ensures drag works
                />
              ) : (
                <div className="text-gray-400 text-center py-6 text-sm">
                  Image not available
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ) : (
      <p className="text-gray-400 text-center py-8">No images available</p>
    )}
  </motion.div>
)}


            {activeTab === "process" && hasProcess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  Our Process
                </h3>
                <div className="space-y-4">
                  {service.process?.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start p-4 rounded-xl bg-gray-800/40 border border-gray-700/30"
                    >
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-3 sm:mr-4">
                        {index + 1}
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {step}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-700/50 p-4 sm:p-6 flex-shrink-0">
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started with {service.title}
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 sm:px-8 sm:py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
