"use client";
import { MdOutlineArrowOutward } from "react-icons/md";
import { workItems } from "../data/index";
import Image from "next/image";
import { useState } from "react";
import WorkModal from "../components/ui/WorkModal";
import YoutubeInfiniteCards from "../components/ui/YoutubeInfiniteCards";
import { WorkItem } from "../components/type/work";



type Album = {
  title: string;
  cover: string;
  images: string[];
};

// 🚀 Current + future-proof categories
type Category =
  | "Advertisement"
  | "Music Video";
  // | "Documentary"   // keep commented for future
  // | "E-commerce";   // future scope

// type WorkItem = {
//   id: number;
//   title: string;
//   description: string;
//   category: Category;
//   tag: string;
//   img: string;
//   albums: Album[];
//   youtubeLinks: string[];
//   beforeAfterPairs?: { before: string; after: string }[];
//   year?: number;
// };

export default function Works() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | Category>("all");

  // Filter items
  const filteredItems =
    selectedCategory === "all"
      ? workItems
      : workItems.filter((item) => item.category === selectedCategory);

  // Album stats
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
      className="relative flex flex-col w-full h-full bg-gradient-to-b from-black via-gray-900 to-black py-20"
    >
      <div className="container">
        <h3 className="text-xl text-white z-50 pb-5">Our Works</h3>

        {/* Category Filter */}
        <div className="flex gap-4 mb-10 flex-wrap">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2 rounded-full border transition-colors ${
              selectedCategory === "all"
                ? "border-white bg-white text-black"
                : "border-gray-600 text-gray-300 hover:border-gray-400"
            }`}
          >
            All Projects ({workItems.length} • {totalAlbums} albums)
          </button>

          <button
            onClick={() => setSelectedCategory("Advertisement")}
            className={`px-6 py-2 rounded-full border transition-colors ${
              selectedCategory === "Advertisement"
                ? "border-white bg-white text-black"
                : "border-gray-600 text-gray-300 hover:border-gray-400"
            }`}
          >
            Advertisements (
            {workItems.filter((item) => item.category === "Advertisement").length} • {adAlbums} albums)
          </button>

          <button
            onClick={() => setSelectedCategory("Music Video")}
            className={`px-6 py-2 rounded-full border transition-colors ${
              selectedCategory === "Music Video"
                ? "border-white bg-white text-black"
                : "border-gray-600 text-gray-300 hover:border-gray-400"
            }`}
          >
            Music Videos (
            {workItems.filter((item) => item.category === "Music Video").length} • {musicAlbums} albums)
          </button>

          {/* 🚀 Future filter buttons
          <button>Documentaries</button>
          <button>E-commerce</button>
          */}
        </div>
      </div>

      {filteredItems.map((item, index) => (
        <div key={item.id} className="container mb-20">
          {/* Header */}
          <div className="flex md:flex-row flex-col justify-between items-start md:items-center py-10 border-b border-gray-800 group">
            {/* Left Side */}
            <div
              className={`flex flex-col p-6 gap-2 justify-between ${
                index % 2 === 1 ? "md:order-2" : ""
              } md:w-1/2`}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-4 py-2 text-sm rounded-full font-medium ${
                      item.category === "Advertisement"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    }`}
                  >
                    {item.category}
                  </span>
                  {item.year && (
                    <span className="text-gray-500 text-sm bg-gray-800 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  )}
                </div>

                <h2 className="text-5xl font-bold pb-4 leading-tight">{item.title}</h2>
                <p className="pb-8 text-gray-300 text-lg leading-relaxed">{item.description}</p>

                <div className="grid gap-4">
                  <div className="flex gap-10 pb-4 border-b border-gray-700 mb-4 w-full">
                    <span className="w-[30%] text-gray-400 font-medium">Type:</span>
                    <span className="w-[70%] text-white">{item.tag}</span>
                  </div>
                  <div className="flex gap-10 pb-4 border-b border-gray-700 mb-4 w-full">
                    <span className="w-[30%] text-gray-400 font-medium">Albums:</span>
                    <span className="w-[70%] text-white">{item.albums.length} projects</span>
                  </div>
                  <div className="flex gap-10 pb-4 border-b border-gray-700 mb-4 w-full">
                    <span className="w-[30%] text-gray-400 font-medium">Videos:</span>
                    <span className="w-[70%] text-white">{item.youtubeLinks.length} videos</span>
                  </div>
                  {item.beforeAfterPairs && (
                    <div className="flex gap-10 pb-4 border-b border-gray-700 mb-4 w-full">
                      <span className="w-[30%] text-gray-400 font-medium">Process:</span>
                      <span className="w-[70%] text-white">
                        {item.beforeAfterPairs.length} before/after pairs
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedWork(item)}
                  className="flex items-center gap-4 group/button hover:bg-white/10 p-4 rounded-xl transition-all duration-300 border border-transparent hover:border-white/20"
                >
                  <span className="text-xl font-medium">Explore Full Gallery</span>
                  <MdOutlineArrowOutward className="text-2xl group-hover/button:rotate-45 group-hover/button:translate-x-2 duration-300" />
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className={`flex flex-col ${index % 2 === 1 ? "md:order-1" : ""} md:w-1/2`}>
              <div className="w-full h-[60vh] overflow-hidden rounded-3xl relative bg-black mb-6">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 duration-500"
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {item.albums.length} Albums
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {item.albums?.length > 0 && (
                <div className="grid grid-cols-4 gap-3">
                  {item.albums.slice(0, 4).map((album, albumIndex) => (
                    <div key={albumIndex} className="group/album">
                      <div className="aspect-square rounded-xl overflow-hidden bg-gray-800 relative">
                        <Image
                          src={album.cover}
                          alt={album.title}
                          fill
                          className="object-cover group-hover/album:scale-110 transition-transform duration-300"
                          loading="lazy"
                          quality={60}
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/album:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-xs font-medium text-center px-2">
                            {album.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {item.albums.length > 4 && (
                <div className="text-center mt-4">
                  <span className="text-gray-400 text-sm">
                    +{item.albums.length - 4} more albums
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* YouTube Videos */}
          {item.youtubeLinks?.length > 0 && (
            <div className="py-12">
                <YoutubeInfiniteCards
                youtubeLinks={item.youtubeLinks}
                projectTitle={item.title}
                />
            </div>
            )}
        </div>
      ))}

      {/* Modal */}
      {selectedWork && <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />}
    </section>
  );
}
