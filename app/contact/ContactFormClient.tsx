"use client";

import { Send } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function ContactFormClient() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thanks! Your enquiry has been submitted.");
      }}
      className="mt-6 space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-gray-700">
            Full Name <span className="text-[#ee9d54]">*</span>
          </label>
          <input
            required
            name="name"
            placeholder="Your name"
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700">Company</label>
          <input
            name="company"
            placeholder="Company name"
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700">
            Email <span className="text-[#ee9d54]">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="you@company.com"
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700">
            Phone <span className="text-[#ee9d54]">*</span>
          </label>
          <input
            required
            type="tel"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
          />
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-700">
          Requirement / Message <span className="text-[#ee9d54]">*</span>
        </label>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Tell us what you need: equipment type, MOC, operating conditions, delivery timeline…"
          className="mt-1 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ee9d54] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#ee9d54]"
      >
        Submit Enquiry <Send className="h-4 w-4" />
      </button>

      <p className="text-xs text-gray-500">
        By submitting, you agree to be contacted regarding your enquiry. We do not spam.
      </p>
    </form>
  );
}
