import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import ServicesGrid from "@/components/ServicesGrid";
import TrustPoints from "@/components/TrustPoints";
import Gallery from "@/components/Gallery";
import MapEmbed from "@/components/MapEmbed";
import CTABanner from "@/components/CTABanner";
import { site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/links";

export const metadata = {
  title: `${site.businessName} — Exide, Luminous & Amaron Battery Shop in Karwi, Chitrakoot Dham`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="absolute inset-0">
          <Image
            src={site.gallery[1].src}
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/60" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <p className="inline-flex items-center gap-2 rounded-full bg-red-600/15 border border-red-600/30 px-4 py-1.5 text-sm font-semibold text-red-400">
            Trusted Battery Dealer • Karwi, Chitrakoot Dham
          </p>
          <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-2xl">
            {site.businessName} — Genuine Exide, Luminous &amp; Amaron Batteries, Delivered &amp; Fitted Free
          </h1>
          <p className="mt-3 text-red-300 font-medium">
            Genuine parts. Fair prices. Fast doorstep service.
          </p>
          <p className="mt-5 text-lg text-neutral-300 max-w-xl">
            Car, bike, inverter, solar and commercial vehicle batteries for every home and business
            in Karwi &amp; Chitrakoot Dham. We stock Exide, Luminous, Microtek, Livguard and Amaron.
            Call us or message on WhatsApp — we deliver and fit at your doorstep the same day.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={telHref()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-bold text-white shadow-lg hover:bg-red-700 transition-colors"
            >
              <Icon name="phone" className="w-5 h-5" />
              Call {site.primaryPhone}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-7 py-3.5 font-bold text-white shadow-lg hover:bg-green-600 transition-colors"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-300">
            <span className="flex items-center gap-2">
              <Icon name="check" className="w-4 h-4 text-green-500" />
              100% Genuine Batteries, All Brands
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="w-4 h-4 text-green-500" />
              Free Fitting &amp; Delivery
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check" className="w-4 h-4 text-green-500" />
              Old Battery Exchange
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Batteries &amp; Services We Offer
          </h2>
          <p className="mt-3 text-neutral-600">
            Whatever you drive or power, Hanumat Battery Service in Tulsi Nagar, Kasahai Road has a
            genuine battery for it — Exide, Luminous, Microtek, Livguard or Amaron.
          </p>
        </div>
        <div className="mt-8">
          <ServicesGrid />
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Why Karwi &amp; Chitrakoot Trust Us
            </h2>
            <p className="mt-3 text-neutral-600">
              A local battery shop you can call anytime — genuine parts, fair prices and fast
              doorstep service.
            </p>
          </div>
          <div className="mt-8">
            <TrustPoints />
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">Our Shop &amp; Stock</h2>
            <p className="mt-3 text-neutral-600">
              A look inside Hanumat Battery Service — real photos from our store in Karwi.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 font-semibold text-red-600 hover:text-red-700"
          >
            View Full Gallery
            <Icon name="arrowRight" className="w-4 h-4" />
          </Link>
        </div>
        <div className="mt-8">
          <Gallery limit={6} />
        </div>
      </section>

      {/* Location */}
      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">Visit Our Shop</h2>
            <p className="mt-3 text-neutral-600">
              Located on Kasahai Road, Tulsi Nagar — easy to find, easy to reach.
            </p>
          </div>
          <div className="mt-8">
            <MapEmbed />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
