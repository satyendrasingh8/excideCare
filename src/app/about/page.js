import Image from "next/image";
import Icon from "@/components/Icon";
import TrustPoints from "@/components/TrustPoints";
import CTABanner from "@/components/CTABanner";
import { site } from "@/content/site";

export const metadata = {
  title: `About Us — ${site.businessName}, Karwi`,
  description: `Learn about ${site.businessName}, a genuine battery dealer for Exide, Luminous, Microtek, Livguard and Amaron, run by ${site.ownerName} in Tulsi Nagar, Kasahai Road, Karwi, Chitrakoot Dham.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold text-red-600">About Us</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Your Local Battery Shop in Karwi &amp; Chitrakoot Dham
          </h1>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            We&apos;re on Kasahai Road, Tulsi Nagar, run by <strong>{site.ownerName}</strong>. Car, bike,
            tractor, truck, home or shop — we&apos;ve got a genuine battery for it, from Exide, Luminous,
            Microtek, Livguard and Amaron.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Fair prices, genuine batteries with full warranty, and no long waits. Call or WhatsApp
            us and we&apos;ll deliver and fit your new battery right at your door, anywhere in Karwi and
            Chitrakoot Dham.
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-red-50 border border-red-100 px-5 py-4">
            <Icon name="mapPin" className="w-5 h-5 text-red-600 shrink-0" />
            <span className="text-sm text-neutral-700">{site.address.full}</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={site.gallery[2].src}
            alt={site.gallery[2].alt}
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 max-w-2xl">
            What Makes Us Different
          </h2>
          <div className="mt-8">
            <TrustPoints />
          </div>
        </div>
      </section>

      <CTABanner
        title="Have a Question?"
        subtitle="Talk to us directly — we're happy to help you pick the right battery."
      />
    </>
  );
}
