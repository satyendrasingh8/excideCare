import { site } from "@/content/site";

export function telHref(number = site.primaryPhone) {
  return `tel:+91${number}`;
}

export function whatsappHref(message = site.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}
