import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/links";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 pb-20 md:pb-10">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white font-black">
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
                <Link href={l.href} className="hover:text-red-400 transition-colors">
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
                <a href={telHref(p.number)} className="flex items-center gap-2 hover:text-red-400 transition-colors">
                  <Icon name="phone" className="w-4 h-4 text-red-500 shrink-0" />
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
              <Icon name="clock" className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{site.hoursDisplay}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3">Visit Our Shop</h3>
          <p className="flex items-start gap-2 text-sm">
            <Icon name="mapPin" className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <span>{site.address.full}</span>
          </p>
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-red-400 hover:text-red-300"
          >
            Get Directions
            <Icon name="arrowRight" className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {site.businessName} — {site.address.locality}. All rights reserved.
          </p>
          <p>{site.address.pincode}, {site.address.state}</p>
        </div>
      </div>
    </footer>
  );
}
