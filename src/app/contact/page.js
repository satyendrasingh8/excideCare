import Icon from "@/components/Icon";
import MapEmbed from "@/components/MapEmbed";
import { site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/links";

export const metadata = {
  title: `Contact & Location — ${site.businessName}, Kasahai Road Karwi`,
  description: `Call, WhatsApp or visit ${site.businessName} at ${site.address.full}. Open ${site.hoursDisplay}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-red-600">Contact Us</p>
        <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Call, WhatsApp or Visit Us Today
        </h1>
        <p className="mt-5 text-neutral-600 leading-relaxed">
          We&apos;re happy to help — over the phone, on WhatsApp, or in person at our shop in
          Tulsi Nagar, Kasahai Road, Karwi.
        </p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {site.phones.map((p) => (
          <a
            key={p.number}
            href={telHref(p.number)}
            className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 shrink-0">
              <Icon name="phone" className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-neutral-900">{p.number}</p>
              <p className="text-sm text-neutral-500">{p.label}</p>
            </div>
          </a>
        ))}

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 shrink-0">
            <Icon name="whatsapp" className="w-6 h-6" />
          </div>
          <div>
            <p className="font-bold text-neutral-900">WhatsApp Us</p>
            <p className="text-sm text-neutral-500">Chat instantly</p>
          </div>
        </a>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-extrabold text-neutral-900">Our Location</h2>
        <div className="mt-6">
          <MapEmbed height={420} />
        </div>
      </div>
    </section>
  );
}
