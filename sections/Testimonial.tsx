/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul Mehta",
    role: "Head – Projects",
    company: "Mehta Chemicals Pvt. Ltd.",
    quote:
      "NESF has been consistently dependable for our capacity expansions. Their team understands process constraints and delivers equipment that performs reliably on site.",
    image: "/images/testimonials/rahul.jpg",
  },
  {
    name: "Anita Shah",
    role: "Sr. Manager – Maintenance",
    company: "Global Transport Corporation",
    quote:
      "The supplied heat exchangers have run reliably through demanding cycles. Their shutdown responsiveness and after-sales support is a strong differentiator.",
    image: "/images/testimonials/anita.jpg",
  },
  {
    name: "Vivek Kumar",
    role: "Plant Head – Utilities & ETP",
    company: "GreenFlow Industries",
    quote:
      "Strong engineering clarity, disciplined execution and transparent communication. They are a long-term partner for critical equipment and upgrades.",
    image: "/images/testimonials/vivek.jpg",
  },
  {
    name: "Sameer Patel",
    role: "GM – Operations",
    company: "Industrial Process Solutions",
    quote:
      "Professional execution from design review to commissioning. Quality documentation, safety focus and predictable timelines made delivery smooth.",
    image: "/images/testimonials/sameer.jpg",
  },
  {
    name: "Neha Joshi",
    role: "Deputy Manager – Engineering",
    company: "EcoChem Industries",
    quote:
      "Customisation support was excellent. Their team adapts designs to site constraints without compromising on standards or deliverables.",
    image: "/images/testimonials/neha.jpg",
  },
  {
    name: "Amit Verma",
    role: "Maintenance Lead",
    company: "SteelCore Ltd.",
    quote:
      "Reliable equipment and quick service support helped reduce downtime. Their team takes ownership and closes issues with clarity.",
    image: "/images/testimonials/amit.jpg",
  },
  {
    name: "Sanjay Desai",
    role: "Project Engineer",
    company: "PetroWorks India",
    quote:
      "NESF delivered within tight schedules with disciplined QA/QC. The final fit-up and inspections were handled with maturity and care.",
    image: "/images/testimonials/sanjay.jpg",
  },
  {
    name: "Priya Nair",
    role: "Process Engineering Manager",
    company: "ChemNova Solutions",
    quote:
      "Good technical discussions, practical design choices and a dependable fabrication team. We appreciate the structured approach to execution.",
    image: "/images/testimonials/priya.jpg",
  },
  {
    name: "Karan Singh",
    role: "Plant Manager",
    company: "FertiMax Industries",
    quote:
      "Their fabrication quality and adherence to standards has been consistent. The team’s coordination during installation was also strong.",
    image: "/images/testimonials/karan.jpg",
  },
  {
    name: "Rohit Jain",
    role: "Operations – Utilities",
    company: "MarineBuild Systems",
    quote:
      "Marine-grade execution and detail orientation is excellent. Reliable partner for equipment that must operate in harsh environments.",
    image: "/images/testimonials/rohit.jpg",
  },
];

export default function TestimonialsSection() {
  /**
   * Responsive visible cards:
   * - mobile: 1
   * - md: 2
   * - lg: 4
   */
  const [perView, setPerView] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setPerView(1);
      else if (w < 1024) setPerView(2);
      else setPerView(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // clones for infinite loop
  const clones = useMemo(() => {
    const head = TESTIMONIALS.slice(0, perView);
    const tail = TESTIMONIALS.slice(-perView);
    return [...tail, ...TESTIMONIALS, ...head];
  }, [perView]);

  // start at the "real" first item index (after leading clones)
  const [index, setIndex] = useState(perView);
  const [animating, setAnimating] = useState(true);

  const indexRef = useRef(index);
  const snappingRef = useRef(false);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // when perView changes, reset properly
  useEffect(() => {
    snappingRef.current = true;
    setAnimating(false);
    setIndex(perView);

    // re-enable transition after layout settles
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        snappingRef.current = false;
        setAnimating(true);
      });
    });

    return () => cancelAnimationFrame(id);
  }, [perView]);

  const snapTo = (newIndex: number) => {
    // prevent multiple transitionEnd snaps
    if (snappingRef.current) return;
    snappingRef.current = true;

    // snap WITHOUT transition
    setAnimating(false);
    setIndex(newIndex);

    // wait 2 frames so browser paints the snapped position,
    // then re-enable transition for the next move
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        snappingRef.current = false;
        setAnimating(true);
      });
    });
  };

  // after transition ends, if we are in clone region, snap without animation
  const handleTransitionEnd = () => {
    if (snappingRef.current) return;

    const realLen = TESTIMONIALS.length;
    const current = indexRef.current;

    // moved into the leading clones (left side)
    if (current < perView) {
      snapTo(current + realLen);
      return;
    }

    // moved into the trailing clones (right side)
    if (current >= perView + realLen) {
      snapTo(current - realLen);
      return;
    }
  };

  const next = () => {
    if (snappingRef.current) return;
    setIndex((p) => p + 1);
  };

  const prev = () => {
    if (snappingRef.current) return;
    setIndex((p) => p - 1);
  };

  // Each card width in %
  const itemW = 100 / perView;
  const translateX = -(index * itemW);

  const realIndex =
    ((index - perView) % TESTIMONIALS.length + TESTIMONIALS.length) %
    TESTIMONIALS.length;

  return (
    <section className="bg-white py-6 lg:py-8">
      <div className="mx-auto max-w-[1700px]  lg:px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
            Client Speak
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Trusted by engineering, operations and maintenance leaders across
            multiple industries.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div className="relative mt-12">
          <div className="relative rounded-2xl bg-white">
       

            <div className="relative px-5 py-5 sm:px-5">
              {/* Track viewport */}
              <div className="overflow-hidden">
                <div
                  onTransitionEnd={handleTransitionEnd}
                  className={[
                    "flex will-change-transform",
                    animating
                      ? "transition-transform duration-500 ease-in-out"
                      : "transition-none",
                  ].join(" ")}
                  style={{ transform: `translateX(${translateX}%)` }}
                >
                  {clones.map((t, i) => (
                    <div
                      key={`${t.name}-${i}`}
                      className="shrink-0 px-3"
                      style={{ width: `${itemW}%` }}
                    >
                      <article className="h-full rounded-xl border border-gray-200 bg-white p-6 ">
                        <div className="flex items-center gap-4">
                          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-orange-100">
                            <Image
                              src={t.image}
                              alt={t.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-gray-900">
                              {t.name}
                            </p>
                            <p className="truncate text-xs text-gray-500">
                              {t.role}
                            </p>
                          </div>

                          <div className="ml-auto hidden text-[#ee9d54] sm:block">
                            <Quote className="h-5 w-5" />
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-relaxed text-gray-700">
                          “{t.quote}”
                        </p>

                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#ee9d54]">
                          {t.company}
                        </p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-orange-50"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-md hover:bg-orange-50"
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
