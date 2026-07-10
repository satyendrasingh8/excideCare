import Gallery from "@/components/Gallery";
import CTABanner from "@/components/CTABanner";
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
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-red-600">Gallery</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
            A Look Inside Our Store
          </h1>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            Real photos from {site.businessName} — our shop, our stock and our signage in Karwi,
            Chitrakoot Dham.
          </p>
        </div>
        <div className="mt-10">
          <Gallery />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
