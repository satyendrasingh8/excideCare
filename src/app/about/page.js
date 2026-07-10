import Image from "next/image";
import Icon from "@/components/Icon";
import TrustPoints from "@/components/TrustPoints";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
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
        <Reveal>
          <p className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-sm font-semibold text-blue-700">About Us</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Your Local Battery Shop in Karwi &amp; Chitrakoot Dham
          </h1>
          <p className="mt-5 text-slate-600 leading-relaxed">
            We&apos;re on Kasahai Road, Tulsi Nagar, run by <strong>{site.ownerName}</strong>. Car, bike,
            tractor, truck, home or shop — we&apos;ve got a genuine battery for it, from Exide, Luminous,
            Microtek, Livguard and Amaron.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Fair prices, genuine batteries with full warranty, and no long waits. Call or WhatsApp
            us and we&apos;ll deliver and fit your new battery right at your door, anywhere in Karwi and
            Chitrakoot Dham.
          </p>
          <div className="mt-6 flex items-center gap-3 rounded-xl bg-blue-50 border border-blue-100 px-5 py-4">
            <Icon name="mapPin" className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="text-sm text-slate-700">{site.address.full}</span>
          </div>
        </Reveal>
        <Reveal delay={150} className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={site.gallery[2].src}
            alt={site.gallery[2].alt}
            fill
            className="object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal>
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 max-w-2xl">
              What Makes Us Different
            </h2>
          </Reveal>
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
