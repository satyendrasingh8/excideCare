import Icon from "./Icon";
import Reveal from "./Reveal";

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
      {items.map((item, index) => (
        <Reveal key={item.q} delay={Math.min(index * 70, 280)}>
          <details className="group rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-300 open:border-blue-300 open:shadow-md transition-colors duration-300">
            <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-slate-900 list-none">
              {item.q}
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 group-open:bg-blue-600 group-open:text-white transition-colors duration-300">
                <Icon
                  name="arrowRight"
                  className="w-3.5 h-3.5 transition-transform duration-300 group-open:rotate-90"
                />
              </span>
            </summary>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.a}</p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
