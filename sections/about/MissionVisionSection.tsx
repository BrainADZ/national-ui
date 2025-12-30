/* eslint-disable @next/next/no-img-element */

export default function MissionVisionSection() {
    return (
        <section className="bg-white py-6 lg:py-8">
            <div className="mx-auto max-w-425 px-6 lg:px-4">
                {/* TOP CONTENT */}
                <div data-aos="fade-up">
                    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#ee9d54]">
                        Company Profile
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
                        National Engineers &amp; Steel Fabricators (NESF)
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        National Engineers &amp; Steel Fabricators (NESF), established in
                        1990, delivers end-to-end steel fabrication, from engineering,
                        design, and detailing to manufacturing, erection, and commissioning.
                        We build pressure vessels and air receivers, heat exchangers,
                        reactors and boilers, process piping skids, storage tanks and silos,
                        structural steelwork, and HVAC ducts.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        Our disciplined Quality Assurance/Quality Control, qualified welding
                        procedures, and safety-first culture drive reliability and full
                        traceability, while our planning and execution practices support
                        on-time delivery, all in accordance with applicable industry codes
                        and standards. We serve clients across Oil &amp; Gas, Chemicals &amp;
                        Petrochemicals, Fertilizers, Effluent Treatment, Steel, Shipbuilding
                        and Man-made Fibers, bringing practical engineering, transparent
                        communication, and a life-cycle-cost focus so assets run better,
                        longer, and safer.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        Over 35 years, we have earned repeat business through consistent
                        workmanship and dependable schedules, whether custom one-offs or
                        multi-unit builds.
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-gray-700 md:text-base">
                        Guided by continuous improvement, we deliver to spec and on schedule.
                        As Managing Director Mustafa Patrawala notes, “Our promise is simple:
                        do the basics right every time and keep raising the bar.” That
                        philosophy treats clients as partners, backed by clear drawings,
                        clean fabrication, and safe sites, and creates long-term value
                        equipment that is easy to operate, safe to maintain, and built to
                        last.
                    </p>
                </div>

                {/* QUALITY POLICY */}
                <div className="mt-12" data-aos="fade-up" data-aos-delay="240">
                    <h3 className="text-lg font-bold text-orange-600">Quality Policy</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-700 md:text-base">
                        We are committed to achieving total customer satisfaction by
                        delivering high-quality fabricated steel structures and components
                        that meet customer statutory and regulatory requirements. We ensure
                        on-time delivery through efficient resource utilization, process
                        control, and continuous improvement in our operations. Our success
                        is driven by active employee participation, teamwork, and a strong
                        commitment to enhancing the effectiveness of our Quality Management
                        System.
                    </p>
                </div>
                {/* MISSION */}
                <div
                    className="mt-12 grid gap-6 md:grid-cols-[160px_1fr]"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className="flex items-center justify-center rounded-2xl border border-[#ee9d54] p-6">
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-sm font-semibold text-black">Mission</p>

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ee9d54]">
                                <img
                                    src="/icons/mission.svg"
                                    alt="Mission"
                                    className="h-12 w-12"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="text-sm leading-relaxed text-black/85 md:text-base">
                        Our mission is to deliver high-quality, safe, and reliable engineering and fabrication solutions that meet the evolving needs of our clients and industries.
                        We are committed to manufacturing precision-built pressure vessels, heat exchangers, boilers, structural steelwork, and custom-fabricated components with uncompromising attention to detail and adherence to established standards.
                        <br />
                        Through innovation, disciplined processes, transparent communication, and a culture of continuous improvement, we strive to complete every project with excellence and on schedule.<br />
                        We aim to foster long-term relationships, empower our workforce, and contribute to India’s industrial growth by consistently providing engineering solutions that clients trust and value.
                    </div>
                </div>

                {/* VISION */}
                <div
                    className="mt-10 grid gap-6 md:grid-cols-[160px_1fr]"
                    data-aos="fade-up"
                    data-aos-delay="180"
                >
                    <div className="flex items-center justify-center rounded-2xl border border-[#ee9d54] bg-transparent p-6">
                        <div className="flex flex-col items-center gap-3">
                            <p className="text-sm font-semibold text-black">Vision</p>

                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ee9d54]">
                                <img
                                    src="/icons/vision.svg"
                                    alt="Vision"
                                    className="h-12 w-12"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="text-sm leading-relaxed text-black/85 md:text-base">
                        To emerge as a trusted leader in precision engineering and fabrication, recognized for excellence, reliability, and long-lasting value.
                        We envision a future where our pressure vessels, heat exchangers, boilers, structural steelwork, and custom-engineered solutions consistently set industry benchmarks for safety, quality, and innovation.
                        <br />
                        Rooted in integrity and driven by continuous improvement, we aim to empower our people, elevate our capabilities, and build enduring partnerships with clients across industries. NESF aspires to contribute to a resilient, technology-forward industrial landscape by delivering engineering solutions that stand strong for generations.
                    </div>
                </div>

            </div>
        </section>
    );
}
