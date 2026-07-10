import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import ServicesGrid from "@/components/ServicesGrid";
import TrustPoints from "@/components/TrustPoints";
import Gallery from "@/components/Gallery";
import MapEmbed from "@/components/MapEmbed";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
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
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <Image
            src={site.gallery[1].src}
            alt=""
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        </div>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl animate-float" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl animate-float [animation-delay:2s]" />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24 animate-fade-in-up">
          <p className="inline-flex items-center gap-2 rounded-full bg-blue-600/15 border border-blue-600/30 px-4 py-1.5 text-sm font-semibold text-blue-400 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Trusted Battery Dealer • Karwi, Chitrakoot Dham
          </p>
          <h1 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              {site.businessName}
            </span>{" "}
            — Genuine Exide, Luminous &amp; Amaron Batteries, Delivered &amp; Fitted Free
          </h1>
          <p className="mt-3 text-blue-300 font-medium">
            Genuine parts. Fair prices. Fast doorstep service.
          </p>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">
            Car, bike, inverter, solar and commercial vehicle batteries for every home and business
            in Karwi &amp; Chitrakoot Dham. We stock Exide, Luminous, Microtek, Livguard and Amaron.
            Call us or message on WhatsApp — we deliver and fit at your doorstep the same day.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={telHref()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 hover:scale-[1.03] hover:shadow-orange-500/50 active:scale-[0.98] transition-all duration-200"
            >
              <Icon name="phone" className="w-5 h-5" />
              Call {site.primaryPhone}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 hover:scale-[1.03] hover:shadow-green-500/50 active:scale-[0.98] transition-all duration-200"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-200">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 backdrop-blur px-3.5 py-1.5">
              <Icon name="check" className="w-4 h-4 text-green-400" />
              100% Genuine Batteries, All Brands
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 backdrop-blur px-3.5 py-1.5">
              <Icon name="check" className="w-4 h-4 text-green-400" />
              Free Fitting &amp; Delivery
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 backdrop-blur px-3.5 py-1.5">
              <Icon name="check" className="w-4 h-4 text-green-400" />
              Old Battery Exchange
            </span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Batteries &amp; Services We Offer
          </h2>
          <p className="mt-3 text-slate-600">
            Whatever you drive or power, Hanumat Battery Service in Tulsi Nagar, Kasahai Road has a
            genuine battery for it — Exide, Luminous, Microtek, Livguard or Amaron.
          </p>
        </Reveal>
        <div className="mt-8">
          <ServicesGrid />
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Why Karwi &amp; Chitrakoot Trust Us
            </h2>
            <p className="mt-3 text-slate-600">
              A local battery shop you can call anytime — genuine parts, fair prices and fast
              doorstep service.
            </p>
          </Reveal>
          <div className="mt-8">
            <TrustPoints />
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal className="max-w-2xl">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Our Shop &amp; Stock</h2>
            <p className="mt-3 text-slate-600">
              A look inside Hanumat Battery Service — real photos from our store in Karwi.
            </p>
          </Reveal>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 font-semibold text-blue-600 hover:text-blue-700 hover:gap-2.5 transition-all"
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
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <Reveal className="max-w-2xl">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Visit Our Shop</h2>
            <p className="mt-3 text-slate-600">
              Located on Kasahai Road, Tulsi Nagar — easy to find, easy to reach.
            </p>
          </Reveal>
          <div className="mt-8">
            <MapEmbed />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
