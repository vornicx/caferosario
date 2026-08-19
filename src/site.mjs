export const site = {
  name: 'El Café de Rosario',
  shortName: 'Rosario',
  address: 'Av. del Genil, 41400 Écija, Sevilla',
  street: 'Av. del Genil',
  city: 'Écija',
  phoneDisplay: '+34 642 00 05 50',
  phoneHref: 'tel:+34642000550',
  instagram: 'https://www.instagram.com/el_cafe_de_rosario/',
  directions: 'https://www.google.com/maps/search/?api=1&query=El+Caf%C3%A9+de+Rosario+Av.+del+Genil+41400+%C3%89cija+Sevilla',
  mapEmbed: 'https://www.google.com/maps?q=El%20Caf%C3%A9%20de%20Rosario%2C%20Av.%20del%20Genil%2C%2041400%20%C3%89cija%2C%20Sevilla&output=embed',
  realPhoto: '/media/rosario-real-original.jpg',
  logoOriginal: '/media/rosario-logo-clean.webp',
};

export const toastColumns = [
  'Media / mollete pequeño',
  'Entera / mollete grande',
  'Cereales / integral',
  'Lino',
];

export const toastRows = [
  ['Aceite y tomate', ['1,30 €','2,10 €','2,30 €','2,40 €']],
  ['Lorenzana', ['1,40 €','2,20 €','2,40 €','2,50 €']],
  ['Ibéricos', ['1,40 €','2,20 €','2,40 €','2,50 €']],
  ['Manteca colorá', ['1,40 €','2,20 €','2,40 €','2,50 €']],
  ['Zurrapa de lomo', ['1,40 €','2,20 €','2,40 €','2,50 €']],
  ['Jamón cocido', ['1,50 €','2,30 €','2,50 €','2,60 €']],
  ['Pechuga de pavo', ['1,50 €','2,30 €','2,50 €','2,60 €']],
  ['Jamón serrano', ['2,10 €','2,90 €','3,10 €','3,20 €']],
  ['Lomo de orza', ['2,10 €','2,90 €','3,10 €','3,20 €']],
  ['Atún', ['2,10 €','2,90 €','3,10 €','3,20 €']],
  ['Aguacate', ['2,10 €','2,90 €','3,10 €','3,20 €']],
  ['Queso', ['2,10 €','2,90 €','3,10 €','3,20 €']],
  ['Salmón', ['2,40 €','3,20 €','3,40 €','3,50 €']],
  ['Nutella', ['1,40 €','2,20 €','2,40 €','2,50 €']],
];

export const coffeeItems = [
  ['Café o descafeinado con leche', '1,30 €'],
  ['Café o descafeinado cortado', '1,30 €'],
  ['Café o descafeinado bombón', '1,70 €'],
  ['Café o descafeinado americano', '1,30 €'],
  ['Café o descafeinado trifásico', '1,50 €'],
  ['Café o descafeinado carajillo', '1,50 €'],
  ['Descafeinado de sobre', '1,30 €'],
  ['Colacao', '1,50 €'],
];

export const frappeItems = [
  ['Frappé de café', '3,50 €'],
  ['Frappé de caramelo', '3,50 €'],
  ['Frappé de chocolate', '3,50 €'],
  ['Frappé de vainilla', '3,50 €'],
  ['Frappé de Oreo', '3,50 €'],
  ['Frappé de moka', '3,50 €'],
];

export const chocolateItems = [
  ['Blanco', '1,80 €'],
  ['Clásico', '1,80 €'],
  ['Negro', '1,80 €'],
  ['Naranja', '1,80 €'],
  ['Avellana', '1,80 €'],
  ['Menta', '1,80 €'],
];

export const teaItems = [
  ['Té negro con canela', '1,50 €'],
  ['Té pakistaní', '1,50 €'],
  ['Rooibos de vainilla', '1,50 €'],
  ['Rooibos Taj Mahal', '1,50 €'],
  ['Té verde', '1,50 €'],
  ['Té verde hierbabuena', '1,50 €'],
  ['Té matcha', '3,00 €'],
  ['Té chai latte', '3,00 €'],
  ['Té rojo puerh', '1,50 €'],
  ['Manzanilla digest', '1,30 €'],
  ['Menta fresca', '1,30 €'],
  ['Tila relax', '1,30 €'],
  ['Frutas del bosque', '1,50 €'],
];

export const juiceItems = [
  ['Zumo de piña', '1,80 €'],
  ['Zumo de melocotón', '1,80 €'],
  ['Batido de chocolate, fresa o vainilla', '2,00 €'],
  ['Zumo de naranja natural', '2,00 €'],
  ['Smoothies', '4,50 €'],
];

export const whiskyItems = [
  ['Jameson', '6,00 €'],
  ['White Label', '6,00 €'],
  ['Red Label', '6,00 €'],
  ['Black Label', '8,00 €'],
];

export const rumItems = [
  ['Cacique 500', '8,00 €'],
  ['Santa Teresa', '6,00 €'],
  ['Barceló', '6,00 €'],
  ['Legendario', '6,00 €'],
];

export const ginItems = [
  ['Larios', '6,00 €'],
  ['Larios 12', '6,00 €'],
  ['Beefeater', '6,00 €'],
  ['Seagrams', '6,00 €'],
  ['Puerto de Indias', '6,00 €'],
  ['Martin Miller’s', '8,00 €'],
];

export const mojitoItems = [
  ['Clásico', '5,00 €'],
  ['Sandía', '6,00 €'],
  ['Violeta', '6,00 €'],
  ['Mango', '6,00 €'],
  ['Melón', '6,00 €'],
  ['Fresa', '6,00 €'],
  ['Maracuyá', '6,00 €'],
];

export const routes = [
  { path:'/', file:'index.html', label:'Inicio', mode:'Atmosphere' },
  { path:'/carta/', file:'carta/index.html', label:'Carta', mode:'Explore' },
  { path:'/el-cafe/', file:'el-cafe/index.html', label:'El café', mode:'Story' },
  { path:'/visitanos/', file:'visitanos/index.html', label:'Visítanos', mode:'Convert' },
];
