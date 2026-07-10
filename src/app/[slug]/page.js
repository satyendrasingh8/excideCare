import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Breadcrumbs from "@/components/Breadcrumbs";
import VehicleModelBadges from "@/components/VehicleModelBadges";
import Faq from "@/components/Faq";
import MapEmbed from "@/components/MapEmbed";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
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
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl animate-float" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl animate-float [animation-delay:2s]" />
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-20 animate-fade-in-up">
          <Breadcrumbs trail={[{ label: page.kicker }]} />

          <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600/15 border border-blue-600/30 px-4 py-1.5 text-sm font-semibold text-blue-400 backdrop-blur">
            {page.kicker}
          </p>
          <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight max-w-2xl">
            {page.h1}
          </h1>
          <p className="mt-5 text-lg text-slate-300 max-w-xl">{page.heroSubtitle}</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={telHref()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <Icon name="phone" className="w-5 h-5" />
              Call {site.primaryPhone}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-green-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Intro + Hindi callout */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <Reveal className="max-w-3xl space-y-5 text-slate-600 leading-relaxed">
          {page.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>

        {page.hindiLine && (
          <Reveal as="p" delay={100} className="mt-6 max-w-3xl rounded-2xl bg-blue-50 border border-blue-100 px-5 py-4 text-slate-800">
            {page.hindiLine}
          </Reveal>
        )}

        {page.models.length > 0 && (
          <Reveal delay={200} className="mt-8 max-w-3xl">
            <VehicleModelBadges label={page.modelsLabel} models={page.models} />
          </Reveal>
        )}
      </section>

      {/* Highlights */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <Reveal>
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Why Choose Us for {page.kicker}
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {page.highlights.map((item, index) => (
              <Reveal key={item.title} delay={Math.min(index * 80, 300)}>
                <div className="group flex gap-4 rounded-2xl bg-slate-50 border border-slate-200 p-5 hover:bg-white hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300">
                    <Icon name={page.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <Reveal>
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Frequently Asked Questions</h2>
        </Reveal>
        <div className="mt-8 max-w-3xl">
          <Faq items={page.faqs} />
        </div>
      </section>

      {/* Location */}
      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <Reveal>
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Visit Our Shop</h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              {site.address.full} — open {site.hoursDisplay.toLowerCase()}.
            </p>
          </Reveal>
          <div className="mt-8">
            <MapEmbed />
          </div>
        </div>
      </section>

      {/* Related pages */}
      {relatedPages.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <Reveal>
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">Related Battery Services</h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedPages.map((related, index) => (
              <Reveal key={related.slug} delay={Math.min(index * 80, 300)}>
                <a
                  href={`/${related.slug}`}
                  className="group block rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300">
                    <Icon name={related.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {related.kicker}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Learn more
                    <Icon name="arrowRight" className="w-3.5 h-3.5" />
                  </span>
                </a>
              </Reveal>
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
