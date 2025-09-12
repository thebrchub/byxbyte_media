// components/InfiniteMovingCards.tsx
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface Card {
  id: number;
  name: string;
  img: string;
}

interface Props {
  items: Card[];
  direction?: "left" | "right";
  speed?: "slow" | "medium" | "fast";
}

export function ClientMovingCards({ items, direction = "left", speed = "medium" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const speedMap = { slow: 20, medium: 15, fast: 10 };
  const animationDuration = speedMap[speed] || 15;

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    let start = 0;
    const step = direction === "left" ? -1 : 1;

    let animationFrame: number;

    const move = () => {
      start += step * 0.5; // adjust speed
      container.scrollLeft = start;
      if (container.scrollLeft >= container.scrollWidth / 2) start = 0;
      if (container.scrollLeft <= 0) start = container.scrollWidth / 2;
      animationFrame = requestAnimationFrame(move);
    };

    animationFrame = requestAnimationFrame(move);

    return () => cancelAnimationFrame(animationFrame);
  }, [direction]);

  return (
    <div className="overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...items, ...items].map((item) => (
          <div key={item.id} className="flex-shrink-0 w-40 h-20 relative">
            <Image
              src={item.img}
              alt={item.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
