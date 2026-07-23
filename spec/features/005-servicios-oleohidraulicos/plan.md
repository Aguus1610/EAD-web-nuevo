# 005 · Servicios oleohidráulicos — Plan

## Enfoque

Modelar los servicios como datos planos en un archivo tipado y generar páginas estáticas con `getStaticPaths`. Cada ficha comparte un layout de secciones (descripción, alcance, CTA). El índice muestra las cuatro áreas con extracto.

## Implementación

1. Definir `src/data/services.ts` con interfaz `ServiceEntry` (slug, title, summary, description, scope, cta) y el listado completo.
2. Crear componente `ServiceList.astro` para el índice, no vinculado a una data específica (tipado genérico).
3. Crear `src/pages/servicios/index.astro` con título, descripción y listado.
4. Crear `src/pages/servicios/[slug].astro` con `getStaticPaths` que retorna las cuatro rutas, pasando el objeto `ServiceEntry` como props.
5. Añadir breadcrumbs, metadatos y CTA en cada ficha.

## Decisiones

- **Archivo tipado en `src/data/`** — más simple que una colección de contenido para cuatro fichas sin body rich.
- **`[slug].astro` con props** — la página recibe el objeto completo, sin resolver desde el slug dentro del template.
- **Sin body Markdown** — los párrafos descriptivos y de alcance se mantienen como strings en el data file para simplicidad y control de calidad.

## Riesgos

- **Slugs inconsistentes** — verificar que coincidan exactamente con los href usados en portada, navegación y servicios índice.
- **Contenido demasiado escaso** — si una ficha no aporta más que el extracto del índice, considerar si la página individual justifica su existencia.
