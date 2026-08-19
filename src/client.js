const menuButton=document.querySelector('.menuButton');
const mobileMenu=document.querySelector('.mobileMenu');
const menuIcon=document.querySelector('[data-menu-icon]');
const menuSvg='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
const closeSvg='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
function setMenu(open){
  if(!menuButton||!mobileMenu)return;
  menuButton.setAttribute('aria-expanded',String(open));
  mobileMenu.setAttribute('aria-hidden',String(!open));
  mobileMenu.classList.toggle('open',open);
  document.body.classList.toggle('menuOpen',open);
  if(menuIcon)menuIcon.innerHTML=open?closeSvg:menuSvg;
  const sr=menuButton.querySelector('.srOnly');
  if(sr)sr.textContent=open?'Cerrar menú':'Abrir menú';
}
menuButton?.addEventListener('click',()=>setMenu(menuButton.getAttribute('aria-expanded')!=='true'));
mobileMenu?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false)});

const header=document.querySelector('[data-site-header]');
function updateHeader(){header?.classList.toggle('scrolled',window.scrollY>36)}
updateHeader();
window.addEventListener('scroll',updateHeader,{passive:true});

const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealElements=document.querySelectorAll('[data-reveal]');
if(reduced||!('IntersectionObserver'in window)){
  revealElements.forEach(el=>el.setAttribute('data-visible','true'));
}else{
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.setAttribute('data-visible','true');observer.unobserve(entry.target)}
  }),{threshold:.08,rootMargin:'0px 0px -5% 0px'});
  revealElements.forEach(el=>observer.observe(el));
}

const momentRoot=document.querySelector('[data-moment-root]');
if(momentRoot){
  const moments=[
    {script:'Empieza bien',title:'Café y tostada.',copy:'Café con leche, mollete o pan de lino y una carta de ingredientes que no obliga a pedir siempre lo mismo.',facts:[['Café con leche','1,30 €'],['Aceite y tomate','desde 1,30 €']],art:'/media/cup-line.svg'},
    {script:'Media mañana',title:'La tostada que quieras.',copy:'Jamón serrano, aguacate, atún, queso o salmón. Cuatro formatos de pan para montar el desayuno a tu manera.',facts:[['Jamón serrano','desde 2,10 €'],['Salmón','desde 2,40 €']],art:'/media/toast-line.svg'},
    {script:'Por la tarde',title:'Frappé o smoothie.',copy:'Café, caramelo, chocolate, vainilla, Oreo o moka. Y si apetece algo más fresco, smoothies y zumos.',facts:[['Frappés','3,50 €'],['Smoothies','4,50 €']],art:'/media/frappe-line.svg'},
    {script:'Algo dulce',title:'Pausa y merienda.',copy:'Chocolate a la taza, infusiones y algo dulce para alargar la tarde. Rosario no se acaba después del desayuno.',facts:[['Chocolate a la taza','1,80 €'],['Tés e infusiones','desde 1,30 €']],art:'/media/croissant-line.svg'},
  ];
  const buttons=[...momentRoot.querySelectorAll('[data-moment]')];
  const script=momentRoot.querySelector('[data-moment-script]');
  const title=momentRoot.querySelector('[data-moment-title]');
  const copy=momentRoot.querySelector('[data-moment-copy]');
  const facts=momentRoot.querySelector('[data-moment-facts]');
  const graphic=momentRoot.querySelector('[data-moment-graphic]');
  const number=momentRoot.querySelector('[data-moment-number]');
  const render=index=>{
    const item=moments[index];
    if(!item)return;
    buttons.forEach((b,i)=>{b.classList.toggle('active',i===index);b.setAttribute('aria-selected',String(i===index))});
    if(script)script.textContent=item.script;
    if(title)title.textContent=item.title;
    if(copy)copy.textContent=item.copy;
    if(facts)facts.innerHTML=item.facts.map(([a,b])=>`<span>${a}<strong>${b}</strong></span>`).join('');
    if(number)number.textContent=String(index+1).padStart(2,'0');
    if(graphic){
      graphic.style.opacity='0';
      graphic.style.transform='scale(.92) rotate(-4deg)';
      window.setTimeout(()=>{graphic.innerHTML=`<img src="${item.art}" alt="">`;graphic.style.opacity='1';graphic.style.transform='none'},reduced?0:160);
    }
  };
  buttons.forEach((button,i)=>button.addEventListener('click',()=>render(i)));
}

const menuNavLinks=[...document.querySelectorAll('.cartaNav a')];
const menuSections=[...document.querySelectorAll('[data-menu-section]')];
if(menuNavLinks.length&&menuSections.length&&'IntersectionObserver'in window){
  const byId=new Map(menuNavLinks.map(link=>[link.getAttribute('href')?.slice(1),link]));
  const sectionObserver=new IntersectionObserver(entries=>{
    const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if(!visible)return;
    menuNavLinks.forEach(link=>link.classList.remove('active'));
    byId.get(visible.target.id)?.classList.add('active');
  },{rootMargin:'-24% 0px -58% 0px',threshold:[0,.1,.2,.4]});
  menuSections.forEach(section=>sectionObserver.observe(section));
}
