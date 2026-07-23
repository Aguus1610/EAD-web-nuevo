# 004 · Empresa y señales de confianza — Plan

## Enfoque

Modelar la página como una secuencia de evidencia: presentación, trayectoria, capacidades, proceso, instalaciones, ubicación y CTA. Mantener el contenido editable en un módulo o colección, y separar datos verificables de texto editorial.

## Implementación

1. Definir `src/data/about.ts` con historia, cifras aprobadas, diferenciales y proceso.
2. Implementar `AboutIntro.astro`, `ExperienceHighlights.astro`, `WorkProcess.astro`, `WorkshopGallery.astro` y `LocationContext.astro`.
3. Crear `src/pages/empresa.astro` con metadatos propios y enlaces a servicios, trabajos y contacto.
4. Incorporar controles de datos opcionales para ocultar métricas o imágenes todavía no aprobadas.
5. Añadir pruebas de jerarquía, contenido condicional, enlaces y ausencia de datos personales expuestos.

## Decisiones

- **Proceso descrito sin tiempos rígidos** — comunica profesionalismo sin prometer plazos que dependen del diagnóstico o los repuestos.
- **Datos reputacionales configurables** — permiten validar cada afirmación antes del lanzamiento.
- **Galería editorial, no decorativa** — cada imagen debe aportar evidencia y texto alternativo relevante.
- **Una página institucional compacta** — se descarta separar historia, equipo y taller en varias páginas sin suficiente contenido real.

## Riesgos

- **Relato demasiado genérico** — solicitar hitos, tipos de clientes y ejemplos reales antes de cerrar la redacción.
- **Exposición accidental de información sensible en fotos** — revisar fondo, patentes, documentos, rostros y marcas de clientes antes de publicar.
- **Promesas no controlables** — usar lenguaje de proceso y compromiso, no resultados absolutos.
