# entrenanas.es

Sitio web estático de **entre nanas** — Marta Muñoz, asesora de sueño infantil.
Alojado en **Cloudflare Pages**, conectado a este repo (`keops7/entrenanas.es`):
cada push a `main` publica automáticamente. No hay build: se sirve `public/` tal cual.

## Estructura

- `public/` — todo lo que se publica (HTML, CSS, imágenes en `public/assets/`).
- `public/_headers` — cabeceras HTTP (CSP, caché) que aplica Cloudflare Pages.
- `public/_redirects` — reglas de redirección (si hacen falta).

## Ajustes del proyecto en Cloudflare Pages

| Campo | Valor |
|---|---|
| Production branch | `main` |
| Framework preset | None |
| Build command | *(vacío)* |
| Deploy command | *(vacío)* |
| Build output directory | `public` |
| Root directory | `/` |

> ⚠️ El **Deploy command** debe estar **vacío**. Si Cloudflare lo rellena con
> `npx wrangler deploy`, bórralo: ese comando es para Workers y hace fallar el
> despliegue de un proyecto Pages.

## Desarrollo local

Cualquier servidor estático sirve. Por ejemplo:

```bash
npx wrangler pages dev public      # http://localhost:8788
# o
python -m http.server -d public 8788
```

## Pendiente

- `[PENDIENTE]` en `aviso-legal.html`, `privacidad.html`, `cookies.html`: NIF y domicilio fiscal.
- Access key de [web3forms.com](https://web3forms.com) en el formulario de `index.html` (`name="access_key"`).
- Testimonios reales en la sección `#testimonios` de `index.html`.
