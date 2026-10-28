# 014 — Renovación fotográfica del taller — Plan

## Dirección

La fotografía es evidencia del taller real: grúas, elevadores, componentes, instalaciones y diagnóstico. Se prioriza legibilidad, variedad de orientación y encuadres que funcionen tanto en bloques anchos (16/7) como en héroes 4/3 y galerías 4/3. Las tomas promocionales de catálogo se retiran para no presentarlas como trabajo propio.

## Implementación

1. Inventariar `public/assets/workshop/` y analizar visualmente las 30 fotos nuevas con corrección EXIF.
2. Convertir con Sharp: `rotate()`, resize máximo 1600 px, WebP calidad 78, `smartSubsample`.
3. Mover los JPG originales a `media-src/workshop/` y las WebP retiradas a `media-src/workshop/_legacy/`, fuera de `public/`.
4. Conservar tres fotos reales previas útiles (interior general, interior con brazo y grúa Hidro-Grubert N-15000) con nombres normalizados.
5. Reescribir `src/data/media.ts` con 32 entradas: id, src, alt descriptivo, dimensiones reales, orientación y foco de recorte.
6. Asignar héroes por ruta, imágenes por servicio y producto, evidencia de Inicio, archivo de Trabajos y acompañamiento del formulario.
7. Pixelar la patente legible en `grua-palfinger-montada.webp`.
8. Ampliar `src/data/media.test.ts` para verificar existencia física de cada archivo y coherencia entre dimensiones y orientación.
9. Ajustar textos visibles que no coincidían con la foto (etiqueta del héroe de Contacto y alt de la vista lateral del portaescalera).
10. Validar visualmente todas las rutas en 1440 y 360/390 px y ejecutar el gate completo.

## Ampliación 2026-10-28

1. Descomprimir el lote de 17 JPG y revisar orientación EXIF, encuadre, patentes y repetición.
2. Seleccionar 9 fotos: 2 paisajes y 7 retratos; descartar 7 variantes casi idénticas y conservar el original de `servicio-a-campo` que ya estaba publicado.
3. Convertir a WebP con máximo 1600 px y calidad 78; pixelar las 3 patentes legibles con un mosaic de bloques de 6 px.
4. Archivar los 17 originales en `media-src/workshop/2026-10-28/`, fuera de `public/`.
5. Incorporar las 9 entradas a `src/data/media.ts`; actualizar `homeEvidenceMedia` y `workArchiveMedia` para que el lote tenga presencia fija además de la galería rotativa.
6. Ampliar `media.test.ts` con la verificación del lote y el mínimo de 40 imágenes en la rotación.
7. Actualizar presupuestos, roadmap y documentación de la feature; ejecutar `npm run quality`.

## Decisiones

- **Originales fuera del build** — `media-src/workshop/` queda como archivo de trabajo; `public/` sólo contiene derivados optimizados.
- **42 imágenes** — se conservan 3 fotos reales previas irremplazables (interiores y N-15000); se descartan tomas casi duplicadas de control remoto y las WebP promocionales. El lote 2026-10-28 suma 9 fotos y archiva sus 7 variantes repetidas.
- **Nombres semánticos** — slugs en kebab-case que describen marca, equipo o componente (`grua-hidrogrubert-n7000`, `portaescalera-palfinger-pb13`, etc.).
- **Un archivo por contexto** — una misma foto puede reaparecer en galería o archivo, pero los héroes de ruta no se repiten entre sí salvo evidencia puntual.
- **Recorte controlado** — `position` se define por imagen para que los bloques 16/7 no corten el sujeto principal.
- **Privacidad** — se revisan rostros, patentes y documentos; la única patente legible se pixeló en el derivado publicado.
- **Presupuesto intacto** — no se amplían límites: el catálogo final pesa ~6,1 MB de WebP y el build compartido ~7,3 MB, por debajo de 8,5 MB y 10 MB respectivamente.

## Riesgos

- **Recortes en bloques anchos** — mitigado con `position` y revisión visual de cards y galerías.
- **Peso del build** — mitigado al sacar los originales de `public/`; los presupuestos bloquean cualquier exceso.
- **Datos identificatorios** — mitigado con revisión de los WebP finales y pixelado de la patente.
- **Fotos casi duplicadas** — se excluyó una toma de control remoto y se distribuyeron las restantes para evitar repetición en una misma sección.
- **Videos pendientes** — no se promete su publicación hasta contar con archivos, permisos y presupuesto definido.
