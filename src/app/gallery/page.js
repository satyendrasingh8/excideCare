import Gallery from "@/components/Gallery";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";

export const metadata = {
  title: `Shop Gallery — ${site.businessName}, Karwi`,
  description: `Photos of ${site.businessName}'s store, Exide battery stock and signage in Tulsi Nagar, Kasahai Road, Karwi, Chitrakoot Dham.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-sm font-semibold text-blue-700">Gallery</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            A Look Inside Our Store
          </h1>
          <p className="mt-5 text-slate-600 leading-relaxed">
            Real photos from {site.businessName} — our shop, our stock and our signage in Karwi,
            Chitrakoot Dham.
          </p>
        </Reveal>
        <div className="mt-10">
          <Gallery />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
