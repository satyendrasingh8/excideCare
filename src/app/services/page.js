import Link from "next/link";
import Icon from "@/components/Icon";
import ServicesGrid from "@/components/ServicesGrid";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import { site } from "@/content/site";
import { categoryPages } from "@/content/categoryPages";

export const metadata = {
  title: `Battery Services in Karwi & Chitrakoot — ${site.businessName}`,
  description:
    "Car, bike, inverter, solar and commercial vehicle batteries — Exide, Luminous, Microtek, Livguard & Amaron — with free fitting, doorstep delivery, charging and old battery exchange in Karwi and Chitrakoot Dham.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-sm font-semibold text-blue-700">Our Services</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Battery Sales, Fitting &amp; Exchange in Karwi &amp; Chitrakoot Dham
          </h1>
          <p className="mt-5 text-slate-600 leading-relaxed">
            From a small bike battery to a heavy commercial truck battery, {site.businessName}{" "}
            has genuine Exide, Luminous, Microtek, Livguard and Amaron options ready in stock —
            with free fitting and doorstep delivery across Karwi and Chitrakoot Dham.
          </p>
        </Reveal>
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <Reveal className="max-w-2xl">
            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Explore Battery Types in Detail
            </h2>
            <p className="mt-3 text-slate-600">
              Full details, popular vehicle models and answers to common questions for each
              battery type we sell.
            </p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryPages.map((page, index) => (
              <Reveal key={page.slug} delay={Math.min(index * 70, 300)}>
                <Link
                  href={`/${page.slug}`}
                  className="group block rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 hover:bg-white transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300">
                    <Icon name={page.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {page.kicker}
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {page.heroSubtitle}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                    Learn more
                    <Icon name="arrowRight" className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Battery You Need?"
        subtitle="Tell us your vehicle or inverter model on a call or WhatsApp — we'll recommend the right battery."
      />
    </>
  );
}
