import ServicesGrid from "@/components/ServicesGrid";
import CTABanner from "@/components/CTABanner";
import { site } from "@/content/site";

export const metadata = {
  title: `Battery Services in Karwi & Chitrakoot — ${site.businessName}`,
  description:
    "Car, bike, inverter, solar and commercial vehicle batteries with free fitting, doorstep delivery, battery charging and old battery exchange in Karwi and Chitrakoot Dham.",
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
            has genuine Exide and Luminous options ready in stock — with free fitting and
            doorstep delivery across Karwi and Chitrakoot Dham.
          </p>
        </div>
        <div className="mt-10">
          <ServicesGrid />
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Battery You Need?"
        subtitle="Tell us your vehicle or inverter model on a call or WhatsApp — we'll recommend the right battery."
      />
    </>
  );
}
