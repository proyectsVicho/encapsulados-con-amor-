# Encapsulados con Amor

Web pública: https://proyectsvicho.github.io/encapsulados-con-amor-/

GitHub Pages publica la **raíz de `main`**. `index.html`, `assets/`, `favicon.svg`, `robots.txt` y `sitemap.xml` son la versión compilada. El proyecto editable está en [`site-source/`](site-source/), junto con las fotografías, el logotipo, las ilustraciones, las tipografías y sus licencias.

Para modificar la web, se requiere Node.js 22.18+:

```sh
cd site-source
npm ci
npm run dev
```

Al terminar, generar y copiar la web compilada a la raíz:

```sh
npm run publish:root
```

Después, confirmar los cambios en Git y subirlos a `main`. GitHub Pages publicará la nueva versión automáticamente. El flujo de GitHub Actions verifica que el código fuente siga compilando.

La web muestra siete productos del catálogo de Encapsulados con Amor en Rancagua. Los precios y la disponibilidad se confirman al consultar. El formulario prepara un mensaje para Instagram; no almacena pedidos ni procesa pagos. El enlace directo de WhatsApp espera el número oficial en `site-source/src/business.js`.

Diseño y desarrollo: Hermor.cl. Las imágenes de marca pertenecen a Encapsulados con Amor; las licencias de las fuentes están en `site-source/public/assets/`.
