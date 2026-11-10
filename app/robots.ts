export default function robots() {
    return{
        rules: { userAgent: "*", allow: "/"},
        sitemap: "https://tp-seo-nextjs-pi.vercel.app/sitemap.xml",
    };
}