import Icon from "./Icon";
import { whatsappHref } from "@/lib/links";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="hidden md:flex fixed bottom-6 right-6 z-40 h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/40 hover:scale-110 transition-transform animate-[pulse_2.5s_ease-in-out_infinite]"
    >
      <Icon name="whatsapp" className="w-7 h-7" />
    </a>
  );
}
