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
      "We manufacture engineered, custom-fabricated steel process equipment which includes pressure vessels, air receivers, heat exchangers, reactors & boilers, process piping skids, storage tanks & silos, along with structural steelwork and HVAC ducting.",
  },
  {
    question: "Do you provide custom-designed solutions?",
    answer:
      "Yes. Most of our work is application-specific. We design around your process data, operating conditions, layout constraints, and site requirements, then deliver end-to-end execution from engineering & detailing to fabrication, erection, and commissioning which ensures the final equipment fits your plant and performs reliably.",
  },
  {
    question: "Which industries do you actively serve?",
    answer:
      "We support a wide range of industries including Oil & Gas, Chemicals & Petrochemicals, Fertilizers, Effluent Treatment, Steel, Shipbuilding, and Man-made Fibers, delivering dependable equipment built for demanding industrial service.",
  },
  {
    question: "What is your typical project turnaround time?",
    answer:
      "Lead time varies by scope, design complexity, approvals, and material availability. For standard or repeat designs, we can usually deliver faster, while custom-engineered equipment is planned with a clear project schedule and covers engineering, procurement, fabrication, inspection/testing, and dispatch/erection which is agreed at the ordering stage. We keep you updated throughout and can prioritize/expedite when required to meet critical shutdown or commissioning dates.",
  },
  {
    question: "How do you ensure quality and reliability?",
    answer:
      "We follow a disciplined QA/QC system, use qualified welding procedures, and maintain full traceability. Our safety-first culture and code-compliant practices help ensure consistent quality, reliable performance, and on-time delivery.",
  },
    {
    question: "What materials do you work with?",
    answer:
      "We fabricate in Mild Steel, Stainless Steel, and other specialty/exotic metals as required by the application which is selected to match your process conditions, corrosion requirements, and applicable standards.",
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
