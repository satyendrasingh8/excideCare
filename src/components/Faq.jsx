import Icon from "./Icon";

export default function Faq({ items }) {
  if (!items?.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="space-y-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {items.map((item) => (
        <details
          key={item.q}
          className="group rounded-2xl border border-neutral-200 bg-white p-5 open:shadow-sm"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-neutral-900 list-none">
            {item.q}
            <Icon
              name="arrowRight"
              className="w-4 h-4 shrink-0 text-red-600 transition-transform group-open:rotate-90"
            />
          </summary>
          <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
