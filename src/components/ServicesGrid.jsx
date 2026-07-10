import Icon from "./Icon";
import { site } from "@/content/site";

export default function ServicesGrid({ items = site.services }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((service) => (
        <div
          key={service.title}
          className="rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
            <Icon name={service.icon} className="w-6 h-6" />
          </div>
          <h3 className="mt-4 font-bold text-neutral-900">{service.title}</h3>
          <p className="mt-1.5 text-sm text-neutral-600 leading-relaxed">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
