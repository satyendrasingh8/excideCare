import Link from "next/link";
import Icon from "@/components/Icon";
import { telHref } from "@/lib/links";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-extrabold text-slate-900">Page Not Found</h1>
      <p className="mt-4 text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist. Head back home, or call us directly.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 font-bold text-white shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
        <a
          href={telHref()}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-bold text-slate-800 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-colors"
        >
          <Icon name="phone" className="w-4 h-4" />
          Call Us
        </a>
      </div>
    </section>
  );
}
