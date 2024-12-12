"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: {
    id: number;
    title: string;
    image: string;
    link: string;
  }[];
}

export function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = React.useState(0);

  const prev = () => setCurrent((current - 1 + items.length) % items.length);
  const next = () => setCurrent((current + 1) % items.length);

  React.useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-lg">
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="relative min-w-full shrink-0 cursor-pointer"
            onClick={() => window.open(item.link, "_blank")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                window.open(item.link, "_blank");
              }
            }}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority={current === item.id - 1}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="上一张"
        title="上一张"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        aria-label="下一张"
        title="下一张"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2" role="tablist">
        {items.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`切换到第 ${index + 1} 张`}
            title={`切换到第 ${index + 1} 张`}
            role="tab"
            aria-selected={index === current}
          />
        ))}
      </div>
    </div>
  );
} 