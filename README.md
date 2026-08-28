# entrenanas.es

Sitio estático servido en **Cloudflare Pages** (proyecto `entrenanas`), despliegue por subida directa con Wrangler.

## Estructura

- `public/` — todo lo que se publica (HTML, CSS, imágenes en `public/assets/`).
- `wrangler.toml` — config de Cloudflare Pages.

## Comandos

```bash
npm install          # instala wrangler (primera vez)
npx wrangler login   # autoriza la cuenta de Cloudflare (una vez)
npm run dev          # servidor local en http://localhost:8788
npm run deploy       # publica a producción (entrenanas.pages.dev + entrenanas.es)
```

## Dominio

`entrenanas.es` registrado en un registrador español (Dinahosting / DonDominio).
DNS gestionado por Cloudflare (nameservers apuntados a Cloudflare).
