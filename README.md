# entrenanas.es

Sitio web estático de **entre nanas** — Marta Muñoz, asesora de sueño infantil.
Alojado en **Cloudflare Pages**, conectado a este repo de GitHub (`keops7/entrenanas.es`):
cada push a `main` publica automáticamente.

## Estructura

- `public/` — todo lo que se publica (HTML, CSS, imágenes en `public/assets/`).
- `public/_headers` — cabeceras HTTP (CSP, caché) que aplica Cloudflare Pages.
- `wrangler.toml` — configuración de Cloudflare Pages (`pages_build_output_dir = "public"`).

## Ajustes en Cloudflare Pages

Al crear el proyecto en Cloudflare Pages conectado a este repo:

| Campo | Valor |
|---|---|
| Production branch | `main` |
| Framework preset | None |
| Build command | *(vacío)* |
| Build output directory | `public` |
| Root directory | `/` |

No hay paso de build: se sirve `public/` tal cual.

## Desarrollo local

```bash
npm install                                  # instala wrangler
npx wrangler pages dev public --port 8788     # http://localhost:8788
```

## Despliegue manual (alternativa al git push)

```bash
npx wrangler login
npx wrangler pages deploy public --project-name=entrenanas
```

## Dominio

`entrenanas.es` registrado en DonDominio. DNS gestionado por Cloudflare
(nameservers del dominio apuntados a Cloudflare). El dominio se conecta al
proyecto en **Pages → Custom domains**.

## Pendiente

- `[PENDIENTE]` en `aviso-legal.html`, `privacidad.html`, `cookies.html`: NIF y domicilio fiscal.
- Access key de [web3forms.com](https://web3forms.com) en el formulario de `index.html` (`name="access_key"`).
- Testimonios reales en la sección `#testimonios` de `index.html`.
