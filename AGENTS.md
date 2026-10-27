# EAD Oleohidráulica — Sitio institucional y comercial

Sitio estático en Astro 7 + TypeScript estricto + Tailwind v4 (plugin de Vite, sin archivo de config) para EAD Oleohidráulica (Colonia Barón, La Pampa). Convierte visitas en consultas por WhatsApp, correo o formulario (EmailJS). Contenido visible en español rioplatense.

## Comandos

Requiere Node >= 22.12 (`engines`). Astro 7 no arranca con versiones anteriores.

- `npm run dev` — servidor local en `http://127.0.0.1:4321/EAD-web-nuevo/`
- `npm test` — Vitest; solo recoge `src/**/*.test.ts` (tests colocalizados junto al código)
- `npm run test:e2e` — Playwright en desktop-chromium + Pixel 5; levanta solo el dev server (puerto 4321); `PLAYWRIGHT_REUSE_SERVER=1` para reutilizar uno ya corriendo
- `npm run lint` y `npm run format:check` — ambos ejecutan `astro check`; no existe ESLint ni Prettier
- `npm run check:build` — presupuestos de tamaño por archivo/tipo sobre `dist/`
- `npm run validate:launch` — reglas de lanzamiento (ver abajo)
- `npm run quality` — gate completo (typecheck + lint + test + build + check:build + validate:launch + test:e2e); es exactamente lo que corre CI en cada push/PR
- `npm run instagram:import -- <url>` — genera un borrador de proyecto desde una publicación de Instagram; requiere `.env.local` con `INSTAGRAM_ACCESS_TOKEN` (ver `.env.example`)

## Gotchas que un agente fallaría sin ayuda

- **Base path**: el sitio vive en `https://aguus1610.github.io/EAD-web-nuevo` (`base: '/EAD-web-nuevo'` en `astro.config.mjs`, deploy automático a GitHub Pages solo desde `main`). Todo enlace/asset interno debe respetar el base (usar utilidades de `src/lib/url.ts`); `validate:launch` falla si un HTML contiene rutas absolutas fuera de `/EAD-web-nuevo`. Si cambia el host, actualizar `base`, `siteUrl` en `src/data/site.ts` y los tests e2e.
- **Reglas de lanzamiento** (`scripts/validate-launch.mjs`, corre en CI): cada página debe tener exactamente 1 `<main>`, 1 `<h1>` y `rel="canonical"`; no puede quedar `PENDING_CONFIRMATION` en el build; `siteUrl` y `mapUrl` de `src/data/site.ts` no pueden estar pendientes.
- **Proyectos** (`src/content/projects/`): el build falla si un proyecto no tiene `publicationApproved: true`. Los assets deben ser locales en `/assets/projects/<slug>/*.webp`; están prohibidas URLs de CDN de Instagram como assets y `mediaId` duplicados. Archivos que empiezan con `_` se ignoran (borradores).
- **Datos comerciales**: única fuente de verdad en `src/data/site.ts` (contactos, horarios, configuración pública de EmailJS, coordenadas, años de experiencia). No duplicar ni inventar valores en componentes; todo CTA necesita destino real y configurable (`src/lib/contact.ts` para WhatsApp/correo/teléfono).
- **EmailJS**: el envío usa el SDK en el navegador con service ID, template ID y public key. Nunca versionar una private key; los orígenes permitidos y el destino se configuran en el panel de EmailJS. Sin JavaScript se oculta el envío y quedan WhatsApp/correo/teléfono.
- **Instagram**: el import nunca corre durante el build; las respuestas se validan con contratos en `src/lib/instagram.ts`.
- **Tests e2e** bloquean la red externa (api.emailjs.com, wa.me, api.whatsapp.com); no esperes llamadas reales en ellos.

## Estructura

- `src/data/` — datos del negocio, contactos, marcas, líneas de grúas, navegación
- `src/content/` — colecciones validadas por `src/content.config.ts` (proyectos con frontmatter tipado)
- `src/lib/` — utilidades puras: url, seo, contact, instagram, projects, gallery
- `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/` — estándar Astro
- `public/assets/brand/` — logos originales suministrados; no redibujar ni recolorear
- `public/assets/projects/` y `public/assets/workshop/` — fotos reales optimizadas que se publican (WebP)
- `media-src/workshop/` — originales JPG y descartes fuera del build; no moverlos a `public/`
- `tests/e2e/` — recorridos de navegación, contacto, responsive y accesibilidad
- `spec/` — SDD: constitution (mission, tech-stack, roadmap), features y decisiones de release

## Convenciones

- `PascalCase` para componentes y tipos; `camelCase` para el resto; slugs en `kebab-case`.
- HTML semántico antes que componentes genéricos; jerarquía de encabezados correcta.
- Mobile-first; verificar cada feature en 360 / 768 / 1024 / 1440 px.
- Sin `any` en TypeScript; componentes pequeños, tipados y reutilizables.

## No hagas

- No modificar, recrear ni recolorear los logos de EAD, Hidro-Grubert o Palfinger.
- No inventar proyectos, testimonios, certificaciones, precios, stock, coberturas ni relaciones comerciales.
- No añadir base de datos, auth, CMS o dependencias grandes sin justificación y aprobación.
- No subir `.env*`, credenciales ni datos personales al repo.
- No usar imágenes de stock que puedan confundirse con trabajos reales.
- No publicar originales pesados ni patentes/rostros legibles; optimizar a WebP y archivar en `media-src/`.
- No habilitar tracking, cookies no esenciales ni scripts de terceros sin consentimiento y documentación.

## Flujo de trabajo

- Antes de una tarea no trivial, proponer un plan y esperar el OK; una tarea a la vez y reportar los cambios al terminar.
- Spec-driven: cada feature nueva va a `spec/features/NNN-nombre/` con `spec.md` + `plan.md` + `tasks.md`, y se actualiza `spec/constitution/roadmap.md` (ver `spec/README.md`).
- Si no hay certeza al 80%, preguntar antes que inventar.

## Documentación de referencia

- `spec/constitution/mission.md` — propósito, público y límites del producto
- `spec/constitution/tech-stack.md` — arquitectura, convenciones y reglas visuales
- `spec/performance-budgets.md` y `spec/release.md` — presupuestos y criterios de release
