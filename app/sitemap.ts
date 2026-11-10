import type { MetadataRoute} from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    return [{ url: "https://tp-seo-nextjs-pi.vercel.app/", priority: 1 }];
}