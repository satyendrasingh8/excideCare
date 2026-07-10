import Icon from "./Icon";
import { site } from "@/content/site";
import { telHref } from "@/lib/links";

export default function TopContactBar() {
  return (
    <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white text-sm">
      <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 min-w-0">
          <Icon name="clock" className="w-4 h-4 shrink-0 text-blue-400" />
          <span className="truncate">{site.hoursDisplay}</span>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          {[site.phones[0]].map((p) => (
            <a
              key={p.number}
              href={telHref(p.number)}
              className="flex items-center gap-1.5 font-semibold hover:text-blue-400 transition-colors"
            >
              <Icon name="phone" className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">{p.number}</span>
              <span className="sm:hidden">Call</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
