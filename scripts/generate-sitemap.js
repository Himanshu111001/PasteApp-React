import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple .env parser to avoid checking in dotenv dependency
const envPath = path.resolve(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8');
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim().replace(/^['"]|['"]$/g, ''); // Remove quotes if present
      process.env[key] = value;
    }
  });
}

// Default to https://pastes.in if VITE_SITE_URL is not set
const SITE_URL = process.env.VITE_SITE_URL || 'https://pastes.in';

// Helper to remove trailing slash for consistency
const cleanUrl = (url) => url.replace(/\/$/, '');

const baseUrl = cleanUrl(SITE_URL);

console.log(`Generating sitemap and robots.txt for: ${baseUrl}`);

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created dynamically based on SITE_URL -->

<url>
  <loc>${baseUrl}/</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <priority>1.0</priority>
</url>

</urlset>`;

const robotsContent = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;

const publicDir = path.resolve(__dirname, '../public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write files
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent);

console.log('✅ sitemap.xml and robots.txt generated successfully.');
