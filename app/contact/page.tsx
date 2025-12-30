/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Building2, Phone, Mail, Clock, MapPin, Send, FileText } from "lucide-react";
import ContactFormClient from "./ContactFormClient";
import FaqSection from "@/sections/Accordian";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Contact National Engineers & Steel Fabricators | Surat, Gujarat",
    description:
        "Contact National Engineers & Steel Fabricators (NESF) in Surat for pressure vessels, heat exchangers, reactors, storage tanks, silos and engineered steel fabrication. Request a quote or technical discussion.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact National Engineers & Steel Fabricators (NESF)",
        description:
            "Get in touch for engineered steel fabrication and process equipment. Request a quote, share drawings, and speak to our technical team.",
        url: "/contact",
        type: "website",
    },
};

const INFO = [
    {
        title: "Head Office",
        lines: ["National Engineers & Steel Fabricators (NESF)", "Surat, Gujarat, India"],
        icon: Building2,
    },
    {
        title: "Phone",
        lines: ["+91 99XXXXXX90", "+91 98XXXXXX12"],
        icon: Phone,
    },
    {
        title: "Email",
        lines: ["sales@nationalengrs.com", "info@nationalengrs.com"],
        icon: Mail,
    },
    {
        title: "Working Hours",
        lines: ["Mon–Sat: 10:00 AM – 7:00 PM", "Sunday: Closed"],
        icon: Clock,
    },
    {
        title: "Location",
        lines: ["Surat – Industrial Area", "Gujarat, India"],
        icon: MapPin,
    },
];

const FAQ = [
    {
        q: "What information should I share for an accurate quotation?",
        a: "Share equipment type, size/capacity, material of construction, operating pressure & temperature, applicable code/standard, and preferred delivery timeline. Drawings/specifications help speed up the process.",
    },
    {
        q: "Do you support custom fabrication and complex engineered equipment?",
        a: "Yes. We fabricate custom-built equipment such as pressure vessels, heat exchangers, reactors, storage tanks, silos and structural jobs as per national/international standards and project requirements.",
    },
    {
        q: "How soon will I get a response after submitting the form?",
        a: "Typically within 24 working hours. If clarifications are needed, our team will reach out by phone/email.",
    },
];

export default function ContactPage() {
    return (
        <main className="bg-white ">
            {/* HERO */}
            <section className="relative overflow-hidden"
                data-aos="fade-left"
                data-aos-delay="100"
            >
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2400&auto=format&fit=crop"
                        alt="Industrial fabrication facility"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55" />
                    <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#ee9d54]/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#ee9d54]/10 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-[1700px] px-6 py-16 lg:px-5 lg:py-20">
                    {/* Breadcrumbs */}
                    <nav className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                        <ol className="flex flex-wrap items-center gap-2">
                            <li>
                                <Link href="/" className="hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white/40">/</li>
                            <li className="text-orange-300">Contact</li>
                        </ol>
                    </nav>
                    <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                        Let’s discuss your fabrication requirement
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                        Share your project details, drawings, or specifications. Our technical team will respond
                        with the right approach, timeline, and quotation.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#enquiry"
                            className="rounded-lg bg-[#ee9d54] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#ee9d54]"
                        >
                            Send Enquiry
                        </a>
                        <a
                            href="#location"
                            className="rounded-lg border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                        >
                            View Location
                        </a>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                                Response Time
                            </p>
                            <p className="mt-1 text-sm font-semibold text-white">
                               Within 24 business hours
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                                Share drawings
                            </p>
                            <p className="mt-1 text-sm font-semibold text-white">PDF / DWG / STEP supported</p>
                        </div>
                        <div className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                                Location
                            </p>
                            <p className="mt-1 text-sm font-semibold text-white">Surat, Gujarat (India)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INFO GRID */}
            <section className="bg-white py-14 lg:py-16"
                data-aos="fade-right"
                data-aos-delay="100"
            >
                <div className="mx-auto max-w-[1700px] px-6 lg:px-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
                        Contact Details
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                        Reach the right team, faster
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-gray-600 md:text-base">
                        Use the enquiry form for quotations and project discussions. For urgent matters, call
                        directly during working hours.
                    </p>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        {INFO.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-[#ee9d54]">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                                    </div>

                                    <div className="mt-3 space-y-1 text-sm text-gray-600">
                                        {item.lines.map((l) => (
                                            <p key={l}>{l}</p>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FORM + SIDE HELP */}
            <section id="enquiry" className="bg-[#f7f8fa] py-16 lg:py-20"

            >
                <div className="mx-auto grid max-w-[1700px] gap-10 px-6 lg:grid-cols-2 lg:gap-12 lg:px-0">
                    {/* Left content */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
                            Enquiry Form
                        </p>
                        <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                            Request a quote or technical discussion
                        </h2>
                        <p className="mt-3 max-w-xl text-sm text-gray-600 md:text-base">
                            For accurate quoting, share equipment type, material of construction, capacity,
                            operating conditions and any drawings/specifications available.
                        </p>

                        <div className="mt-7 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#ee9d54]">
                                        <FileText className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold text-gray-900">What to include</p>
                                </div>
                                <ul className="mt-3 space-y-2 text-sm text-gray-600">
                                    <li>• In MOC (SS, MS, Aluminum, etc.)</li>
                                    <li>• Equipment Type & Size</li>
                                    <li>• Pressure/Temperature</li>
                                    <li>• Delivery Location & Timeline</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-[#ee9d54]">
                                        <Send className="h-5 w-5" />
                                    </div>
                                    <p className="text-sm font-bold text-gray-900">Response SLA</p>
                                </div>
                                <p className="mt-3 text-sm text-gray-600">
                                    We typically respond within 24 working hours with next steps and clarifications.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right form */}
                    <div className=" border border-gray-200 bg-white shadow-xl"
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <div className="h-1.5 w-full  bg-[#ee9d54]" />
                        <div className="p-6 md:p-8">
                            <h3 className="text-xl font-bold text-gray-900">Send us a message</h3>
                            <p className="mt-2 text-sm text-gray-600">
                                We’ll route your enquiry to the relevant technical team.
                            </p>
                            <ContactFormClient />
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section id="location" className="bg-white py-16 lg:py-20">
                <div className="mx-auto max-w-425 px-6 lg:px-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#ee9d54]">
                        Location
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                        Visit our facility in Surat
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm text-gray-600 md:text-base">
                        You can schedule a visit for technical discussion, inspection or project kickoff.
                    </p>

                    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
                        <iframe
                            title="National Engineers location map"
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4580.561601274817!2d72.85553627525819!3d21.088028080576244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA1JzE2LjkiTiA3MsKwNTEnMjkuMiJF!5e1!3m2!1sen!2sin!4v1767095847429!5m2!1sen!2sin"
                            width="100%"
                            height="420"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FaqSection />
        </main>

    );
}
