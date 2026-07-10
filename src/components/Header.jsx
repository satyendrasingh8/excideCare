"use client";

import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { site } from "@/content/site";
import { telHref } from "@/lib/links";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-neutral-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 min-w-0" onClick={() => setOpen(false)}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-white font-black text-lg">
              H
            </span>
            <span className="min-w-0">
              <span className="block text-lg font-extrabold text-neutral-900 leading-tight truncate">
                {site.businessName}
              </span>
              <span className="block text-xs text-neutral-500 leading-tight truncate">
                Exide Battery Dealer, Karwi
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-red-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={telHref()}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 transition-colors shadow"
            >
              <Icon name="phone" className="w-4 h-4" />
              Call Now
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              className="md:hidden p-2 text-neutral-700"
              onClick={() => setOpen((v) => !v)}
            >
              <Icon name={open ? "x" : "menu"} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-neutral-200 bg-white px-4 py-3 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-neutral-700 hover:text-red-600"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={telHref()}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-bold text-white"
          >
            <Icon name="phone" className="w-4 h-4" />
            Call {site.primaryPhone}
          </a>
        </nav>
      )}
    </header>
  );
}
