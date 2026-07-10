import { site } from "@/content/site";

export default function sitemap() {
  const routes = ["", "/about", "/services", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${site.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
