import { products, faqs } from './products.js';
import { business, whatsappUrl } from './business.js';

document.documentElement.classList.add('js');

const $ = (selector) => document.querySelector(selector);
const currency = new Intl.NumberFormat('es-CL', {style:'currency', currency:'CLP', maximumFractionDigits:0});
const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const instagram = business.instagram;
const whatsapp = whatsappUrl(business.whatsappNumber);
if (whatsapp) {
  $('#whatsapp-contact').href = whatsappUrl(business.whatsappNumber, '¡Hola! Me gustaría consultar por un regalo de Encapsulados con Amor.');
  $('#whatsapp-contact').hidden = false;
  $('#form-disclaimer').textContent = 'Prepararemos tu consulta para abrirla en WhatsApp. Revisa el mensaje y presiona enviar allí; la marca confirmará disponibilidad y precio.';
  $('#form-send-hint').textContent = 'Continúa en WhatsApp y presiona enviar para que la marca reciba tu consulta. También puedes copiar el texto y enviarlo por Instagram.';
}

$('#maps-link').href = business.mapsUrl;
$('#show-map').addEventListener('click', () => {
  const frame = document.createElement('iframe');
  frame.title = 'Zona de atención: Rancagua, Chile';
  frame.src = business.mapsEmbedUrl;
  frame.loading = 'lazy';
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  frame.allowFullscreen = true;
  $('#map-preview').hidden = true;
  $('#location-map').append(frame);
  $('#map-status').textContent = 'Se abrió el mapa de la zona. También puedes usar el enlace a Google Maps.';
  frame.focus();
}, { once: true });
const search = $('#product-search');
const grid = $('#product-grid');
const dialog = $('#product-dialog');
const form = $('#request-form');
let focusedTrigger;

function node(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}
function productCard(product, index) {
  const card = node('article', 'product-card reveal');
  const imageButton = node('button', 'product-image');
  imageButton.type = 'button';
  imageButton.setAttribute('aria-label', `Ver detalles de ${product.name}`);
  const img = node('img');
  img.src = product.image;
  img.alt = product.alt || `Set ${product.name} de Encapsulados con Amor`;
  img.loading = 'lazy'; img.width = 640; img.height = 800;
  imageButton.append(img, node('span','product-image-action','Descubrir el detalle ↗'));
  imageButton.addEventListener('click', () => openProduct(product, imageButton));
  const info = node('div','product-info');
  info.append(node('p','product-category', product.category));
  const title = node('h3','', product.name);
  const description = node('p','product-description',product.description);
  const bottom = node('div','product-bottom');
  const price = node('span','product-price',currency.format(product.price));
  const button = node('button','product-link','Ver detalle ↗');
  button.type = 'button'; button.setAttribute('aria-label',`Ver ${product.name}, ${currency.format(product.price)}`);
  button.addEventListener('click',()=>openProduct(product,button));
  bottom.append(price,button); info.append(title,description,bottom);card.append(imageButton,info);
  card.style.setProperty('--reveal-delay', `${(index % 3)*65}ms`);
  return card;
}
function renderProducts() {
  const query = normalize(search.value.trim());
  const filtered = products.filter(p=>normalize([p.name,p.category,p.description,...p.features].join(' ')).includes(query));
  grid.replaceChildren(...filtered.map(productCard));
  $('#catalog-status').textContent = query ? `${filtered.length} ${filtered.length===1?'regalo encontrado':'regalos encontrados'}` : `${products.length} formas de regalar amor`;
  $('#empty-state').hidden = filtered.length !== 0;
  observeReveals();
}
function selectProduct(product) {
  invalidatePreparedMessage();
  $('#request-product').value = product.name;
  closeDialog();
  document.querySelector('#a-tu-medida').scrollIntoView({behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  setTimeout(()=>form.elements.name.focus({preventScroll:true}),reducedMotion.matches?0:450);
}
function openProduct(product, trigger) {
  focusedTrigger = trigger;
  const layout = node('div','detail-layout');
  const img = node('img','detail-image');img.src=product.image;img.alt=product.alt || `Set ${product.name}`;img.width=640;img.height=800;
  const copy=node('div','detail-copy');
  copy.append(node('p','eyebrow',product.category));
  const title=node('h2','',product.name);title.id='detail-title';
  copy.append(title,node('p','detail-price',currency.format(product.price)),node('p','',product.description));
  const heading=node('h3','','Este detalle incluye');
  const features=node('ul','detail-features');product.features.forEach(f=>features.append(node('li','',f)));
  copy.append(heading,features,node('p','detail-meta','Personalización y disponibilidad a confirmar. Solicita con al menos 48 horas de anticipación.'));
  const custom=node('button','button button-primary','Lo quiero personalizar ♡');custom.type='button';custom.addEventListener('click',()=>selectProduct(product));
  const direct=node('a','text-link','Consultar por Instagram ↗');direct.href=instagram;direct.target='_blank';direct.rel='noopener noreferrer';
  copy.append(custom,direct,node('p','detail-source',`Referencia: catálogo de la marca, pág. ${product.sourcePage}. Confirma el precio al consultar.`));
  layout.append(img,copy);$('#product-detail').replaceChildren(layout);dialog.showModal();document.body.classList.add('modal-open');
}
function closeDialog(){dialog.close();}
dialog.querySelector('.dialog-close').addEventListener('click',closeDialog);
dialog.addEventListener('click',event=>{if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)closeDialog();}});
dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');focusedTrigger?.focus({preventScroll:true});});
search.addEventListener('input',renderProducts);
$('#clear-search').addEventListener('click',()=>{search.value='';renderProducts();search.focus();});

products.forEach(product=>{const option=node('option','',product.name);option.value=product.name;$('#request-product').append(option);});
faqs.forEach(({question,answer})=>{const details=node('details');const summary=node('summary','',question);const plus=node('span','faq-plus','+');plus.setAttribute('aria-hidden','true');summary.append(plus);details.append(summary,node('p','',answer));$('#faq-list').append(details);});
const dateField=form.elements.date;
function todayLocal(){const now=new Date();const pad=n=>String(n).padStart(2,'0');return `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}`;}
dateField.min=todayLocal();
dateField.addEventListener('input',()=>dateField.setCustomValidity(''));
form.addEventListener('submit',event=>{
  event.preventDefault();
  for (const [field, message] of [[form.elements.name, 'Escribe tu nombre.'], [form.elements.idea, 'Cuéntanos tu idea.']]) {
    field.setCustomValidity(field.value.trim() ? '' : message);
  }
  dateField.min=todayLocal();
  if(dateField.value < dateField.min){dateField.setCustomValidity('Elige una fecha de hoy en adelante.');dateField.reportValidity();return;}
  if(!form.reportValidity())return;
  const data=new FormData(form);
  const date=new Date(`${data.get('date')}T12:00:00`).toLocaleDateString('es-CL',{day:'numeric',month:'long',year:'numeric'});
  const text=`¡Hola, Encapsulados con Amor! ♡\nSoy ${String(data.get('name')).trim()} y me gustaría consultar por un regalo.\n\nOcasión: ${data.get('occasion')}\nFecha deseada: ${date}\nRegalo: ${data.get('product')}\nMi idea: ${String(data.get('idea')).trim()}\n\n¿Me ayudan a confirmar disponibilidad, personalización, precio y entrega? Entiendo que el pedido requiere confirmación y al menos 48 horas de anticipación. ¡Gracias!`;
  $('#prepared-message').value=text;$('#form-result').hidden=false;$('#copy-status').textContent='';
  if (whatsapp) {
    $('#whatsapp-message').href = whatsappUrl(business.whatsappNumber, text);
    $('#whatsapp-message').hidden = false;
  }
  $('#form-result').scrollIntoView({behavior:reducedMotion.matches?'instant':'smooth',block:'center'});
});
function invalidatePreparedMessage() {
  $('#form-result').hidden = true;
  $('#prepared-message').value = '';
  $('#copy-status').textContent = '';
  $('#whatsapp-message').removeAttribute('href');
}
form.addEventListener('input', event => {
  if (!event.target.closest('.form-grid')) return;
  event.target.setCustomValidity?.('');
  invalidatePreparedMessage();
});

$('#copy-message').addEventListener('click',async()=>{
  const message=$('#prepared-message');
  try{if(!navigator.clipboard?.writeText)throw new Error('Clipboard unavailable');await navigator.clipboard.writeText(message.value);$('#copy-status').textContent='Mensaje copiado. Abre Instagram y pégalo en un mensaje directo.';}
  catch{message.focus();message.select();$('#copy-status').textContent='Seleccionamos el mensaje. Usa «Copiar» en tu dispositivo y pégalo en Instagram.';}
});

const menuButton=$('.menu-toggle');
menuButton.addEventListener('click',()=>{const expanded=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(expanded));menuButton.setAttribute('aria-label',expanded?'Cerrar menú':'Abrir menú');$('#main-nav').classList.toggle('is-open',expanded);});
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');$('#main-nav').classList.remove('is-open');}
$('#main-nav').querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape' && menuButton.getAttribute('aria-expanded') === 'true'){closeMenu();menuButton.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
let observer;
if('IntersectionObserver' in window){observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:0.07});}
function observeReveals(){document.querySelectorAll('.reveal:not(.is-visible)').forEach(el=>{if(!observer||reducedMotion.matches)el.classList.add('is-visible');else observer.observe(el);});}
$('#year').textContent=new Date().getFullYear();
renderProducts();observeReveals();
