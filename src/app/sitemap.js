import { site } from "@/content/site";
import { categoryPages } from "@/content/categoryPages";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/gallery", "/contact"];
  const categoryRoutes = categoryPages.map((page) => `/${page.slug}`);

  return [...routes, ...categoryRoutes].map((route) => ({
    url: `${site.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : categoryRoutes.includes(route) ? 0.8 : 0.7,
  }));
}
