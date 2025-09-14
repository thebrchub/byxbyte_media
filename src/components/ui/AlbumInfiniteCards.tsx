"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type Album = {
  title: string;
  cover: string;
  images: string[];
};

type AlbumInfiniteCardsProps = {
  albums: Album[];
};

export default function AlbumInfiniteCards({ albums }: AlbumInfiniteCardsProps) {
  const scrollingAlbums = [...albums, ...albums];

  // adjust speed dynamically (bigger list = longer duration)
  const baseDuration = 10; // seconds per item
  const duration = albums.length * baseDuration;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration, // 👈 now depends on list size
        }}
      >
        {scrollingAlbums.map((album, idx) => (
          <div
            key={idx}
            className="relative w-72 aspect-[16/9] rounded-xl overflow-hidden bg-gray-800 shrink-0"
          >
            <Image
              src={album.cover}
              alt={album.title}
              fill
              className="object-cover"
              loading="lazy"
              quality={70}
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-medium px-2 text-center">
              {album.title}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
