"use client";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Step = {
  title: string;
  description: string;
  image: string;
};

interface CarouselSectionProps {
  title: string;
  steps: Step[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({ title, steps }) => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full py-12">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">
        {title}
      </h2>

      {/* Carousel Container */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {steps.map((step, idx) => (
              <div
  className="flex-[0_0_100%] md:flex-[0_0_70%] lg:flex-[0_0_50%] px-6"
  key={idx}
>

                <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                  {/* Image */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={scrollNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default CarouselSection;
