import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/content/site";

export default function TrustPoints() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {site.trustPoints.map((point, index) => (
        <Reveal key={point.title} delay={Math.min(index * 80, 300)}>
          <div className="group flex gap-4 rounded-2xl bg-white border border-slate-200 p-5 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-50 to-green-100 text-green-700 group-hover:from-green-500 group-hover:to-green-600 group-hover:text-white transition-all duration-300">
              <Icon name="check" className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{point.title}</h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">{point.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
