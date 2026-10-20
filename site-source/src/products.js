// Fuente: catálogo público de Encapsulados con Amor, consultado en vista previa
// de Google Drive el 17-10-2026. Precios en CLP; confirmar disponibilidad al pedir.
const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;
export const products = [
  {
    id: 'dulce-recuerdo', name: 'Set Dulce Recuerdo', category: 'Fotografías y chocolates', price: 14900,
    description: 'Un detalle para atesorar momentos especiales, sorprender y crear recuerdos inolvidables.',
    features: ['Globo burbuja con dos fotografías estilo polaroid', 'Caja de bombones', 'Decoración personalizada'],
    image: asset('producto-dulce-recuerdo.webp'), sourcePage: '2–3',
  },
  {
    id: 'ilusion-encapsulada', name: 'Ilusión Encapsulada', category: 'Revelación de género', price: 16900,
    description: 'Un detalle hecho a mano para convertir la revelación en un recuerdo inolvidable.',
    features: ['Globo burbuja transparente', 'Globo interior de color para la revelación', 'Vinilo personalizado con frase o nombre', 'Lazos de satín decorativos', 'Relleno con detalles decorativos', 'Base de presentación'],
    image: asset('producto-ilusion-encapsulada.webp'), sourcePage: '4–5',
  },
  {
    id: 'susurro-amor', name: 'Set Susurro de Amor', category: 'Peluches y chocolates', price: 17900,
    description: 'Un delicado y romántico detalle que combina elegancia y dulzura para expresar sentimientos especiales.',
    features: ['Globo burbuja con peluche en su interior', 'Peluche según disponibilidad y preferencia', 'Caja de bombones', 'Decoración personalizada'],
    image: asset('producto-susurro-amor.webp'), sourcePage: '6–7',
  },
  {
    id: 'break-carino', name: 'Set Break & Cariño', category: 'Dulzura y bienestar', price: 21900,
    description: 'Un obsequio cálido que combina dulzura, aroma y momentos de relajo.',
    features: ['Globo burbuja con peluche según disponibilidad y preferencia', 'Taza y café instantáneo', 'Té chai e infusión de manzanilla', 'Galletas', 'Barra de chocolate con 60% de cacao', 'Marshmallows', 'Vela aromática'],
    image: asset('producto-break-carino.webp'), sourcePage: '8–9',
  },
  {
    id: 'esencia-amor', name: 'Set Esencia de Amor', category: 'Cuidado y bienestar', price: 27900,
    description: 'Cariño, ternura y cuidado personal reunidos en una sorpresa para alguien especial.',
    features: ['Globo metalizado', 'Globo burbuja con peluche según disponibilidad y preferencia', 'Presentación en caja', 'Mascarilla de reparación profunda', 'Termoprotector capilar con provitamina B5 y ácido hialurónico', 'Aceite antifrizz de brillo extremo', 'Vela aromática'],
    image: asset('producto-esencia-amor.webp'), sourcePage: '10–11',
  },
  {
    id: 'esencia-calma', name: 'Set Esencia de Calma', category: 'Cuidado y bienestar', price: 27900,
    description: 'Una invitación a desconectar y regalarse un momento de bienestar, suavidad y aromas.',
    features: ['Globo metalizado', 'Globo burbuja con peluche según disponibilidad y preferencia', 'Presentación en caja', 'Gel de ducha', 'Exfoliante corporal', 'Aceite corporal', 'Vela aromática'],
    image: asset('producto-esencia-calma.webp'), sourcePage: '12–13',
  },
  {
    id: 'primeros-abrazos', name: 'Set Primeros Abrazos', category: 'Bienvenida del bebé', price: 32900,
    description: 'Un set en tonos neutros y suaves para dar una bienvenida llena de ternura al nuevo integrante de la familia.',
    features: ['Globo burbuja con sonajero en tonos neutros', 'Cobija afelpada', 'Pijama para bebé', 'Gorro de tela para bebé', 'Babero de tela suave', 'Cepillo y peine de madera para bebé', 'Presentación en caja'],
    image: asset('producto-primeros-abrazos.webp'), sourcePage: '14–15',
  },
];

export const faqs = [
  { question: '¿Con cuánta anticipación debo pedir?', answer: 'El catálogo solicita un mínimo de 48 horas de anticipación. Los pedidos están sujetos a disponibilidad; confirma la fecha por Instagram.' },
  { question: '¿Puedo personalizar mi regalo?', answer: 'Sí. Los productos pueden adaptarse en colores, temáticas, mensajes especiales, tipografía, estilo y selección de regalos. Consulta las opciones y el valor final antes de confirmar.' },
  { question: '¿Cómo se confirma y paga el pedido?', answer: 'Se requiere un abono previo para confirmar la compra. El catálogo indica transferencia bancaria y pago en efectivo. Coordina los datos y el monto directamente con la marca.' },
  { question: '¿Dónde entregan?', answer: 'En Rancagua y alrededores. Hay retiros coordinados y despacho a domicilio con costo adicional. Consulta la cobertura y el valor para tu dirección.' },
  { question: '¿El peluche es igual al de la fotografía?', answer: 'El catálogo indica que el peluche varía según disponibilidad y preferencia. Confirma las opciones al hacer tu consulta.' },
];
