# 009 · SEO local y contenido compartible — Plan

## Enfoque

Centralizar metadatos y datos estructurados en utilidades tipadas, generando valores específicos desde cada contenido. Configurar sitemap y canonical según un `siteUrl` obligatorio de producción. Mantener una política editorial explícita que prohíba páginas locales o técnicas sin información real.

## Implementación

1. Definir `SeoMeta` y utilidades en `src/lib/seo.ts`.
2. Integrar metadatos, Open Graph y canonical en `BaseLayout.astro`.
3. Configurar `site` en Astro, sitemap y `robots.txt` por entorno.
4. Implementar datos estructurados de negocio local, organización, servicios, breadcrumbs y proyectos cuando correspondan.
5. Crear `src/pages/404.astro` y componentes de navegación de recuperación.
6. Revisar títulos, descripciones, slugs y enlaces internos de todas las features publicadas.
7. Añadir tests de metadatos, canonical, sitemap, JSON-LD y previews sociales.

## Decisiones

- **SEO como datos tipados** — reduce omisiones y evita metadatos copiados entre páginas.
- **Canonical dependiente de dominio confirmado** — el lanzamiento queda bloqueado hasta contar con URL pública definitiva.
- **Contenido local solo con cobertura real** — se descartan páginas masivas por localidad.
- **JSON-LD mínimo y verificable** — se incluyen únicamente propiedades respaldadas por datos del negocio.

## Riesgos

- **Dominio o datos NAP todavía no definidos** — mantener `siteUrl` y teléfono como requisitos de lanzamiento.
- **Schema con afirmaciones incorrectas** — validar visualmente y con herramientas antes de publicar.
- **Metadatos repetidos** — establecer tests de unicidad para páginas principales y contenido dinámico.
