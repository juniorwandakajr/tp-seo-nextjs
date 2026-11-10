export default function robots() {
    return{
        rules: { userAgent: "*", allow: "/"},
        sitemap: "https://isigform.vercel.app/sitemap.xml",
    };
}