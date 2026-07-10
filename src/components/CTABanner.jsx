import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/links";

export default function CTABanner({
  title = "Need a Battery Today?",
  subtitle = "Call us now or message on WhatsApp — free fitting & doorstep delivery in Karwi & Chitrakoot Dham.",
}) {
  return (
    <section className="px-4 py-14 sm:py-16">
      <Reveal className="relative overflow-hidden mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-2xl shadow-orange-500/30">
        <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/10 blur-3xl animate-float [animation-delay:3s]" />
        <div className="relative px-6 py-10 sm:px-12 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{title}</h2>
            <p className="mt-1.5 text-orange-100">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={telHref()}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-orange-600 px-6 py-3 font-bold shadow hover:bg-orange-50 hover:scale-105 transition-all"
            >
              <Icon name="phone" className="w-5 h-5" />
              Call {site.primaryPhone}
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 font-bold shadow hover:scale-105 transition-all"
            >
              <Icon name="whatsapp" className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
