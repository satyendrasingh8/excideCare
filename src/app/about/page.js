import Image from "next/image";
import Icon from "@/components/Icon";
import TrustPoints from "@/components/TrustPoints";
import CTABanner from "@/components/CTABanner";
import { site } from "@/content/site";

export const metadata = {
  title: `About Us — ${site.businessName}, Karwi`,
  description: `Learn about ${site.businessName}, a genuine Exide battery dealer run by ${site.ownerName} in Tulsi Nagar, Kasahai Road, Karwi, Chitrakoot Dham.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm font-semibold text-red-600">About Us</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Your Local Battery Partner in Karwi &amp; Chitrakoot Dham
          </h1>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            {site.businessName} is a genuine Exide battery dealership located on Kasahai Road,
            Tulsi Nagar, Karwi, Chitrakoot Dham. Run by <strong>{site.ownerName}</strong>, we stock
            batteries and inverters for every need — cars, bikes, three-wheelers, trucks, tractors,
            homes and shops — along with Luminous inverters and solar battery solutions.
          </p>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            We believe in fair pricing, genuine products with full manufacturer warranty, and
            service that doesn&apos;t make you wait. Call or WhatsApp us and we&apos;ll deliver and
            fit your new battery at your doorstep, anywhere in Karwi and Chitrakoot Dham.
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
