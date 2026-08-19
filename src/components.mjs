import { icons } from './icons.mjs';
import { routes, site } from './site.mjs';

const navLink=(route,current)=>`<a href="${route.path}" class="${route.path===current?'active':''}">${route.label}</a>`;

export function header(current){
  return `<header class="siteHeader" data-site-header><div class="headerInner">
    <a href="/" class="brand" aria-label="El Café de Rosario, inicio"><span class="brandFrame"><img src="${site.logoOriginal}" alt="El Café de Rosario"></span></a>
    <nav class="desktopNav" aria-label="Navegación principal">${routes.slice(1).map(r=>navLink(r,current)).join('')}</nav>
    <div class="navActions"><a class="headerCta" href="/carta/">Carta</a><button class="menuButton" type="button" aria-expanded="false" aria-controls="mobile-menu"><span class="srOnly">Abrir menú</span><span data-menu-icon>${icons.menu}</span></button></div>
  </div><div id="mobile-menu" class="mobileMenu" aria-hidden="true"><div class="mobileMenuTop"><span class="brandFrame large"><img src="${site.logoOriginal}" alt="El Café de Rosario"></span><span>Av. del Genil · Écija</span></div><nav>${routes.map((r,i)=>`<a href="${r.path}" class="${r.path===current?'active':''}"><span>0${i+1}</span>${r.label}</a>`).join('')}</nav><div class="mobileMenuMeta"><a href="${site.phoneHref}">${site.phoneDisplay}</a><a href="${site.instagram}" target="_blank" rel="noreferrer">Instagram ${icons.arrow}</a></div></div></header>`;
}

export function footer(){
  return `<footer class="siteFooter"><div class="shell footerTop"><div class="footerBrand"><span class="brandFrame large"><img src="${site.logoOriginal}" alt="El Café de Rosario"></span><p>Desayunos, meriendas y una carta que da para volver.</p></div><nav><a href="/carta/">Carta</a><a href="/el-cafe/">El café</a><a href="/visitanos/">Visítanos</a></nav><div class="footerContact"><a href="${site.phoneHref}">${site.phoneDisplay}</a><a href="${site.instagram}" target="_blank" rel="noreferrer">@el_cafe_de_rosario ↗</a></div></div><div class="shell footerBottom"><span>Av. del Genil · Écija</span><span>© 2026 El Café de Rosario</span><a href="#contenido">Volver arriba ↑</a></div></footer>`;
}

export function mobileDock(){return `<div class="mobileDock"><a href="${site.directions}" target="_blank" rel="noreferrer">${icons.map}<span>Cómo llegar</span></a><a href="${site.phoneHref}">${icons.phone}<span>Llamar</span></a></div>`;}
export function localImage(src,alt,className='',attrs=''){return `<img class="${className}" src="${src}" alt="${alt}" loading="lazy" ${attrs}>`;}
export function heroImage(src,alt,className=''){return `<img class="${className}" src="${src}" alt="${alt}" loading="eager" fetchpriority="high">`;}

export function layout({title,description,current,body,ogDescription}){
  const localBusiness={
    '@context':'https://schema.org','@type':'CafeOrCoffeeShop',name:site.name,
    address:{'@type':'PostalAddress',streetAddress:'Av. del Genil',postalCode:'41400',addressLocality:'Écija',addressRegion:'Sevilla',addressCountry:'ES'},
    telephone:'+34642000550',sameAs:[site.instagram]
  };
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><meta name="theme-color" content="#f3eadf"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Caveat:wght@500;600&family=DM+Sans:opsz,wght@9..40,400;500;600;700&display=swap" rel="stylesheet"><title>${title?`${title} — `:''}El Café de Rosario · Écija</title><meta name="description" content="${description}"><meta property="og:title" content="${title?`${title} — `:''}El Café de Rosario"><meta property="og:description" content="${ogDescription||description}"><meta property="og:type" content="website"><meta property="og:locale" content="es_ES"><meta property="og:image" content="${site.realPhoto}"><link rel="icon" href="${site.logoOriginal}" type="image/png"><link rel="stylesheet" href="/styles.css"><script type="application/ld+json">${JSON.stringify(localBusiness).replace(/</g,'\\u003c')}</script><script type="module" src="/client.js" defer></script></head><body data-page="${current}"><a href="#contenido" class="skipLink">Saltar al contenido</a>${header(current)}${body}${footer()}${current==='/visitanos/'?mobileDock():''}</body></html>`;
}
