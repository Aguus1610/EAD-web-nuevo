# 007 · Portfolio de trabajos reales — Plan

## Enfoque

Usar una colección `projects` con esquema estricto y un flujo editorial que exija autorización. Generar listado y páginas dinámicas desde contenido, y mantener filtros como mejora progresiva sobre una lista accesible completa.

## Implementación

1. Definir el esquema `Project` en `src/content.config.ts`, incluyendo `publicationApproved` y relaciones con servicios.
2. Crear estructura de assets en `public/assets/projects/<slug>/` y convención de nombres.
3. Implementar `ProjectCard.astro`, `ProjectFilter.astro`, `ProjectGallery.astro`, `ProjectFacts.astro` y `RelatedServices.astro`.
4. Crear `src/pages/trabajos/index.astro` y `src/pages/trabajos/[slug].astro`.
5. Implementar filtrado accesible, enlace compartible opcional y estado sin resultados.
6. Integrar CTA contextual con título de proyecto y servicio relacionado.
7. Añadir pruebas de esquema, privacidad, rutas, filtros, teclado, imágenes y contenido condicional.

## Decisiones

- **Autorización como campo obligatorio** — un proyecto no se incluye en producción si no está marcado como aprobado.
- **Filtro progresivo** — el contenido completo existe en HTML y JavaScript solo mejora la experiencia.
- **Narrativa problema-intervención-resultado** — comunica capacidad sin convertir la ficha en un informe técnico exhaustivo.
- **Assets por proyecto** — simplifica mantenimiento, revisión de privacidad y eliminación completa de un caso.
- **Instagram como fuente opcional** — la feature 012 prepara borradores desde la API oficial, pero la aprobación y publicación continúan siendo manuales.

## Riesgos

- **Exposición de clientes o datos sensibles** — establecer revisión manual obligatoria de texto e imágenes antes del build de producción.
- **Fotografías pesadas o inconsistentes** — definir tamaños, formatos, relación de aspecto y límites de peso.
- **Pocos proyectos iniciales** — priorizar calidad y profundidad; no rellenar con ejemplos inventados.
