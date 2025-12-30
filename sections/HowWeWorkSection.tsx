/* eslint-disable @next/next/no-img-element */
"use client";

const STEPS = [
  {
    title: "Product Design and Planning",
    description:
      "Our design process integrates thermofluid science, materials engineering, and digital modeling to ensure reliable, high-performance heat exchanger systems from concept to production.",
  },
  {
    title: "Materials and Component Sourcing",
    description:
      "We source technical materials and components through a rigorously qualified global supply chain, ensuring material integrity and consistency for demanding applications.",
  },
  {
    title: "Testing and Quality Control",
    description:
      "We apply advanced instrumentation and reliability engineering to verify thermal performance, structural integrity, and long-term durability.",
  },
  {
    title: "Final Assembly and Integration",
    description:
      "Final assembly combines advanced manufacturing practices with detailed inspection, ensuring systems meet customer specifications and perform reliably in the field.",
  },
];

export default function HowWeWorkSection() {
  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <section className="relative overflow-hidden md:px-0 px-2 py-16 lg:py-20">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?q=80&w=2070"
          alt="Engineering background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-425 flex-col gap-8 px-2 lg:flex-row lg:gap-10 lg:px-4">
        {/* LEFT SIDE CONTENT */}
        <div className="flex-1 lg:pr-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
            National Advantage
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white lg:text-5xl">
            How we work
          </h2>

          <div className="mt-8 space-y-6">
            {STEPS.map((step, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <div
                  key={index}
                  className="grid grid-cols-[56px_minmax(0,1fr)] gap-5"
                >
                  {/* number badge */}
                  <div className="shrink-0">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-md text-sm font-semibold transition-all duration-300 bg-black/60 text-white "
                    >
                      {number}
                    </div>
                  </div>

                  {/* title + description */}
                  <div className="grid gap-2 md:grid-cols-[260px_minmax(0,1fr)]">
                    <h3 className="text-base font-semibold text-white md:text-lg">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-200">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE FORM CARD */}
        <div className="flex-1 lg:max-w-md lg:self-stretch">
          <div className="h-full rounded-lg bg-white shadow-2xl overflow-hidden">
            {/* top accent */}
            <div className="h-1 w-full bg-[#ee9d54]" />

            <div className="p-6 md:p-7 lg:p-8">
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
                We&apos;d Love to Hear From You
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Your feedback helps us improve. Share your ideas or requirements
                with us.
              </p>

              <div className="mt-5 space-y-3">
                <input
                  type="text"
                  placeholder="FULL NAME"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm placeholder:text-gray-500 outline-none transition focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm placeholder:text-gray-500 outline-none transition focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                />

                <input
                  type="text"
                  placeholder="Feedback / Suggestion"
                  className="w-full rounded border border-gray-300 px-4 py-2.5 text-sm placeholder:text-gray-500 outline-none transition focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                />

                <textarea
                  rows={4}
                  placeholder="Write Your Message"
                  className="w-full resize-none rounded border border-gray-300 px-4 py-2.5 text-sm placeholder:text-gray-500 outline-none transition focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                />

                <button
                  onClick={handleSubmit}
                  className="mt-1 w-full rounded bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#ee9d54]"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
