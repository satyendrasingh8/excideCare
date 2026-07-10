import Icon from "./Icon";
import { site } from "@/content/site";

export default function MapEmbed({ height = 380 }) {
  return (
    <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
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
          <h3 className="text-lg font-bold text-neutral-900">Find Us Here</h3>
          <p className="mt-2 flex items-start gap-2 text-neutral-600">
            <Icon name="mapPin" className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            {site.address.full}
          </p>
        </div>
        <p className="flex items-center gap-2 text-neutral-600">
          <Icon name="clock" className="w-5 h-5 text-red-600 shrink-0" />
          {site.hoursDisplay}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={site.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 text-white px-5 py-2.5 font-semibold hover:bg-red-700 transition-colors"
          >
            <Icon name="mapPin" className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}
