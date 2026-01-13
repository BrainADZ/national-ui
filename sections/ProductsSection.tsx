/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PRODUCTS = [
  {
    title: "Dowtherm Boiler",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=1400&fit=crop",
    tag: "Material Handling",
    description:
      "Electric and gas-fired thermal oil (Dowtherm) heating systems are designed for stable, uniform process heating without steam. They provide precise temperature control, efficient heat transfer, and reliable continuous operation, making them ideal when consistent high-temperature performance and clean, controlled heating are required.",
  },
  {
    title: "Surge Tanks",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1400&h=1400&fit=crop",
    tag: "Agriculture",
    description:
      "Surge tanks help stabilize pressure and flow by absorbing sudden spikes and fluctuations in the system. They reduce water hammer and pump cycling, protecting pumps, valves, and piping while improving overall system reliability and smooth operation.",
  },
  {
    title: "Silos / Storage Tanks",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&h=1400&fit=crop",
    tag: "Railways",
    description:
      "Silos and storage tanks built for safe, long-term storage of liquids and bulk materials with controlled filling and discharge. Designed for durability and easy integration, they can be customized with access points, venting, and required connections to suit site and process needs.",
  },
  {
    title: "Immersion Coil / Jacketed Vessel",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=1400&fit=crop",
    tag: "Power Backup",
    description:
      "Vessels with immersion coils or external jackets for efficient heating or cooling during mixing, batching, holding, or process operations. They deliver more consistent product temperatures and can be tailored with the right connections and configurations to match your heating/cooling circuit.",
  }, 
];



export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleProducts = useMemo(() => PRODUCTS, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % visibleProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + visibleProducts.length) % visibleProducts.length
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-16 lg:py-20 px-4">
      {/* subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        {/* light grid pattern */}
        <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] bg-size-[44px_44px]" />
        {/* orange glow blobs */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#EE9D54]/20 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-[#EE9D54]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-425 px-0 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#EE9D54]">
              PRODUCT RANGE
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Explore Our Efficient <span className="text-[#EE9D54]">Product</span>{" "}
              Solution
            </h2>

            <p className="mt-3 max-w-2xl text-sm text-black/70">
              Precision-built radiators designed for durability, performance and
              application-specific requirements.
            </p>
          </div>

          {/* View All */}
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-white hover:text-[#2D3436]"
          >
            View All
            <ArrowRight size={16} className="opacity-90" />
          </Link>
        </div>

        {/* Products Grid + Nav */}
        <div className="relative">
          {/* Navigation Buttons
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -ml-3 lg:-ml-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-[#EE9D54] hover:border-transparent"
            aria-label="Previous product"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 -mr-3 lg:-mr-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-[#EE9D54] hover:border-transparent"
            aria-label="Next product"
          >
            <ChevronRight size={22} />
          </button> */}

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProducts.map((product, index) => (
<div
  key={index}
  className="group relative h-full"
>
  {/* Flip container */}
  <div
    className="
      relative h-full w-full rounded-xl
      perspective-distant
    "
  >
    {/* Flipper */}
    <div
      className="
        relative h-full w-full rounded-xl
        transition-transform duration-700
        transform-3d
        group-hover:transform-[rotateY(180deg)]
      "
    >
      {/* FRONT SIDE */}
      <div
        className="
          overflow-hidden rounded-xl bg-white/5 border border-white/10 shadow-sm
          backface-hidden
        "
      >
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Premium overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/15 to-black/55 transition-all duration-300 group-hover:to-black/65" />

          {/* Tag pill */}
          {/* <div className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-[8px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            {product.tag}
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="bg-[#EE9D54] px-5 py-4 text-center">
          <h3 className="text-white font-bold text-[14px] md:text-[17px] tracking-wide">
            {product.title}
          </h3>
          <div className="mx-auto mt-2 h-0.5 w-14 bg-white/80" />
        </div>

        {/* Edge accent */}
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 transition group-hover:ring-2 group-hover:ring-[#EE9D54]/80" />
      </div>

      {/* BACK SIDE */}
      <div
        className="
          absolute inset-0 rounded-xl border border-black/10 bg-white shadow-sm
          transform-[rotateY(180deg)]
          backface-hidden
          overflow-hidden
        "
      >
        {/* Back header strip */}
        <div className="bg-[#EE9D54] px-5 py-4">
          <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            {product.tag}
          </p>
          <h3 className="mt-1 text-white font-bold text-[15px] md:text-[18px] tracking-wide">
            {product.title}
          </h3>
        </div>

        {/* Back content */}
        <div className="flex h-[calc(100%-64px)] flex-col justify-between p-5">
          <p className="text-sm text-black/70 leading-relaxed">
            {product.description}
          </p>

          <div className="mt-5">

            <p className="mt-3 text-center text-[11px] text-black/50">
              Hover out to return
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-10 border-t border-black/15">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black">
              Explore Our Online Catalogue
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-black/70">
              Download our catalogue to view complete product specifications,
              applications and custom solutions.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <Link
                href="https://drive.google.com/file/d/1dtTbRPr7q2pZ2Ev4gpbBZmmmTDN8xb2A/view" // yahan PSD/catalogue page ka route aayega
                className="group inline-flex items-center gap-2 rounded-md bg-[#EE9D54] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-lg transition hover:bg-[#d88942]"
              >
                Explore Catalogue
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
