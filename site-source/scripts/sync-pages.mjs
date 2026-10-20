import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = join(source, 'dist');
const repo = resolve(source, '..');

// Solo actualiza los archivos públicos generados en la raíz de GitHub Pages.
await stat(join(repo, '.git'));
await stat(join(output, 'index.html'));
const assets = join(repo, 'assets');
await mkdir(assets, { recursive: true });
for (const name of await readdir(assets)) {
  if (/^index-[\w-]+\.(?:css|js)$/.test(name)) await rm(join(assets, name));
}
for (const name of await readdir(output)) {
  await cp(join(output, name), join(repo, name), { recursive: true, force: true });
}
console.log('Sitio compilado copiado a la raíz para GitHub Pages.');
