# Encapsulados con Amor

Web estática de la marca en Rancagua, Chile. Diseño y desarrollo: Hermor.cl.

**Web pública:** https://proyectsvicho.github.io/encapsulados-con-amor-/

## Desarrollo local

Requiere Node.js 22.18+.

```sh
npm ci
npm run dev
```

Para generar la versión que publica GitHub Pages:

```sh
npm run build
```

El workflow de `.github/workflows/pages.yml` publica automáticamente `dist/` al actualizar la rama `main`. Las fotografías, el logo, las ilustraciones y las tipografías se guardan en `public/assets/` y se publican con el sitio. No hacen falta servicios de pago para mostrar este catálogo estático.

## Alcance

Catálogo visual, buscador, fichas de producto, preguntas frecuentes, formulario que prepara una consulta, Instagram y mapa de la zona de Rancagua. Los pedidos se coordinan fuera del sitio; la web no cobra ni almacena datos personales.

Los precios proceden del catálogo público de la marca y deben confirmarse al consultar. El botón de WhatsApp se activa al configurar el número oficial en `src/business.js`; hasta entonces no se publica un número supuesto.

El catálogo y las imágenes pertenecen a Encapsulados con Amor. Las licencias de las tipografías están junto a los archivos en `public/assets/`.
