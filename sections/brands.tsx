"use client";

/* eslint-disable @next/next/no-img-element */
import { useMemo } from "react";

type BrandLogo = {
  name: string;
  src: string;
  href?: string; // optional: click to open brand page
};

const BRAND_LOGOS: BrandLogo[] = [
  { name: "Brand 1", src: "/brands/brand1.png" },
  { name: "Brand 2", src: "/brands/brand2.png" },
  { name: "Brand 3", src: "/brands/brand3.png" },
  { name: "Brand 4", src: "/images/brands/brand-4.png" },
  { name: "Brand 5", src: "/images/brands/brand-5.png" },
  { name: "Brand 6", src: "/images/brands/brand-6.png" },
];

export default function BrandLogosCarousel() {
  // Duplicate array for seamless loop
  const track = useMemo(() => [...BRAND_LOGOS, ...BRAND_LOGOS], []);

  // If you have very few logos, this prevents weird spacing
  const hasEnough = BRAND_LOGOS.length >= 6;

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-425 px-2 lg:px-4">
        {/* Heading */}
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ee9d54]">
              OUR ASSOCIATED BRANDS
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
              Trusted by Brands & Partners
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600">
              A snapshot of brands and partners associated with NESF across projects and sectors.
            </p>
          </div>

          
        </div>

        {/* Carousel */}
        <div className="relative mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white">
          {/* top accent */}
          <div className="h-1 w-full bg-[#ee9d54]" />

          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-14 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-14 bg-linear-to-l from-white to-transparent" />

          <div className="p-6 md:p-8">
            <div className="group overflow-hidden">
              <div
                className={[
                  "flex w-max items-center gap-10",
                  "animate-logo-marquee",
                  "group-hover:[animation-play-state:paused]",
                  !hasEnough ? "gap-14" : "",
                ].join(" ")}
              >
                {track.map((logo, i) => {
                  const item = (
                    <div
                      key={`${logo.name}-${i}`}
                      className="flex h-20 w-48 items-center justify-center rounded-xl border border-gray-100 bg-white px-4 shadow-[0_6px_18px_rgba(17,24,39,0.06)]"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-h-16 w-auto max-w-35 object-contain opacity-90 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                        loading="lazy"
                      />
                    </div>
                  );

                  if (logo.href) {
                    return (
                      <a
                        key={`${logo.name}-${i}`}
                        href={logo.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={logo.name}
                        className="outline-none focus-visible:ring-2 focus-visible:ring-[#ee9d54] focus-visible:ring-offset-2"
                      >
                        {item}
                      </a>
                    );
                  }

                  return item;
                })}
              </div>
            </div>

            {/* small note */}
            {/* <p className="mt-5 text-center text-xs text-gray-500">
              Hover to pause. Logos are shown for representation purposes.
            </p> */}
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx global>{`
        @keyframes logoMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-logo-marquee {
          animation: logoMarquee 22s linear infinite;
        }

        /* slower on small screens */
        @media (max-width: 640px) {
          .animate-logo-marquee {
            animation-duration: 28s;
          }
        }
      `}</style>
    </section>
  );
}
