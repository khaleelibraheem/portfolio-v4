export async function GET() {
  const baseUrl = "https://khaleelalhaji.info";
  const pages = [
    "",        // Homepage
    "projects",
    // Add more pages as needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const path = page === "" ? "/" : `/${page}`;
      return `
    <url>
      <loc>${baseUrl}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${page === "" ? 1.0 : 0.8}</priority>
    </url>`;
    })
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}