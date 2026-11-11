# EAD Oleohidráulica — guía para agentes

Sitio institucional estático de EAD Oleohidráulica (Colonia Barón, La Pampa). Astro 7 + TypeScript estricto + Tailwind 4, contenido en español rioplatense.

## Setup y comandos

- Requiere Node >=22.12 (CI usa Node 22). Instalar con `npm ci`; no hay monorepo ni workspaces.
- `npm run dev` sirve en `http://localhost:4321/EAD-web-nuevo/`, no en la raíz.
- `npm run quality` es el pipeline de CI, en este orden: `typecheck` (`astro check`) → `lint` (otro `astro check`) → `test` (Vitest) → `build` → `check:build` → `validate:launch` → `test:e2e`.
- `npm run lint` y `npm run format:check` son alias de `astro check`; no hay ESLint, Prettier ni formateador. No inventes un paso de formato.
- `npm test` corre todos los unitarios; uno solo con `npx vitest run src/lib/contact.test.ts`. Vitest solo incluye `src/**/*.test.ts(x)`, no `tests/e2e/`.
- Un e2e: `npx playwright test tests/e2e/site.spec.ts -g "texto del test" --project=desktop-chromium`. Playwright levanta el dev server en `127.0.0.1:4321`; instalar Chromium con `npx playwright install chromium`. Usar `PLAYWRIGHT_REUSE_SERVER=1` si ya hay un dev server.
- `check:build` y `validate:launch` leen `dist/`: ejecutar `npm run build` antes si se corren por separado.

## Arquitectura y rutas

- `astro.config.mjs` publica como proyecto de GitHub Pages en `/EAD-web-nuevo/` (`site` + `base`), con salida 100% estática. No agregar SSR, adapter, base de datos, auth ni CMS.
- Todo enlace o asset interno debe pasar por `withBase()` (`src/lib/url.ts`) o por componentes que ya lo aplican (`ButtonLink`, `PhotoFrame`, etc.). Un `href="/..."` o `src="/..."` sin base rompe `validate:launch` y el e2e.
- `siteConfig.siteUrl` en `src/data/site.ts` debe coincidir con `site + base`; los canonical y los tests (`src/lib/seo.test.ts`, `tests/e2e/site.spec.ts`) dependen de esa URL. Si cambia el dominio o el base, actualizá config, datos y tests juntos.
- `src/layouts/BaseLayout.astro` centraliza canonical, Open Graph y JSON-LD. Cada página debe renderizar exactamente un `<main>` y un `<h1>`; `validate:launch` lo exige.

## Contenido y activos

- Datos comerciales, contactos, horarios y redes: solo en `src/data/site.ts`. No duplicar teléfonos, correos ni dirección en componentes.
- El portfolio vive en `src/content/projects/*.{md,mdx}` con el esquema de `src/content.config.ts`; el nombre del archivo es el slug. Solo se renderiza, enlaza y agrega al sitemap si `publicationApproved: true`.
- Imágenes de proyectos: WebP locales en `public/assets/projects/<slug>/<archivo>.webp`, con `alt`, `width` y `height`. `validate:launch` falla ante assets faltantes, URLs de CDN de Instagram/Facebook o `mediaId` duplicado.
- Fotos del taller: catalogarlas en `src/data/media.ts` con `id`/`src` únicos, WebP, dimensiones y `alt`; `src/data/media.test.ts` valida el catálogo.
- No dejes borradores `.md`/`.mdx` que no empiecen con `_` en `src/content/projects/`: `validate:launch` exige `publicationApproved: true` en cada uno. Los borradores van en `.sync-temp/`.
- `npm run instagram:import -- <url>` requiere `.env.local` (`INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_EXPECTED_USERNAME`) y solo escribe borradores en `.sync-temp/instagram-drafts/`; nunca publica ni modifica `src/content/` o `public/`. No commitear `.env.local`.
- `PENDING_CONFIRMATION` es el centinela de datos sin confirmar. Si queda en HTML, `siteUrl` o `mapUrl`, `validate:launch` bloquea el build.
- `check:build` aplica presupuestos estrictos (320 KB por WebP, 1,4 MB por proyecto): optimizá las imágenes en vez de subir los límites.
- No modificar, recortar, recolorear ni recrear los logos de `public/assets/brand/`; usar los archivos originales en la variante clara u oscura correspondiente.

## Reglas de contenido

- No inventar proyectos, testimonios, certificaciones, especificaciones, precios, stock, cobertura ni relaciones comerciales; usar solo datos aprobados por EAD.
- No usar imágenes de stock presentadas como trabajos reales ni publicar datos personales, patentes o nombres de clientes sin autorización.
- No publicar CTAs, formularios o enlaces con destinos ficticios. El formulario envía a Formspree o abre WhatsApp; el e2e intercepta ambos servicios y no envía mensajes reales.
- Mantener el tono en español rioplatense, HTML semántico y accesibilidad: `alt` en imágenes informativas, labels en controles, foco visible y cero overflow horizontal en desktop y Pixel 5.
- No habilitar analítica, cookies no esenciales, mapas embebidos ni scripts de terceros sin consentimiento y documentación.
- El sitio no es tienda, portal de clientes, sistema de gestión ni catálogo con stock.

## Proceso

- Trabajo dirigido por spec: antes de una feature no trivial, leer `spec/constitution/` y crear o actualizar `spec/features/NNN-nombre/{spec,plan,tasks}.md` antes de tocar código.
- Proponer un plan y esperar OK para tareas no triviales; una tarea a la vez. Si hay menos de 80% de certeza, preguntar antes de inventar.
- CI: `.github/workflows/pages.yml` corre `npm run quality` en PR y push a `main`; solo `main` despliega `dist/` a GitHub Pages. No hay deploy manual.
