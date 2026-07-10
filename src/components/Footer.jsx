import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/content/site";
import { categoryPages } from "@/content/categoryPages";
import { telHref, whatsappHref } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-300 pb-20 md:pb-10">
      <div className="h-[3px] bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500" />
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-black shadow-md shadow-blue-600/30">
              H
            </span>
            <span className="text-lg font-extrabold text-white">{site.businessName}</span>
          </div>
          <p className="text-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-3 text-sm">Proprietor: {site.ownerName}</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/gallery", label: "Gallery" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact & Location" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-blue-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">Contact Us</h3>
          <ul className="space-y-2.5 text-sm">
            {site.phones.map((p) => (
              <li key={p.number}>
                <a href={telHref(p.number)} className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Icon name="phone" className="w-4 h-4 text-blue-400 shrink-0" />
                  {p.number}
                </a>
              </li>
            ))}
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-400 transition-colors"
              >
                <Icon name="whatsapp" className="w-4 h-4 text-green-500 shrink-0" />
                Chat on WhatsApp
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="clock" className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>{site.hoursDisplay}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">Visit Our Shop</h3>
          <p className="flex items-start gap-2 text-sm">
            <Icon name="mapPin" className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>{site.address.full}</span>
          </p>
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300"
          >
            Get Directions
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h3 className="text-white font-bold mb-3 text-sm">Popular Battery Searches</h3>
          <ul className="flex flex-wrap gap-2 text-sm">
            {categoryPages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/${page.slug}`}
                  className="inline-flex rounded-full border border-slate-800 px-3 py-1 hover:border-blue-500 hover:text-blue-400 transition-colors"
                >
                  {page.kicker}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {site.businessName} — {site.address.locality}. All rights reserved.
          </p>
          <p>{site.address.pincode}, {site.address.state}</p>
        </div>
      </div>
    </footer>
  );
}
