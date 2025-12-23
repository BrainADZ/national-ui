"use client";

import { useEffect, useState } from "react";
import { X, Phone, Mail, Building2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  whatsappNumber?: string;
  whatsappMessage?: string;
  linkedinUrl?: string;
};

export default function FloatingActions({
  whatsappNumber = "919999999999",
  whatsappMessage = "Hi National Engineers, I’d like to enquire about your products/services.",
  linkedinUrl = "https://www.linkedin.com/company/",
}: Props) {
  const [open, setOpen] = useState(false);

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // ✅ AOS init (entry animation)
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, // ek baar animate hoga
      easing: "ease-out",
      offset: 10,
    });
  }, []);

  // ESC to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // prevent background scroll when modal open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // ✅ modal open/close pe AOS refresh (optional but helpful)
  useEffect(() => {
    AOS.refreshHard();
  }, [open]);

  return (
    <>
      {/* DESKTOP FLOATING (bottom-right) */}
      <div
        className="fixed bottom-6 right-6 z-60 hidden md:flex"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div className="flex flex-col gap-3">
          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg transition">
              <img
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                className="h-10 w-10"
              />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">WhatsApp</p>
              <p className="text-xs text-gray-500">Quick chat</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="220"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg transition">
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="h-10 w-10"
              />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-gray-900">LinkedIn</p>
              <p className="text-xs text-gray-500">Follow updates</p>
            </div>
          </a>

          {/* Enquiry */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 rounded-xl bg-[#ee9d54] px-4 py-3 shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ee9d54] hover:shadow-xl"
            data-aos="fade-up"
            data-aos-delay="290"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg">
              <img src="/icons/sms.svg" alt="Enquiry" className="h-10 w-10" />
            </span>
            <div className="text-left leading-tight">
              <p className="text-sm font-semibold text-white">Enquiry</p>
              <p className="text-xs text-white/90">Get a callback</p>
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE STICKY BAR (bottom full width) */}
      <div
        className="fixed inset-x-0 bottom-0 z-60 md:hidden"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <div className="mx-auto max-w-[1400px] border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="grid grid-cols-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-gray-900"
            >
              <img
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                className="h-5 w-5"
              />
              WhatsApp
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-gray-900"
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="h-5 w-5"
              />
              LinkedIn
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex items-center justify-center gap-2 bg-[#ee9d54] py-3 text-sm font-semibold text-white"
            >
              <img src="/icons/sms.svg" alt="Enquiry" className="h-5 w-5" />
              Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* MODAL FORM */}
      {open && (
        <div className="fixed inset-0 z-80">
          {/* overlay */}
          <button
            type="button"
            aria-label="Close enquiry form"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/55"
          />

          {/* modal */}
          <div
            className="absolute left-1/2 top-1/2 w-[92vw] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-white shadow-2xl"
            data-aos="zoom-in"
            data-aos-duration="250"
          >
            <div className="h-1.5 w-full bg-[#ee9d54]" />

            <div className="flex items-start justify-between gap-4 px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ee9d54]">
                  Enquiry
                </p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">
                  Share your requirement
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  We’ll get back to you within 24 hours.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
              className="px-6 pb-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    Full Name
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                    <Building2 className="h-4 w-4 text-gray-400" />
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full text-sm outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    Company
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                    <Building2 className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full text-sm outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    Phone
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <input
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full text-sm outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">
                    Email
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full text-sm outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-gray-700">
                  Requirement / Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you need..."
                  className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                />
              </div>

              <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#ee9d54]"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
