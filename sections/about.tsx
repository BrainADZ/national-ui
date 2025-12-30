/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type TabKey = "story" | "mission" | "vision";

const TAB_CONTENT: Record<TabKey, string> = {
  story:
    "To emerge as a trusted leader in precision engineering and fabrication, recognized for excellence, reliability, and long-lasting value We envision a future where our pressure vessels, heat exchangers, boilers, structural steelwork, and custom-engineered solutions consistently set industry benchmarks for safety, quality, and innovation.Rooted in integrity and driven by continuous improvement, we aim to empower our people, elevate our capabilities, and build enduring partnerships with clients across industries. NESF aspires to contribute to a resilient, technology-forward industrial landscape by delivering engineering solutions that stand strong for generations.",
  mission:
    "Our mission is to deliver high-quality, safe, and reliable engineering and fabrication solutions that meet the evolving needs of our clients and industries. We are committed to manufacturing precision-built pressure vessels, heat exchangers, boilers, structural steelwork, and custom-fabricated components with uncompromising attention to detail and adherence to established standards.",
  vision:
    "Through innovation, disciplined processes, transparent communication, and a culture of continuous improvement, we strive to complete every project with excellence and on schedule.We aim to foster long-term relationships, empower our workforce, and contribute to India’s industrial growth by consistently providing engineering solutions that clients trust and value.",
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("story");

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto flex max-w-425 flex-col gap-10 px-2 lg:flex-row lg:px-4">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-gray-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
            About NESF
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
            Precision Manufacturing | Industrial Solutions |
            <br />
            <span className="text-[#ee9d54]">Nationwide Expertise</span>
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-gray-600 md:text-base">
            Welcome to National Engineers where advanced manufacturing meets
            application-driven engineering. With decades of experience in
            radiators and heat-transfer products, we partner with OEMs and
            end-users to deliver tailored solutions, reliable performance, and
            continuous innovation.
          </p>

          {/* TABS */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-0 overflow-x-auto ">
              {(
                [
                  ["story", "National Story"],
                  ["mission", "Mission"],
                  ["vision", "Vision"],
                ] as [TabKey, string][]
              ).map(([key, label]) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-8 py-4 text-sm font-semibold transition-colors border 
                      ${
                        isActive
                          ? "bg-white border-gray-300 text-gray-900"
                          : "bg-gray-100 border-transparent text-gray-600 hover:bg-gray-200"
                      }
                    `}
                  >
                    {label}
                    {isActive && (
                      <div className="mt-3 h-0.75 w-full bg-[#ee9d54]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 max-w-3xl text-sm leading-relaxed text-gray-700 md:text-base">
              {TAB_CONTENT[activeTab]}
            </div>
          </div>

          {/* CTA BUTTON */}
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#ee9d54] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#ee9d54]">
            Explore More
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative h-65 w-full overflow-hidden rounded-lg shadow-lg sm:h-80 lg:h-95">
            <img
              src="/1.webp"
              alt="National Engineers facility"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
