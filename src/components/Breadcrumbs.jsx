import Link from "next/link";
import { site } from "@/content/site";

export default function Breadcrumbs({ trail }) {
  // trail: [{ label, href }] — final item has no href (current page)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Home", href: "/" }, ...trail].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.siteUrl}${item.href ?? ""}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>
        </li>
        {trail.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <span>/</span>
            {index === trail.length - 1 || !item.href ? (
              <span className="text-neutral-700">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-red-600">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
