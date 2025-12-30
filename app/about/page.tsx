/* eslint-disable @next/next/no-img-element */
import MissionVisionSection from "@/sections/about/MissionVisionSection";
import MdDeskSection from "@/sections/MdDeskSection";
import Link from "next/link";

type Props = {
    title?: string;
    breadcrumbCurrent?: string;
    imageUrl?: string; // right side image
};

export default function AboutHero({
    title = "NESF History",
    breadcrumbCurrent = "About NESF",
    imageUrl =
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop",
}: Props) {
    return (
        <>
            <section className="relative">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src={imageUrl}
                        alt="Gallery"
                        className="h-full w-full object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/15" />
                    {/* Subtle orange accent overlay */}
                    <div className="absolute inset-0 bg-[#ee9d54]/10 mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="relative pt-16 md:pt-2">
                    <div className="mx-auto max-w-425 px-2 py-1 lg:px-4 lg:py-24">
                        {/* Breadcrumbs */}
                        <nav className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                            <ol className="flex flex-wrap items-center gap-2">
                                <li>
                                    <Link href="/" className="hover:text-white">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-white/40">/</li>
                                <li className="text-orange-300">{breadcrumbCurrent}</li>
                            </ol>
                        </nav>

                        {/* Title block */}
                        <div className="mt-5 max-w-2xl">
                            <h1 className="text-3xl font-bold text-white md:text-4xl">
                                {title}
                            </h1>

                            <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                                A quick look at our work, facilities, products, events, and on-ground execution.
                            </p>

                        </div>
                    </div>
                </div>

                {/* Bottom separator for clean transition */}
                <div className="h-10 w-full bg-linear-to-b from-black/10 to-white" />
            </section>
            <MissionVisionSection />
            <MdDeskSection />
        </>
    );
}
