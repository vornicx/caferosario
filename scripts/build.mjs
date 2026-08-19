import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { pages } from '../src/pages.mjs';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const page of pages) {
  const file = join(dist, page.file);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page.html, 'utf8');
}
await cp(join(root, 'src/styles.css'), join(dist, 'styles.css'));
await cp(join(root, 'src/styles'), join(dist, 'styles'), { recursive: true });
await cp(join(root, 'src/client.js'), join(dist, 'client.js'));
await cp(join(root, 'public'), dist, { recursive: true });
const siteUrl = process.env.SITE_URL?.replace(/\/$/, '');
if (siteUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['','carta/','el-cafe/','visitanos/'].map((p)=>`\n  <url><loc>${siteUrl}/${p}</loc></url>`).join('')}\n</urlset>\n`;
  await writeFile(join(dist, 'sitemap.xml'), sitemap);
  await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
} else await writeFile(join(dist, 'robots.txt'), 'User-agent: *\nAllow: /\n');
await writeFile(join(dist, '_headers'), '/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n');
console.log(`Built ${pages.length} routes into dist/ with public assets`);
