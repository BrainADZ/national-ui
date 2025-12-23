/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  number: number;      // actual value for counter
  suffix?: string;     // "+", " Acres", " MT" etc.
  label: string;
};

const STATS: StatItem[] = [
  { number: 25, suffix: "+", label: "Years of Experience" },
  { number: 3000, suffix: "+", label: "Radiators Delivered" },
  { number: 1500, suffix: "+", label: "Heat Exchangers" },
  { number: 150, suffix: "+", label: "Custom Projects / Year" },
  { number: 50, suffix: "+", label: "OEM Partnerships" },
  { number: 150, suffix: "+", label: "Clients Served" },
  { number: 10, suffix: "+", label: "Countries Served" },
  { number: 9, suffix: " Acres", label: "Total Manufacturing Area" },
  { number: 250, suffix: "+", label: "Skilled Manpower" },
  { number: 2, suffix: "", label: "Clean Rooms / Labs" },
  { number: 150, suffix: " MT", label: "Max Lifting Capacity" },
  { number: 8, suffix: " MTR", label: "Max Equipment Length" },
];

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frameId: number;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, start, duration]);

  return value;
}

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // intersection observer: jab section viewport me aaye tab counters start
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#f4f5f7] py-16">
      <div className="mx-auto max-w-[1700px] px-2 md:px-4">
        <div
          ref={sectionRef}
          className="overflow-hidden bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
        >
          <div className="grid gap-2 bg-gray-200 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {STATS.map((item, index) => {
              const current = useCountUp(item.number, inView);
              const display = `${current.toLocaleString()}${item.suffix ?? ""}`;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white px-4 py-6 text-center"
                >
                  <p className="text-2xl font-bold text-[#ee9d54] md:text-3xl">
                    {display}
                  </p>
                  <p className="mt-2 text-xs font-medium text-gray-600 md:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
