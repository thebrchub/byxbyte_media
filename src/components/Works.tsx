"use client";
import { MdOutlineArrowOutward } from "react-icons/md";
import { workItems } from "../data/index";
import Image from "next/image";
import { useState } from "react";
import WorkModal from "../components/ui/WorkModal";
import AlbumInfiniteCards from "../components/ui/AlbumInfiniteCards";
import YoutubeInfiniteCards from "../components/ui/YoutubeInfiniteCards";
import { WorkItem } from "../components/type/work";
import { motion } from "framer-motion";

type Category = "Advertisement" | "Music Video";

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | Category>("all");

  const filteredItems =
    selectedCategory === "all"
      ? workItems
      : workItems.filter((item) => item.category === selectedCategory);

  const totalAlbums = workItems.reduce((total, item) => total + item.albums.length, 0);
  const adAlbums = workItems
    .filter((item) => item.category === "Advertisement")
    .reduce((total, item) => total + item.albums.length, 0);
  const musicAlbums = workItems
    .filter((item) => item.category === "Music Video")
    .reduce((total, item) => total + item.albums.length, 0);

  return (
    <section
      id="projects"
      className="flex flex-col w-full h-full bg-gradient-to-b from-black via-gray-900 to-black py-16 sm:py-20"
    >
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 mt-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Our Works
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4 rounded-full" />
          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of our best Ad Films, Music Videos & Corporate projects — crafted with creativity and precision.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 sm:px-6 py-2 rounded-full border transition-colors ${
            selectedCategory === "all"
              ? "border-white bg-white text-black"
              : "border-gray-600 text-gray-300 hover:border-gray-400"
          }`}
        >
          All Projects ({workItems.length} • {totalAlbums} albums)
        </button>
        <button
          onClick={() => setSelectedCategory("Advertisement")}
          className={`px-4 sm:px-6 py-2 rounded-full border transition-colors ${
            selectedCategory === "Advertisement"
              ? "border-white bg-white text-black"
              : "border-gray-600 text-gray-300 hover:border-gray-400"
          }`}
        >
          Advertisements ({workItems.filter((item) => item.category === "Advertisement").length} • {adAlbums} albums)
        </button>
        <button
          onClick={() => setSelectedCategory("Music Video")}
          className={`px-4 sm:px-6 py-2 rounded-full border transition-colors ${
            selectedCategory === "Music Video"
              ? "border-white bg-white text-black"
              : "border-gray-600 text-gray-300 hover:border-gray-400"
          }`}
        >
          Music Videos ({workItems.filter((item) => item.category === "Music Video").length} • {musicAlbums} albums)
        </button>
      </motion.div>


        {/* Works List */}
        <div className="flex flex-col gap-12">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="px-4 sm:px-0"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-800 pb-10">
                {/* Left */}
                <div className={`flex flex-col gap-4 w-full md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                    <span
                      className={`px-3 py-1 text-xs sm:text-sm rounded-full font-medium ${
                        item.category === "Advertisement"
                          ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      }`}
                    >
                      {item.category}
                    </span>
                    {item.year && (
                      <span className="text-gray-500 text-xs sm:text-sm bg-gray-800 px-2 py-1 rounded-full">
                        {item.year}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">{item.title}</h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">{item.description}</p>

                  <div className="flex flex-col gap-2">
                    {[
                      ["Type", item.tag],
                      ["Albums", `${item.albums.length} projects`],
                      // ["Videos", `${item.youtubeLinks.length} videos`],
                      // ...(item.beforeAfterPairs ? [["Process", `${item.beforeAfterPairs.length} before/after pairs`]] : []),
                    ].map(([label, value]) => (
                      <div key={label} className="flex flex-col sm:flex-row justify-between border-b border-gray-700 py-2">
                        <span className="text-gray-400 text-sm sm:w-1/3">{label}:</span>
                        <span className="text-white text-sm sm:w-2/3">{value}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedWork(item)}
                    className="flex items-center gap-2 sm:gap-4 mt-4 p-3 rounded-xl border border-transparent hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-sm sm:text-base font-medium">Explore Full Gallery</span>
                    <MdOutlineArrowOutward className="text-lg sm:text-2xl transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Right */}
                <div className={`w-full md:w-1/2 flex flex-col ${index % 2 === 1 ? "md:order-1" : ""} gap-4`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.1 }}
                    className="w-full h-64 sm:h-80 md:h-[60vh] overflow-hidden rounded-2xl relative bg-black mb-4"
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      quality={85}
                    />
                    <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {item.albums.length} Albums
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>

                  {item.albums?.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    >
                      <AlbumInfiniteCards albums={item.albums} />
                    </motion.div>
                  )}

                  {item.albums.length > 4 && (
                    <div className="text-center mt-2">
                      <span className="text-gray-400 text-xs sm:text-sm">
                        +{item.albums.length - 4} more albums
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* YouTube Videos */}
              {item.youtubeLinks?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  className="py-8 px-4 sm:px-0"
                >
                  <YoutubeInfiniteCards youtubeLinks={item.youtubeLinks} projectTitle={item.title} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {selectedWork && <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />}
      </div>
    </section>
  );
}
