import { site } from "@/content/site";

export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: site.businessName,
    alternateName: "Hanumat Battery",
    description: site.description,
    image: `${site.siteUrl}${site.gallery[0]?.src ?? ""}`,
    url: site.siteUrl,
    telephone: site.phones.map((p) => `+91${p.number}`),
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.locality,
      addressRegion: site.address.state,
      postalCode: site.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    hasMap: site.directionsUrl,
    openingHours: site.hoursSchema,
    areaServed: ["Karwi", "Chitrakoot Dham", "Chitrakoot"],
    brand: site.brands?.map((name) => ({ "@type": "Brand", name })),
    founder: {
      "@type": "Person",
      name: site.ownerName,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
