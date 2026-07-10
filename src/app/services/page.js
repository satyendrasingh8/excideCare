import Link from "next/link";
import Icon from "@/components/Icon";
import ServicesGrid from "@/components/ServicesGrid";
import CTABanner from "@/components/CTABanner";
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
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-red-600">Our Services</p>
          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
            Battery Sales, Fitting &amp; Exchange in Karwi &amp; Chitrakoot Dham
          </h1>
          <p className="mt-5 text-neutral-600 leading-relaxed">
            From a small bike battery to a heavy commercial truck battery, {site.businessName}{" "}
            has genuine Exide, Luminous, Microtek, Livguard and Amaron options ready in stock —
            with free fitting and doorstep delivery across Karwi and Chitrakoot Dham.
          </p>
        </div>
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Explore Battery Types in Detail
            </h2>
            <p className="mt-3 text-neutral-600">
              Full details, popular vehicle models and answers to common questions for each
              battery type we sell.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="group rounded-2xl border border-neutral-200 bg-neutral-50 p-6 hover:shadow-lg hover:-translate-y-0.5 hover:bg-white transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <Icon name={page.icon} className="w-6 h-6" />
                </div>
                <h3 className="mt-4 font-bold text-neutral-900 group-hover:text-red-600 transition-colors">
                  {page.kicker}
                </h3>
                <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">
                  {page.heroSubtitle}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red-600">
                  Learn more
                  <Icon name="arrowRight" className="w-3.5 h-3.5" />
                </span>
              </Link>
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
