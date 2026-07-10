import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/content/site";

export default function MapEmbed({ height = 380 }) {
  return (
    <Reveal>
    <div className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="lg:col-span-3" style={{ height }}>
        <iframe
          title={`${site.businessName} location map`}
          src={site.mapEmbedSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
      <div className="lg:col-span-2 bg-white p-6 sm:p-8 flex flex-col justify-center gap-5">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Find Us Here</h3>
          <p className="mt-2 flex items-start gap-3 text-slate-600">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Icon name="mapPin" className="w-4 h-4" />
            </span>
            <span className="pt-1.5">{site.address.full}</span>
          </p>
        </div>
        <p className="flex items-center gap-3 text-slate-600">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
            <Icon name="clock" className="w-4 h-4" />
          </span>
          {site.hoursDisplay}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-2.5 font-semibold shadow-md shadow-orange-500/25 hover:scale-105 transition-transform"
          >
            <Icon name="mapPin" className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
    </Reveal>
  );
}
