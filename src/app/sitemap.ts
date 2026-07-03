import { MetadataRoute } from "next";

const BASE_URL = "https://aprfoundation.org";

const locales = ["id", "en"];

const routes = ["", "/portfolio", "/programs"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
