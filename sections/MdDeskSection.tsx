/* eslint-disable @next/next/no-img-element */

export default function MdDeskSection() {
  return (
    <section className="relative bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1700px] px-4 lg:px-6">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ee9d54]">
            MD&apos;S DESK
          </p>

          <div className="mt-3 flex items-center justify-between gap-6">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Words from the Managing Director
            </h2>
          </div>
        </div>

        {/* Premium unified panel */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-[0_18px_50px_rgba(17,24,39,0.08)]">

          <div className="grid gap-10 p-6 md:p-10 lg:grid-cols-[360px_1fr] lg:gap-12">
            {/* LEFT: Compact profile block */}
            <aside className="lg:pt-2">
              {/* photo */}
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                <div className="h-[360px] w-full">
                  <img
                    src="/images/md-portrait.jpg"
                    alt="Mustafa Patrawala - Managing Director"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* identity */}
              <div className="mt-5">
                <p className="text-lg font-semibold text-gray-900">
                  Mustafa Patrawala
                </p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ee9d54]">
                  Managing Director
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  National Engineers &amp; Steel Fabricators (NESF)
                </p>

                {/* small trust chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
                    Since 1990
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
                    Surat, India
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
                    Engineered Steel Solutions
                  </span>
                </div>
              </div>
            </aside>

            {/* RIGHT: Message (classic reading layout) */}
            <article className="lg:pr-2">
              {/* elegant quote strip */}
              <div className="relative mb-7 rounded-2xl border border-orange-100 bg-orange-50/60 px-6 py-5">
                <div className="absolute left-5 top-3 text-5xl leading-none text-orange-200">
                  “
                </div>
                <p className="pl-9 text-sm font-semibold text-gray-900 md:text-base">
                  Quality work is remembered long after the project is completed.
                </p>
              </div>

              {/* body */}
              <div className="space-y-5 text-[15px] leading-relaxed text-gray-700">
                <p className="font-medium text-gray-900">Dear Friends,</p>

                <p>
                  At National Engineers &amp; Steel Fabricators, this belief has guided
                  us since our inception in{" "}
                  <span className="font-semibold text-gray-900">1990</span> in{" "}
                  <span className="font-semibold text-gray-900">Surat</span>, serving
                  critical sectors such as oil and gas, fertilizers, petrochemicals,
                  chemicals, steel, effluent treatment, shipbuilding, and man made
                  fibre. Our journey has been shaped by challenging assignments and the
                  long term trust of our clients in India and overseas.
                </p>

                <p>
                  We are committed to delivering engineered steel solutions that combine
                  innovative design, robust fabrication, and disciplined project quality
                  management. From pressure vessels, heat exchangers, reactors,
                  multilayer vessels, storage tanks, silos, and structural jobs to
                  complex, custom built equipment, every job is executed with a strong
                  focus on safety, reliability, and adherence to national and
                  international standards. Our team of technocrats, engineers, and
                  skilled workers is our greatest strength, and they take personal
                  ownership of each project we undertake.
                </p>

                <p>
                  We are deeply grateful for the confidence our customers place in{" "}
                  <span className="font-semibold text-gray-900">NESF</span>. Your support
                  encourages us to challenge our capabilities, invest in better
                  technology, and continuously improve our systems so that we can
                  deliver even more value in the years ahead. We look forward to earning
                  your business every day and becoming your trusted partner for
                  precision, safety, and quality in engineered steel fabrication.
                </p>
              </div>

              {/* signature row */}
              <div className="mt-9 border-t border-gray-200 pt-6">
                <div className="h-0.5 w-24 bg-[#ee9d54]" />
                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-900">
                    Mustafa Patrawala
                  </p>
                  <p className="text-xs text-gray-600">Managing Director</p>
                  <p className="text-xs font-medium text-gray-500">
                    National Engineers &amp; Steel Fabricators (NESF)
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
}
