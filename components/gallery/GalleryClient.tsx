"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";
// Optional plugins (uncomment if you install plugins)
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type GalleryImage = { src: string; alt: string };

export default function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(-1);

  const hasImages = images?.length > 0;

  // Lightbox slides format
  const slides = useMemo(
    () =>
      (images || []).map((img) => ({
        src: img.src,
        alt: img.alt,
      })),
    [images]
  );

  return (
    <section className="bg-[#f4f5f7] py-12 lg:py-16">
      <div className="mx-auto max-w-[1700px] px-6 lg:px-8">
        {!hasImages ? (
          <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center">
            <p className="text-sm font-semibold text-gray-900">No images found</p>
            <p className="mt-2 text-sm text-gray-600">
              Add images to{" "}
              <span className="font-semibold">/public/gallery</span> and refresh.
            </p>
          </div>
        ) : (
          <div
            className="
              grid gap-4
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-6
            "
          >
            {images.map((img, idx) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(idx)}
                className="
                  group relative overflow-hidden  border border-gray-200 bg-white
                  shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ee9d54] focus-visible:ring-offset-2
                "
                aria-label={`Open image ${idx + 1}`}
              >
                {/* Equal height tiles */}
                <div className="relative h-[170px] w-a sm:h-[190px] lg:h-[210px]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    // sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  />
                </div>

                {/* subtle overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox (Library) */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
        // Plugins (optional)
        plugins={[Zoom, Thumbnails]}
        // carousel={{ finite: false }} // infinite loop feel
        // controller={{ closeOnBackdropClick: true }}
      />
    </section>
  );
}
