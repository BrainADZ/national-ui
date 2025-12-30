"use client";

/**
 * Put your video here:
 * /public/videos/hero.mp4
 * (optional) /public/videos/hero.webm
 * (optional) /public/images/hero-poster.jpg
 */

// import Link from "next/link";

export default function HeroVideoSection() {
  return (
    <section className="relative h-[30vh] md:h-[92vh] min-h-37.5 md:min-h-155 w-full overflow-hidden">
      {/* BG VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg"
      >
        {/* If you have webm, keep it first */}
        {/* <source src="/videos/hero.webm" type="video/webm" /> */}
        <source src="/National Engineers Reel.mp4" type="video/mp4" />
      </video>

      {/* OVERLAYS */}
      {/* <div className="absolute inset-0 bg-black/55" /> */}
      {/* subtle orange glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#ee9d54]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#ee9d54]/10 blur-3xl" />


      {/* bottom gradient to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-black/30" />
    </section>
  );
}
