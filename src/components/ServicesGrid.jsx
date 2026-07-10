import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/content/site";

const palette = [
  {
    bar: "bg-blue-500",
    border: "border-blue-100 hover:border-blue-300",
    icon: "bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white",
    title: "group-hover:text-blue-600",
    link: "text-blue-600",
  },
  {
    bar: "bg-orange-500",
    border: "border-orange-100 hover:border-orange-300",
    icon: "bg-gradient-to-br from-orange-50 to-orange-100 text-orange-600 group-hover:from-orange-600 group-hover:to-orange-700 group-hover:text-white",
    title: "group-hover:text-orange-600",
    link: "text-orange-600",
  },
  {
    bar: "bg-emerald-500",
    border: "border-emerald-100 hover:border-emerald-300",
    icon: "bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700 group-hover:text-white",
    title: "group-hover:text-emerald-600",
    link: "text-emerald-600",
  },
  {
    bar: "bg-violet-500",
    border: "border-violet-100 hover:border-violet-300",
    icon: "bg-gradient-to-br from-violet-50 to-violet-100 text-violet-600 group-hover:from-violet-600 group-hover:to-violet-700 group-hover:text-white",
    title: "group-hover:text-violet-600",
    link: "text-violet-600",
  },
  {
    bar: "bg-teal-500",
    border: "border-teal-100 hover:border-teal-300",
    icon: "bg-gradient-to-br from-teal-50 to-teal-100 text-teal-600 group-hover:from-teal-600 group-hover:to-teal-700 group-hover:text-white",
    title: "group-hover:text-teal-600",
    link: "text-teal-600",
  },
  {
    bar: "bg-rose-500",
    border: "border-rose-100 hover:border-rose-300",
    icon: "bg-gradient-to-br from-rose-50 to-rose-100 text-rose-600 group-hover:from-rose-600 group-hover:to-rose-700 group-hover:text-white",
    title: "group-hover:text-rose-600",
    link: "text-rose-600",
  },
  {
    bar: "bg-amber-500",
    border: "border-amber-100 hover:border-amber-300",
    icon: "bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600 group-hover:from-amber-600 group-hover:to-amber-700 group-hover:text-white",
    title: "group-hover:text-amber-600",
    link: "text-amber-600",
  },
  {
    bar: "bg-cyan-500",
    border: "border-cyan-100 hover:border-cyan-300",
    icon: "bg-gradient-to-br from-cyan-50 to-cyan-100 text-cyan-600 group-hover:from-cyan-600 group-hover:to-cyan-700 group-hover:text-white",
    title: "group-hover:text-cyan-600",
    link: "text-cyan-600",
  },
];

export default function ServicesGrid({ items = site.services }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((service, index) => {
        const Wrapper = service.href ? Link : "div";
        const wrapperProps = service.href ? { href: service.href } : {};
        const c = palette[index % palette.length];

        return (
          <Reveal key={service.title} delay={Math.min(index * 60, 300)}>
            <Wrapper
              {...wrapperProps}
              className={`group flex h-full flex-col rounded-2xl border bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${c.border}`}
            >
              <div className={`h-1 w-8 rounded-full mb-4 ${c.bar}`} />
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${c.icon}`}
              >
                <Icon name={service.icon} className="w-6 h-6" />
              </div>
              <h3 className={`mt-4 font-bold text-slate-900 transition-colors ${c.title}`}>
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{service.description}</p>
              {service.href && (
                <span className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${c.link}`}>
                  Learn more
                  <Icon name="arrowRight" className="w-3.5 h-3.5" />
                </span>
              )}
            </Wrapper>
          </Reveal>
        );
      })}
    </div>
  );
}
