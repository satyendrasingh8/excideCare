import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Breadcrumbs from "@/components/Breadcrumbs";
import VehicleModelBadges from "@/components/VehicleModelBadges";
import Faq from "@/components/Faq";
import MapEmbed from "@/components/MapEmbed";
import CTABanner from "@/components/CTABanner";
import { site } from "@/content/site";
import { categoryPages, getCategoryBySlug } from "@/content/categoryPages";
import { telHref, whatsappHref } from "@/lib/links";

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getCategoryBySlug(slug);
  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${site.siteUrl}/${page.slug}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const page = getCategoryBySlug(slug);
  if (!page) notFound();

  const relatedPages = page.relatedSlugs
    .map((relatedSlug) => getCategoryBySlug(relatedSlug))
    .filter(Boolean);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.metaDescription,
    provider: {
      "@type": "AutomotiveBusiness",
      name: site.businessName,
      telephone: `+91${site.primaryPhone}`,
      address: site.address.full,
    },
    areaServed: ["Karwi", "Chitrakoot Dham", "Chitrakoot"],
    url: `${site.siteUrl}/${page.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <Breadcrumbs trail={[{ label: page.kicker }]} />

          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-red-600/15 border border-red-600/30 px-4 py-1.5 text-sm font-semibold text-red-400">
            {page.kicker}
          </p>
          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white leading-tight max-w-2xl">
            {page.h1}
          </h1>
          <p className="mt-5 text-lg text-neutral-300 max-w-xl">{page.heroSubtitle}</p>

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
        </div>
      </section>

      {/* Intro + Hindi callout */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="max-w-3xl space-y-5 text-neutral-600 leading-relaxed">
          {page.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        {page.hindiLine && (
          <p className="mt-6 max-w-3xl rounded-2xl bg-red-50 border border-red-100 px-5 py-4 text-neutral-800">
            {page.hindiLine}
          </p>
        )}

        {page.models.length > 0 && (
          <div className="mt-8 max-w-3xl">
            <VehicleModelBadges label={page.modelsLabel} models={page.models} />
          </div>
        )}
      </section>

      {/* Highlights */}
      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Why Choose Us for {page.kicker}
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {page.highlights.map((item) => (
              <div key={item.title} className="flex gap-4 rounded-2xl bg-neutral-50 border border-neutral-200 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
                  <Icon name={page.icon} className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">Frequently Asked Questions</h2>
        <div className="mt-8 max-w-3xl">
          <Faq items={page.faqs} />
        </div>
      </section>

      {/* Location */}
      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">Visit Our Shop</h2>
          <p className="mt-3 text-neutral-600 max-w-2xl">
            {site.address.full} — open {site.hoursDisplay.toLowerCase()}.
          </p>
          <div className="mt-8">
            <MapEmbed />
          </div>
        </div>
      </section>

      {/* Related pages */}
      {relatedPages.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">Related Battery Services</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedPages.map((related) => (
              <a
                key={related.slug}
                href={`/${related.slug}`}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Icon name={related.icon} className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                  {related.kicker}
                </h3>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                  Learn more
                  <Icon name="arrowRight" className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </section>
      )}

      <CTABanner
        title={`Need ${page.kicker}?`}
        subtitle="Call us now or message on WhatsApp — free fitting & doorstep delivery in Karwi & Chitrakoot Dham."
      />
    </>
  );
}
