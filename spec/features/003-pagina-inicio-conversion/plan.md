# 003 · Página de inicio orientada a conversión — Plan

## Enfoque

Componer la portada con secciones independientes alimentadas por datos y contenido real. El hero debe funcionar con o sin fotografía; las imágenes de trabajos se incorporan únicamente cuando están autorizadas. Se prioriza un recorrido lineal: comprender, confiar, explorar y contactar.

## Implementación

1. Definir el contenido de portada y CTA en `src/data/home.ts` con campos tipados.
2. Implementar `Hero.astro`, `TrustBar.astro`, `ServiceHighlights.astro` y `BrandRepresentation.astro`.
3. Implementar `FeaturedProjects.astro`, `WorkshopIntro.astro`, `LocationSummary.astro` y `FinalCta.astro`.
4. Construir `src/pages/index.astro` con orden semántico y un solo `h1`.
5. Resolver estados sin imágenes o sin proyectos destacados de manera editorialmente honesta.
6. Añadir metadatos únicos, imagen social configurable y pruebas de CTA, jerarquía y responsive.

## Decisiones

- **Hero legible sin depender de fotografía** — evita bloquear el lanzamiento y protege el mensaje cuando todavía faltan imágenes reales.
- **Secciones breves con enlaces profundos** — la portada resume y deriva; se descarta duplicar todo el contenido de páginas internas.
- **Marcas dentro de un bloque contextual** — evita que los logos de terceros opaquen la identidad de EAD.
- **Sin carrusel automático** — mejora accesibilidad, rendimiento y comprensión.

## Riesgos

- **Texto publicitario genérico** — redactar a partir de capacidades concretas y someter afirmaciones a aprobación.
- **Portada demasiado extensa** — limitar cada sección a una tarea de comunicación y medir repetición de CTA.
- **Falta de fotografías reales** — usar composición tipográfica, texturas discretas o espacios reservados, nunca imágenes ajenas presentadas como propias.
