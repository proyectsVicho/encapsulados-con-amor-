// Datos comerciales verificados. Completar solo con datos confirmados por la marca.
export const business = Object.freeze({
  name: 'Encapsulados con Amor',
  instagram: 'https://www.instagram.com/encapsulados_con_amor/',
  // Número internacional completo, por ejemplo código de país + número, sin espacios.
  // Sigue pendiente de confirmación: no usar el teléfono comercial de Hermor.cl.
  whatsappNumber: null,
  serviceArea: 'Rancagua y alrededores',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rancagua%2C%20Chile',
  mapsEmbedUrl: 'https://www.google.com/maps?q=Rancagua%2C%20Chile&z=12&output=embed',
});

export function whatsappUrl(number, message = '') {
  if (typeof number !== 'string' || !/^\+?[\d\s()-]+$/.test(number)) return null;
  const digits = number.replace(/[^\d]/g, '');
  if (!/^[1-9]\d{7,14}$/.test(digits)) return null;
  return `https://wa.me/${digits}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}
