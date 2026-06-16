import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tirumaladental.com"; // Dynamic sitemap URLs

  const routes = [
    "",
    "/about",
    "/service",
    "/blog",
    "/privacy",
    "/cookies",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/service" || route === "/about" ? 0.8 : 0.5,
  }));
}
