"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "What kind of equipment does National Engineers manufacture?",
    answer:
      "We specialize in radiators, heat exchangers, pressure vessels, reactors, columns and custom-fabricated process equipment for a wide range of industries.",
  },
  {
    question: "Do you provide custom-designed solutions?",
    answer:
      "Yes. Most of our work is application-specific. We work with your process data, layouts and operating conditions to design equipment that fits your exact requirement.",
  },
  {
    question: "Which industries do you actively serve?",
    answer:
      "We serve chemical plants, effluent treatment, steel and power, fertilizers, petrochemicals, ship-building, man-made fibre and other process industries.",
  },
  {
    question: "What is your typical project turnaround time?",
    answer:
      "Lead times depend on design complexity and material availability. Standard repeat designs are delivered faster, while custom projects are scheduled with clear timelines agreed at order stage.",
  },
  {
    question: "How do you ensure quality and reliability?",
    answer:
      "Our facilities follow strict QA procedures with material traceability, qualified welding procedures, NDT, hydro / pneumatic testing and final inspection as per relevant standards.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#f4f5f7] py-16 lg:py-20">
      <div className="mx-auto max-w-[1100px] px-2 lg:px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
            FAQ
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 md:text-base">
            Answers to some of the common questions about our capabilities,
            products and way of working with National Engineers.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={index}
                className="rounded-lg bg-white shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-gray-900 md:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform ${
                      isOpen ? "rotate-180 text-[#ee9d54]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-gray-200 px-5 py-4 text-sm leading-relaxed text-gray-600">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
