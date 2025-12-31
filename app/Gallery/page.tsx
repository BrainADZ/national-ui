/* eslint-disable @next/next/no-img-element */
import path from "path";
import fs from "fs/promises";
import GalleryClient from "@/components/gallery/GalleryClient";
import Link from "next/link";

const ALLOWED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function getGalleryImages() {
    const dir = path.join(process.cwd(), "public", "gallery");

    try {
        const files = await fs.readdir(dir);

        const images = files
            .filter((f) => ALLOWED.has(path.extname(f).toLowerCase()))
            // sort: newest first (optional). If you prefer A-Z, remove stat sorting.
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
            .map((f) => ({
                src: `/gallery/${f}`,
                alt: f.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
            }));

        return images;
    } catch {
        // If folder doesn't exist or empty
        return [];
    }
}

export default async function GalleryPage() {
    const images = await getGalleryImages();

    return (
        <main className="bg-white">
            {/* Hero */}
            {/* HERO (image + overlay) */}
            <section className="relative">
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        src="/3.webp"
                        alt="Gallery"
                        className="h-full w-full object-cover"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/15" />
                    {/* Subtle orange accent overlay */}
                    <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
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
                                <li className="text-orange-300">Gallery</li>
                            </ol>
                        </nav>

                        {/* Title block */}
                        <div className="mt-5 max-w-2xl">
                            <h1 className="text-3xl font-bold text-white md:text-4xl">
                                Gallery
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


            {/* Grid + Lightbox */}
            <GalleryClient images={images} />
        </main>
    );
}
