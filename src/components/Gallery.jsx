import Image from "next/image";
import { site } from "@/content/site";

export default function Gallery({ items = site.gallery, limit }) {
  const photos = limit ? items.slice(0, limit) : items;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          {photo.caption && (
            <figcaption className="px-4 py-3 text-sm font-medium text-neutral-700">
              {photo.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
