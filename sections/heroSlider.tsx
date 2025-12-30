// components/home/HeroSlider.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
};

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Heavy-Duty Truck Radiators Built for the Long Haul",
    subtitle:
      "Built to excel under heavy loads, extreme climates, and relentless mileage.",
    cta: "Explore More",
    href: "/products/truck-radiators",
    image: "/1.webp", 
  },
  {
    id: 2,
    title: "Engineered Cooling Solutions for Every Industry",
    subtitle:
      "From power plants to heavy vehicles, we design radiators that keep systems running.",
    cta: "View Industries",
    href: "/industries",
    image: "/2.webp",
  },
  {
    id: 3,
    title: "National Engineers – Passion for Performance",
    subtitle:
      "Precision-built heat exchangers backed by strong R&D and field experience.",
    cta: "About Us",
    href: "/about",
    image: "/3.webp",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () =>
    setActiveIndex((prev) =>
      prev === 0 ? SLIDES.length - 1 : prev - 1
    );

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)] min-h-145 w-full overflow-hidden">
      {SLIDES.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out
            ${isActive ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"}`}
          >
            {/* BG image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/10" />
            </div>

            {/* Content */}
            <div className="relative z-30 mx-auto flex h-full max-w-425 items-center px-4 lg:px-6">
              <div className="max-w-2xl text-white">
                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                  {slide.title}
                </h1>
                <p className="mb-8 text-sm font-medium md:text-base text-gray-100">
                  {slide.subtitle}
                </p>

                <Link
                  href={slide.href}
                  className="inline-flex items-center gap-2 rounded-md bg-[#ee9d54] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#ee9d54]"
                >
                  {slide.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        );
      })}

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-900 shadow hover:bg-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-900 shadow hover:bg-white"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition
              ${index === activeIndex ? "bg-[#ee9d54]" : "bg-white/60"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
