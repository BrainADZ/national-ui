/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { X, Phone, Mail, Building2, Paperclip } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

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

  // attachment state
  const [attachment, setAttachment] = useState<File | null>(null);

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
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

  // modal open/close pe AOS refresh
  useEffect(() => {
    AOS.refreshHard();
  }, [open]);

  // ✅ shared sizing so strip + icon height always same
  const ROW_H = "h-12"; // change once if needed
  const ICON_W = "w-12"; // icon box width
  const STRIP_W = "w-56"; // hover strip width

  return (
    <>
      {/* DESKTOP FLOATING (right side flush, only icons + hover strip) */}
      <div
        className="fixed right-0 top-1/2 z-60 hidden -translate-y-1/2 md:flex"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div className="flex flex-col gap-3 pr-2">
          {/* WhatsApp */}
          <Link
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center"
            aria-label="WhatsApp"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            {/* Hover strip (NO GAP, same HEIGHT) */}
            <span
              className={`pointer-events-none absolute right-12 top-0 ${ROW_H} ${STRIP_W}
              translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100`}
            >
              <span
                className={`flex ${ROW_H} w-full items-center  border border-gray-200 bg-white px-4 shadow-lg`}
              >
                <span className="text-sm font-semibold text-gray-900">
                  WhatsApp
                </span>
                <span className="ml-2 text-xs text-gray-500">Quick chat</span>
              </span>
            </span>

            {/* Icon (flush to right, same HEIGHT) */}
            <span
              className={`flex ${ROW_H} ${ICON_W} items-center justify-center border border-gray-200 bg-white shadow-lg transition hover:shadow-xl`}
            >
              <img
                src="/icons/whatsapp.svg"
                alt="WhatsApp"
                className="h-7 w-7"
              />
            </span>
          </Link>

          {/* LinkedIn */}
          <Link
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center"
            aria-label="LinkedIn"
            data-aos="fade-up"
            data-aos-delay="220"
          >
            {/* Hover strip (NO GAP, same HEIGHT) */}
            <span
              className={`pointer-events-none absolute right-12 top-0 ${ROW_H} ${STRIP_W}
              translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100`}
            >
              <span
                className={`flex ${ROW_H} w-full items-center  border border-gray-200 bg-white px-4 shadow-lg`}
              >
                <span className="text-sm font-semibold text-gray-900">
                  LinkedIn
                </span>
                <span className="ml-2 text-xs text-gray-500">Follow updates</span>
              </span>
            </span>

            {/* Icon (same HEIGHT) */}
            <span
              className={`flex ${ROW_H} ${ICON_W} items-center justify-center border border-gray-200 bg-white shadow-lg transition hover:shadow-xl`}
            >
              <img
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                className="h-7 w-7"
              />
            </span>
          </Link>

          {/* Enquiry */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative flex items-center"
            aria-label="Enquiry"
            data-aos="fade-up"
            data-aos-delay="290"
          >
            {/* Hover strip (NO GAP, same HEIGHT) */}
            <span
              className={`pointer-events-none absolute right-12 top-0 ${ROW_H} ${STRIP_W}
              translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100`}
            >
              <span
                className={`flex ${ROW_H} w-full items-center  border border-[#ee9d54]/30 bg-white px-4 shadow-lg`}
              >
                <span className="text-sm font-semibold text-gray-900">
                  Enquiry
                </span>
                <span className="ml-2 text-xs text-gray-500">Get a callback</span>
              </span>
            </span>

            {/* Icon (same HEIGHT) */}
            <span
              className={`flex ${ROW_H} ${ICON_W} items-center justify-center bg-[#ee9d54] shadow-lg transition hover:shadow-xl`}
            >
              <img src="/icons/sms.svg" alt="Enquiry" className="h-7 w-7" />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE STICKY BAR (bottom full width) */}
      <div
        className="fixed inset-x-0 bottom-0 z-60 md:hidden"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <div className="mx-auto max-w-350 border-t border-gray-200 bg-white/95 backdrop-blur">
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
                setAttachment(null);
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

                {/* Attachment */}
                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-700">
                    Attachment (optional)
                  </label>

                  <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                    <Paperclip className="h-4 w-4 text-gray-400" />

                    <input
                      type="file"
                      className="w-full text-sm outline-none file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-gray-800 hover:file:bg-gray-200"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;

                        if (file && file.size > 5 * 1024 * 1024) {
                          alert("File size should be less than 5MB.");
                          e.currentTarget.value = "";
                          setAttachment(null);
                          return;
                        }

                        setAttachment(file);
                      }}
                    />
                  </div>

                  {attachment && (
                    <p className="mt-1 text-xs text-gray-600">
                      Selected:{" "}
                      <span className="font-semibold">{attachment.name}</span>
                    </p>
                  )}
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
                  onClick={() => {
                    setOpen(false);
                    setAttachment(null);
                  }}
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
