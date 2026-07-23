# 001 · Base técnica y sistema visual — Plan

## Enfoque

Crear una base Astro estática, TypeScript strict y Tailwind con la menor cantidad de dependencias posible. Separar configuración, contenido y presentación desde el inicio, y validar los recursos de marca sin alterarlos. La página inicial temporal funcionará como banco de pruebas visual y no como diseño comercial definitivo.

## Implementación

1. Inicializar Astro y configurar TypeScript estricto, Tailwind, alias de rutas y scripts en `package.json`.
2. Configurar lint, formato, Vitest y Playwright en los archivos raíz correspondientes.
3. Crear `src/data/site.ts`, `src/data/navigation.ts` y tipos de dominio mínimos con datos confirmados y campos pendientes visibles.
4. Crear `src/styles/global.css` con tokens CSS, reset controlado, estilos de foco, tipografía y preferencias de movimiento.
5. Crear primitivas en `src/components/ui/` para `Container`, `ButtonLink`, `SectionHeading` y `BrandLogo`.
6. Crear `src/layouts/BaseLayout.astro` con metadatos mínimos, `lang="es-AR"`, regiones semánticas y slot de contenido.
7. Copiar y referenciar los assets normalizados desde `public/assets/brand/` sin procesarlos ni recortarlos.
8. Crear una página temporal de verificación en `src/pages/index.astro` y pruebas básicas de build, render y ausencia de enlaces vacíos.

## Decisiones

- **Astro con salida estática** — prioriza SEO, velocidad y simplicidad para una web publicitaria; se descarta una SPA completa porque no aporta valor al contenido principal.
- **Contenido y contactos en módulos tipados** — evita duplicaciones y permite bloquear el lanzamiento cuando faltan datos; se descarta hardcodear información en componentes.
- **Tokens CSS propios sobre Tailwind** — permite una identidad estable y reusable sin depender de clases arbitrarias en cada sección.
- **Assets originales sin pipeline destructivo** — protege las marcas suministradas; cualquier optimización futura debe conservar dimensiones, transparencia y relación de aspecto.

## Riesgos

- **Datos de contacto incompletos** — representar el estado faltante en tipos y checklist de lanzamiento; no crear destinos ficticios.
- **Colores o tipografías demasiado influenciados por marcas asociadas** — mantener la identidad base de EAD y reservar los colores de terceros para sus logos.
- **Exceso de configuración inicial** — limitar herramientas a las que tengan un comando y una validación real dentro del flujo.
