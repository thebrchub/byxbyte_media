"use client";
import { useState } from "react";
import Image from "next/image";

interface Ad {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export default function AdsSection({ ads }: { ads: Ad[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative w-full bg-black py-16">
      <h3 className="text-2xl text-white container mb-10">Advertisements</h3>

      <div className="flex flex-col gap-16 container">
        {ads.map((ad) => (
          <div key={ad.id} className="flex flex-col gap-6">
            {/* Title + Description */}
            <div>
              <h2 className="text-3xl font-semibold text-white mb-2">
                {ad.title}
              </h2>
              <p className="text-gray-400 max-w-2xl">{ad.description}</p>
            </div>

            {/* Scrollable image gallery */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {ad.images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-72 h-48 flex-shrink-0 cursor-pointer group"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt={`${ad.title} ${i}`}
                    fill
                    className="object-cover rounded-xl group-hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[90%] h-[80%]">
            <Image
              src={selectedImage}
              alt="Selected"
              fill
              className="object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
