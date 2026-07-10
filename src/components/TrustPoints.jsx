import Icon from "./Icon";
import { site } from "@/content/site";

export default function TrustPoints() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {site.trustPoints.map((point) => (
        <div key={point.title} className="flex gap-4 rounded-2xl bg-white border border-neutral-200 p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
            <Icon name="check" className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-neutral-900">{point.title}</h3>
            <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{point.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
