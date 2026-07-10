import Icon from "@/components/Icon";
import MapEmbed from "@/components/MapEmbed";
import Reveal from "@/components/Reveal";
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
      <Reveal className="max-w-2xl">
        <p className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-3.5 py-1 text-sm font-semibold text-blue-700">Contact Us</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
          Call, WhatsApp or Visit Us Today
        </h1>
        <p className="mt-5 text-slate-600 leading-relaxed">
          We&apos;re happy to help — over the phone, on WhatsApp, or in person at our shop in
          Tulsi Nagar, Kasahai Road, Karwi.
        </p>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {site.phones.map((p, index) => (
          <Reveal key={p.number} delay={Math.min(index * 80, 300)}>
            <a
              href={telHref(p.number)}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 shrink-0 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300">
                <Icon name="phone" className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">{p.number}</p>
                <p className="text-sm text-slate-500">{p.label}</p>
              </div>
            </a>
          </Reveal>
        ))}

        <Reveal delay={Math.min(site.phones.length * 80, 300)}>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-green-100 text-green-600 shrink-0 group-hover:from-green-500 group-hover:to-green-600 group-hover:text-white transition-all duration-300">
              <Icon name="whatsapp" className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-slate-900">WhatsApp Us</p>
              <p className="text-sm text-slate-500">Chat instantly</p>
            </div>
          </a>
        </Reveal>
      </div>

      <div className="mt-14">
        <Reveal>
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 mb-4" />
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">Our Location</h2>
        </Reveal>
        <div className="mt-6">
          <MapEmbed height={420} />
        </div>
      </div>
    </section>
  );
}
