import Icon from "./Icon";
import { site } from "@/content/site";
import { telHref, whatsappHref } from "@/lib/links";

export default function MobileStickyCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-2 rounded-t-2xl overflow-hidden shadow-[0_-8px_24px_rgba(0,0,0,0.2)]">
      <a
        href={telHref()}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-3.5 text-sm active:from-orange-600 active:to-orange-700"
      >
        <Icon name="phone" className="w-5 h-5" />
        Call Now
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3.5 text-sm active:from-green-700 active:to-green-800"
      >
        <Icon name="whatsapp" className="w-5 h-5" />
        WhatsApp
      </a>
    </div>
  );
}
