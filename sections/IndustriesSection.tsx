"use client";

/* eslint-disable @next/next/no-img-element */
type Industry = {
  name: string;
  description: string;
  details: string;
  iconSrc: string; // <-- you will add your svg/png here
};

const INDUSTRIES: Industry[] = [
  {
    name: "Man-Made Fiber",
    description:
      "Process equipment for synthetic fiber manufacturing plants.",
    details:
      "Fabrication of pressure vessels, heat exchangers, and tanks tailored for polymerization and fiber production processes operating under controlled temperature and pressure conditions.",
    iconSrc: "/icons/flask.svg",
  },
  {
    name: "Steel Plants",
    description:
      "Heavy-duty fabrication for steel processing plants.",
    details:
      "Manufacture of process equipment, ducting, and structural components engineered to withstand extreme thermal loads, abrasive environments, and continuous plant operations.",
    iconSrc: "/icons/i-beam.svg",
  },
  {
    name: "Chemicals & Petrochemicals",
    description:
      "Equipment for aggressive chemical and petrochemical environments.",
    details:
      "Design and fabrication of pressure vessels and heat exchangers suitable for high-pressure, high-temperature, and corrosive service conditions.",
    iconSrc: "/icons/oil-refinery.svg",
  },
  {
    name: "Fertilizers",
    description:
      "Engineered equipment for fertilizer plants.",
    details:
      "Fabrication of process equipment for urea and ammonia plants, manufactured in compliance with stringent safety norms and international engineering standards.",
    iconSrc: "/icons/agriculture.svg",
  },
  {
    name: "Ship Building",
    description:
      "Marine-grade fabrication solutions.",
    details:
      "Manufacture of tanks, pressure vessels, and structural assemblies designed for corrosive marine environments, ensuring durability and compliance with marine regulations.",
    iconSrc: "/icons/anchor.svg",
  },
  {
    name: "Effluent Treatment",
    description:
      "Solutions for wastewater and effluent treatment systems.",
    details:
      "Fabrication of tanks and process equipment for effluent treatment plants handling corrosive effluents and variable operating conditions.",
    iconSrc: "/icons/water.svg",
  },
];


export default function IndustriesSection() {
  return (
    <section className="bg-[#f4f5f7] py-16 lg:py-20">
      <div className="mx-auto max-w-[1700px] px-2 lg:px-4">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
            Industries
          </p>
          <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
            Actively Serving Industries
          </h2>
          <p className="mt-3 text-sm text-gray-600 md:text-base">
            National Engineers partners with a wide range of process and
            manufacturing industries, delivering application-engineered
            heat-transfer and pressure equipment designed for demanding operating
            conditions.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map(({ name, description, details, iconSrc }) => (
            <div
              key={name}
              className="group relative flex h-full flex-col  border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-[#ee9d54]/80 opacity-0 transition group-hover:opacity-100" />

              <div className="flex items-start gap-4">
                {/* Icon wrapper */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 ring-1 ring-orange-100 transition group-hover:bg-orange-100">
                  <img
                    src={iconSrc}
                    alt={`${name} icon`}
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-gray-900">
                    {name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">{description}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {details}
              </p>

              {/* Bottom accent */}
              <div className="mt-6 h-[3px] w-16 rounded-full bg-[#ee9d54]/70 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
