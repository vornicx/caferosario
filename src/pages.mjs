import { icons } from './icons.mjs';
import { layout, localImage, heroImage } from './components.mjs';
import {
  site, toastColumns, toastRows, coffeeItems, frappeItems, chocolateItems, teaItems,
  juiceItems, whiskyItems, rumItems, ginItems, mojitoItems
} from './site.mjs';

const pricedList=(items, className='priceList')=>`<ul class="${className}">${items.map(([name,price])=>`<li><span>${name}</span><strong>${price}</strong></li>`).join('')}</ul>`;
const toastTable=()=>`<div class="toastTableWrap" role="region" aria-label="Precios de tostadas por tipo de pan" tabindex="0"><table class="toastTable"><thead><tr><th>Ingrediente</th>${toastColumns.map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${toastRows.map(([name,prices])=>`<tr><th scope="row">${name}</th>${prices.map(p=>`<td>${p}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const toastMobile=()=>`<div class="toastMobile">${toastRows.map(([name,prices])=>`<article><h3>${name}</h3><dl>${toastColumns.map((c,i)=>`<div><dt>${c}</dt><dd>${prices[i]}</dd></div>`).join('')}</dl></article>`).join('')}</div>`;

const art=(src,alt='')=>`<img src="${src}" alt="${alt}" decoding="async">`;

export function homePage(){
  const body=`<main id="contenido" class="homeV18">
    <section class="heroV18">
      <div class="heroV18Grid">
        <div class="heroV18Copy" data-reveal>
          <div class="heroBrandLockup"><img src="/media/rosario-logo-clean.webp" alt="Logo original de El Café de Rosario"></div>
          <div class="heroMeta"><span>Av. del Genil · Écija</span><span>Desayunos · meriendas · café</span></div>
          <h1>Aquí el día<br><strong>empieza bien.</strong></h1>
          <p>Una carta enorme, una terraza para quedarse y algo distinto para cada hora.</p>
          <div class="heroActionsV18"><a class="button orange" href="/carta/">Ver la carta ${icons.arrow}</a><a class="button heroGhost" href="${site.directions}" target="_blank" rel="noreferrer">Cómo llegar</a></div>
          <div class="heroDayRail" aria-hidden="true"><span><b>08</b> desayuno</span><span><b>11</b> tostada</span><span><b>17</b> merienda</span><span><b>19</b> algo dulce</span></div>
        </div>
        <div class="heroV18Media" data-reveal style="--delay:70ms">
          ${heroImage('/media/concept-breakfast.webp','Desayuno representativo de la propuesta visual para El Café de Rosario')}
          <div class="heroV18Shade"></div>
          <div class="heroV18Tag"><small>Rosario ahora</small><strong>CAFÉ · TOSTADAS · ZUMO</strong></div>
          <div class="heroV18Art" aria-hidden="true">${art('/media/croissant-line.svg')}</div>
        </div>
      </div>
      <div class="heroTicker" aria-hidden="true"><div><span>CAFÉ</span><i>•</i><span>TOSTADAS</span><i>•</i><span>FRAPPÉS</span><i>•</i><span>CHOCOLATES</span><i>•</i><span>SMOOTHIES</span><i>•</i><span>MERIENDAS</span><i>•</i><span>CAFÉ</span><i>•</i><span>TOSTADAS</span><i>•</i><span>FRAPPÉS</span><i>•</i><span>CHOCOLATES</span><i>•</i><span>SMOOTHIES</span><i>•</i><span>MERIENDAS</span></div></div>
    </section>

    <section class="momentV18 section" data-moment-root>
      <div class="shell">
        <header class="momentV18Head" data-reveal><div><span class="index">01</span><span class="eyebrow">Rosario cambia con la hora</span></div><h2>No vienes siempre<br><em>a por lo mismo.</em></h2></header>
        <div class="momentV18Stage" data-reveal>
          <div class="momentV18Tabs" role="tablist" aria-label="Momentos del día">
            <button class="active" type="button" role="tab" aria-selected="true" data-moment="0"><span>08:00</span><strong>Desayuno</strong></button>
            <button type="button" role="tab" aria-selected="false" data-moment="1"><span>11:00</span><strong>Tostadas</strong></button>
            <button type="button" role="tab" aria-selected="false" data-moment="2"><span>17:00</span><strong>Merienda</strong></button>
            <button type="button" role="tab" aria-selected="false" data-moment="3"><span>19:00</span><strong>Sin prisa</strong></button>
          </div>
          <div class="momentV18Main">
            <div class="momentV18Graphic"><div class="momentGraphic" data-moment-graphic>${art('/media/cup-line.svg')}</div><span class="momentNumber" data-moment-number>01</span></div>
            <div class="momentV18Copy"><span class="script" data-moment-script>Empieza bien</span><h3 data-moment-title>Café y tostada.</h3><p data-moment-copy>Café con leche, mollete o pan de lino y una carta de ingredientes que no obliga a pedir siempre lo mismo.</p><div class="momentFacts" data-moment-facts><span>Café con leche <strong>1,30 €</strong></span><span>Aceite y tomate <strong>desde 1,30 €</strong></span></div><a class="textLink" href="/carta/#tostadas">Ir a la carta ${icons.arrow}</a></div>
          </div>
        </div>
      </div>
    </section>

    <section class="socialV19 section"><div class="shell socialGridV19">
      <div class="socialMediaV19" data-reveal>${localImage('/media/concept-social.webp','Escena representativa de terraza y ambiente social para El Café de Rosario')}</div>
      <div class="socialCopyV19" data-reveal style="--delay:70ms"><span class="index">02</span><span class="script">Un sitio para quedarse</span><h2>La terraza también forma parte de la carta.</h2><p>Esta imagen es provisional y representa el tipo de fotografía que haríamos si el concepto gusta: gente, luz natural, producto y ambiente real.</p><a class="textLink" href="/el-cafe/">Ver el café ${icons.arrow}</a></div>
    </div></section>

    <section class="menuRhythmV18">
      <div class="shell menuRhythmHead" data-reveal><div><span class="index">02</span><span class="eyebrow">La carta tiene ritmo</span></div><h2>Una cafetería.<br><em>Muchas ganas distintas.</em></h2></div>
      <div class="menuRhythmRows">
        <a href="/carta/#cafes" class="menuRhythmRow dark"><span class="rowNumber">01</span><h3>Cafés</h3><p>Lo de siempre, bien hecho.</p><strong>desde 1,30 €</strong><div class="rowArt">${art('/media/cup-line.svg')}</div></a>
        <a href="/carta/#tostadas" class="menuRhythmRow cream"><span class="rowNumber">02</span><h3>Tostadas</h3><p>14 ingredientes · 4 formatos de pan.</p><strong>desde 1,30 €</strong><div class="rowArt">${art('/media/toast-line.svg')}</div></a>
        <a href="/carta/#frappes" class="menuRhythmRow orange"><span class="rowNumber">03</span><h3>Frappés</h3><p>Café, caramelo, chocolate, vainilla, Oreo o moka.</p><strong>3,50 €</strong><div class="rowArt">${art('/media/frappe-line.svg')}</div></a>
        <a href="/carta/#meriendas" class="menuRhythmRow peach"><span class="rowNumber">04</span><h3>Meriendas</h3><p>Chocolate, té, smoothies y algo dulce.</p><strong>para quedarse</strong><div class="rowArt">${art('/media/croissant-line.svg')}</div></a>
      </div>
      <div class="menuRhythmVisualV19 shell" data-reveal><div class="menuRhythmVisualCopy"><span class="script light">La tarde cambia el ritmo</span><h3>Café, algo dulce y sin tanta prisa.</h3></div>${localImage('/media/concept-merienda.webp','Merienda representativa para la propuesta de El Café de Rosario')}</div>
    </section>

    <section class="menuPreviewV18 section"><div class="shell menuPreviewGridV18">
      <div class="menuPreviewTitleV18" data-reveal><span class="index">03</span><span class="script">La carta de Rosario</span><h2>Lo difícil<br>es <em>elegir.</em></h2><p>No es una carta de muestra: son los productos y precios reales del negocio, ordenados para poder decidir rápido.</p><a class="button dark" href="/carta/">Ver carta completa ${icons.arrow}</a></div>
      <div class="menuPreviewListsV18" data-reveal style="--delay:70ms">
        <article><h3>Cafés</h3>${pricedList(coffeeItems.slice(0,6))}</article>
        <article><h3>Frappés</h3>${pricedList(frappeItems)}</article>
        <article><h3>Chocolate</h3>${pricedList(chocolateItems)}</article>
        <aside><span>También</span><strong>Zumos<br>Infusiones<br>Smoothies<br>Copas</strong><a href="/carta/">Todo en la carta ${icons.arrow}</a></aside>
      </div>
    </div></section>

    <section class="smoothieV19"><div class="smoothieMediaV19" data-reveal>${localImage('/media/concept-smoothies.webp','Smoothies representativos para la propuesta visual de El Café de Rosario')}</div><div class="smoothieCopyV19" data-reveal style="--delay:70ms"><span class="script">Algo fresco</span><h2>También hay tardes<br>que piden color.</h2><p>Una imagen de concepto para enseñar cómo puede sentirse la parte más fresca de la carta antes de hacer la sesión fotográfica definitiva.</p><a class="textLink" href="/carta/#meriendas">Ver smoothies y bebidas ${icons.arrow}</a></div></section>

    <section class="brandMomentV18"><div class="shell brandMomentGridV18">
      <div class="brandMomentCopyV18" data-reveal><span class="script light">Rosario, sin reloj</span><h2>Un café.<br>Una tostada.<br><em>Y un rato más.</em></h2><p>La gracia no está en convertirlo en otra cosa, sino en enseñar mejor lo que ya tiene: variedad, cercanía y un sitio al que apetece volver.</p><a class="textLink lightLink" href="/el-cafe/">Conocer el café ${icons.arrow}</a></div>
      <div class="brandMomentMarkV18" data-reveal style="--delay:80ms"><img src="/media/rosario-logo-clean.webp" alt="Logo original de El Café de Rosario"><div class="brandOrbit" aria-hidden="true"><span>${art('/media/cup-line.svg')}</span><span>${art('/media/croissant-line.svg')}</span><span>${art('/media/frappe-line.svg')}</span></div></div>
    </div></section>

    <section class="visitV18 section"><div class="shell visitGridV18">
      <div class="visitCopyV18" data-reveal><span class="index">04</span><span class="eyebrow">Nos vemos</span><h2>Avenida<br>del Genil.</h2><p>${site.address}</p><div class="visitActions"><a class="button orange" href="${site.directions}" target="_blank" rel="noreferrer">Cómo llegar ${icons.arrow}</a><a class="textLink" href="${site.phoneHref}">${site.phoneDisplay}</a></div></div>
      <div class="visitMapV18" data-reveal style="--delay:70ms"><iframe src="${site.mapEmbed}" title="Mapa de El Café de Rosario en Écija" loading="lazy"></iframe><div class="mapLabelV18"><span>El Café de Rosario</span><strong>Écija · Sevilla</strong></div></div>
    </div></section>
  </main>`;
  return layout({current:'/',body,description:'El Café de Rosario en Avenida del Genil, Écija. Desayunos, tostadas, café, frappés, chocolates, smoothies y meriendas.'});
}

export function cartaPage(){
  const body=`<main id="contenido" class="menuPage v17Menu">
    <header class="menuHero"><div class="shell menuHeroGrid"><div data-reveal><span class="script">La carta de Rosario</span><h1>Hay días de<br><em>tostada.</em><br>Y tardes de<br><strong>frappé.</strong></h1><p>La carta real, ordenada para leerla bien. Producto, formato y precio.</p></div><div class="menuHeroArt" data-reveal style="--delay:70ms"><span>${art('/media/cup-line.svg')}</span><span>${art('/media/croissant-line.svg')}</span><span>${art('/media/frappe-line.svg')}</span></div></div></header>
    <nav class="cartaNav" aria-label="Categorías de carta"><div class="shell"><a href="#tostadas">Tostadas</a><a href="#cafes">Cafés</a><a href="#frappes">Frappés</a><a href="#meriendas">Meriendas</a><a href="#copas">Copas</a></div></nav>
    <section class="menuSection shell" id="tostadas" data-menu-section><div class="menuSectionHead"><span>01</span><div><small>Empieza bien</small><h2>Tostadas</h2><p>Elige ingrediente y después pan o tamaño.</p></div><div class="sectionArt">${art('/media/toast-line.svg')}</div></div>${toastTable()}${toastMobile()}<div class="menuFoot"><span>Torta de manteca</span><strong>1,00 €</strong></div></section>
    <section class="menuSection darkSection" id="cafes" data-menu-section><div class="shell"><div class="menuSectionHead"><span>02</span><div><small>Lo de siempre</small><h2>Cafés</h2></div><div class="sectionArt">${art('/media/cup-line.svg')}</div></div><div class="menuSplit">${pricedList(coffeeItems)}<aside><span>Desde</span><strong>1,30 €</strong><small>café con leche, cortado o americano</small></aside></div></div></section>
    <section class="menuSection orangeSection" id="frappes" data-menu-section><div class="shell"><div class="menuSectionHead"><span>03</span><div><small>Algo frío</small><h2>Frappés</h2></div><div class="sectionArt">${art('/media/frappe-line.svg')}</div></div><div class="menuSplit">${pricedList(frappeItems)}<aside><span>Todos</span><strong>3,50 €</strong><small>café · caramelo · chocolate · vainilla · Oreo · moka</small></aside></div></div></section>
    <section class="menuSection shell" id="meriendas" data-menu-section><div class="menuSectionHead"><span>04</span><div><small>Para quedarse</small><h2>Meriendas</h2></div><div class="sectionArt">${art('/media/croissant-line.svg')}</div></div><div class="menuQuad"><div><h3>Chocolate a la taza</h3>${pricedList(chocolateItems)}</div><div><h3>Infusiones y tés</h3>${pricedList(teaItems)}</div><div><h3>Zumos, batidos y smoothies</h3>${pricedList(juiceItems)}</div></div></section>
    <section class="menuSection darkSection" id="copas" data-menu-section><div class="shell"><div class="menuSectionHead"><span>05</span><div><small>Después</small><h2>Copas y cócteles</h2></div></div><div class="menuQuad four"><div><h3>Whisky</h3>${pricedList(whiskyItems)}</div><div><h3>Ron</h3>${pricedList(rumItems)}</div><div><h3>Ginebra</h3>${pricedList(ginItems)}</div><div><h3>Mojitos</h3>${pricedList(mojitoItems)}</div></div></div></section>
    <section class="menuEnd"><div class="shell"><span class="script">Ya sabes qué pedir</span><h2>Nos vemos<br>en Rosario.</h2><a class="button orange" href="/visitanos/">Cómo llegar ${icons.arrow}</a></div></section>
  </main>`;
  return layout({title:'Carta',current:'/carta/',body,description:'Carta de El Café de Rosario: tostadas, cafés, frappés, chocolate, infusiones, zumos, smoothies, copas y cócteles.'});
}

export function cafePage(){
  const body=`<main id="contenido" class="storyPage v17Story">
    <header class="storyHero"><div class="shell storyHeroGrid"><div data-reveal><span class="script">El Café de Rosario</span><h1>Un sitio<br>de muchas<br><em>horas.</em></h1><p>Desayuno, pausa, merienda o un rato sin prisa. La gracia de Rosario está en poder volver y pedir otra cosa.</p></div><div class="storyPhotoV19" data-reveal style="--delay:80ms">${localImage('/media/concept-interior.webp','Interior representativo de la propuesta visual para El Café de Rosario')}<div class="storyPhotoLogoV19"><img src="${site.logoOriginal}" alt="El Café de Rosario"></div></div></div></header>
    <section class="storySection cream"><div class="shell storyColumns"><div><span class="index">01</span><h2>Desayuno.</h2><p>Molletes, integrales, cereales y lino con una lista larga de ingredientes.</p></div><div><span class="index">02</span><h2>Merienda.</h2><p>Chocolate, tés, frappés, smoothies y algo dulce.</p></div><div><span class="index">03</span><h2>Un rato.</h2><p>Terraza, conversación y ambiente cercano en Avenida del Genil.</p></div></div></section>
    <section class="storyGraphic"><div class="shell"><div data-reveal><span class="script light">La carta cambia. El sitio sigue siendo el mismo.</span><h2>Rosario<br>de mañana.<br><em>Rosario de tarde.</em></h2></div><div class="storyMotifs"><img src="/media/cup-line.svg" alt=""><img src="/media/croissant-line.svg" alt=""><img src="/media/frappe-line.svg" alt=""></div></div></section>
    <section class="storyStatement"><div class="shell"><span>Rosario · Écija</span><h2>Lo cotidiano,<br>con ganas de volver.</h2><a class="button dark" href="/carta/">Ver la carta ${icons.arrow}</a></div></section>
  </main>`;
  return layout({title:'El café',current:'/el-cafe/',body,description:'El Café de Rosario en Avenida del Genil, Écija: ambiente cercano, terraza, desayunos y meriendas.'});
}

export function visitPage(){
  const body=`<main id="contenido" class="visitPage v17Visit">
    <header class="visitHero"><div class="shell visitHeroGrid"><div data-reveal><span class="script">Visítanos</span><h1>Nos vemos<br>en el Genil.</h1><p>${site.address}</p><div class="visitActions"><a class="button orange" href="${site.directions}" target="_blank" rel="noreferrer">Abrir Maps ${icons.arrow}</a><a class="textLink" href="${site.phoneHref}">${site.phoneDisplay}</a></div></div><div class="visitBrandCard" data-reveal style="--delay:80ms"><span class="brandFrame xlarge"><img src="${site.logoOriginal}" alt="Logo original de El Café de Rosario"></span><div>${art('/media/cup-line.svg')}</div><span>@el_cafe_de_rosario</span></div></div></header>
    <section class="visitRealV19"><div class="shell visitRealGridV19"><div data-reveal>${localImage(site.realPhoto,'Fotografía real de El Café de Rosario en Avenida del Genil')}</div><div data-reveal style="--delay:70ms"><span class="script">Este sí es Rosario</span><h2>La sesión final partiría de aquí.</h2><p>La fotografía real del negocio marca la referencia. Si el concepto gusta, sustituimos las imágenes representativas por una sesión propia manteniendo exactamente estos encuadres y funciones.</p></div></div></section>
    <section class="bigMap"><iframe src="${site.mapEmbed}" title="Mapa de El Café de Rosario en Écija" loading="lazy"></iframe></section>
    <section class="contactStrip"><div class="shell"><a href="${site.directions}" target="_blank" rel="noreferrer"><span>Dirección</span><strong>Av. del Genil · Écija</strong>${icons.arrow}</a><a href="${site.phoneHref}"><span>Teléfono</span><strong>${site.phoneDisplay}</strong>${icons.arrow}</a><a href="${site.instagram}" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@el_cafe_de_rosario</strong>${icons.arrow}</a></div></section>
  </main>`;
  return layout({title:'Visítanos',current:'/visitanos/',body,description:`Cómo llegar y contacto de El Café de Rosario en ${site.address}.`});
}

export const pages=[
  {file:'index.html',html:homePage()},
  {file:'carta/index.html',html:cartaPage()},
  {file:'el-cafe/index.html',html:cafePage()},
  {file:'visitanos/index.html',html:visitPage()},
];
