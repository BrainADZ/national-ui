"use client";

/* eslint-disable @next/next/no-img-element */
type Advantage = {
  title: string;
  description: string;
  iconSrc: string; // <-- your svg / png
  highlight?: boolean;
};

const ADVANTAGES: Advantage[] = [
  {
    title: "Cost-Effective Solutions",
    description:
      "Optimised engineering and in-house fabrication enable us to deliver cost-effective solutions without compromising on quality, safety standards, or long-term operational reliability.",
    iconSrc: "/icons/1.png",
  },
  {
    title: "Engineering Excellence",
    description:
      "A disciplined, process-driven approach supported by qualified engineers, rigorous quality assurance systems, and adherence to national and international codes ensures consistent excellence across all projects.",
    iconSrc: "/icons/2.svg",
    highlight: true,
  },
  {
    title: "Assured Performance",
    description:
      "Thermal, mechanical, and structural performance is validated through proven design practices, detailed calculations, inspections, and successful field performance across multiple industries.",
    iconSrc: "/icons/3.svg",
  },
  {
    title: "Skilled & Experienced Team",
    description:
      "Our strength lies in a dedicated team of experienced engineers, supervisors, and technicians capable of executing critical, custom-built, and high-pressure equipment with precision and accountability.",
    iconSrc: "/icons/4.svg",
  },
];

export default function CompetitiveAdvantageSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-350 px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 md:text-3xl">
            Our Competitive Advantage
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-gray-600 md:text-base">
            A strong foundation of engineering discipline, modern infrastructure,
            and customer-focused execution that enables National Engineers to deliver
            dependable solutions for demanding industrial applications.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {ADVANTAGES.map(({ title, description, iconSrc}) => (
            <div
              key={title}
              className={`relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl border border-gray-200 bg-white
                
              `}
            >
              {/* top accent */}
              
              {/* icon + title */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-50 ring-1 ring-orange-100">
                  <img
                    src={iconSrc}
                    alt={`${title} icon`}
                    className="h-12 w-12 object-contain"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-base font-semibold text-gray-900">
                  {title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
