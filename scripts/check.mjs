import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { pages } from '../src/pages.mjs';

const root = new URL('..', import.meta.url).pathname;
const required = ['src/styles.css','src/client.js','public/media/rosario-logo-clean.webp','public/media/concept-breakfast.webp','public/media/concept-social.webp','public/media/concept-interior.webp','public/media/concept-merienda.webp','public/media/concept-smoothies.webp','public/media/rosario-real-original.jpg','scripts/build.mjs','scripts/dev.mjs'];
let failed = false;
for (const file of required) {
  try { await stat(join(root,file)); } catch { console.error(`Missing: ${file}`); failed = true; }
}
for (const {file,html} of pages) {
  const checks = [
    ['lang', html.includes('<html lang="es">')],
    ['title', /<title>.+<\/title>/.test(html)],
    ['description', html.includes('name="description"')],
    ['main', html.includes('id="contenido"')],
    ['h1', html.includes('<h1')],
    ['header', html.includes('siteHeader')],
    ['footer', html.includes('siteFooter')],
    ['mobile dock policy', file === 'visitanos/index.html' ? html.includes('mobileDock') : !html.includes('mobileDock')],
    ['json-ld', html.includes('application/ld+json')],
  ];
  for (const [label,ok] of checks) if (!ok) { console.error(`${file}: ${label} check failed`); failed = true; }
}

const knownRoutes = new Set(pages.map((page) => page.file === 'index.html' ? '/' : `/${page.file.replace(/index\.html$/, '')}`));
for (const { file, html } of pages) {
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/styles.css') && !href.startsWith('/client.js') && !href.startsWith('/media/')) {
      const route = href.split('#')[0];
      if (route && !knownRoutes.has(route)) { console.error(`${file}: internal route missing: ${href}`); failed = true; }
    }
  }
}
if ([...pages].some(({html}) => html.includes('elcafederosario.es'))) { console.error('Invented production domain found'); failed = true; }
for (const {file,html} of pages) {
  const refs=[...html.matchAll(/(?:src|href)=\"(\/media\/[^\"]+)\"/g)].map(m=>m[1]);
  for (const ref of refs) { try { await stat(join(root,'public',ref.replace(/^\//,''))); } catch { console.error(`${file}: missing media ${ref}`); failed=true; } }
}
const cssMain = await readFile(join(root,'src/styles.css'),'utf8').catch(()=> '');
const cssParts = await Promise.all([1,2,3,4,5].map(i=>readFile(join(root,`src/styles/part-${i}.css`),'utf8').catch(()=>'')));
const css = cssMain + '\n' + cssParts.join('\n');
let balance = 0;
for (const char of css) { if (char === '{') balance++; if (char === '}') balance--; }
if (balance !== 0) { console.error(`CSS brace balance failed: ${balance}`); failed = true; }
if (!/@media\s*\(max-width:\s*820px\)/.test(css)) { console.error('Mobile breakpoint missing'); failed = true; }
if (!css.includes('prefers-reduced-motion')) { console.error('Reduced motion handling missing'); failed = true; }
if (failed) process.exit(1);
console.log(`Static checks: PASS (${pages.length} routes)`);
