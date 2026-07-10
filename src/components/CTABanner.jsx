import Icon from "./Icon";
import { site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/links";

export default function CTABanner({
  title = "Need a Battery Today?",
  subtitle = "Call us now or message on WhatsApp — free fitting & doorstep delivery in Karwi & Chitrakoot Dham.",
}) {
  return (
    <section className="bg-red-600">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{title}</h2>
          <p className="mt-1.5 text-red-100">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href={telHref()}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-red-600 px-6 py-3 font-bold shadow hover:bg-red-50 transition-colors"
          >
            <Icon name="phone" className="w-5 h-5" />
            Call {site.primaryPhone}
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 text-white px-6 py-3 font-bold shadow hover:bg-green-600 transition-colors"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
