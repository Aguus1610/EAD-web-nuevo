# 016 · Afinación de fotografía y marcas — Plan

## Dirección

Mantener la estética industrial y documental, pero hacer que cada imagen cumpla una función clara. Las fotos reales del taller y de los equipos ocupan los contextos de servicios, evidencia y galería; las fotos oficiales de producto quedan en las categorías de productos. Los logos se presentan sobre superficies continuas claras para respetar sus archivos originales, sin placas individuales.

## Implementación

1. Auditar el catálogo de `public/assets/workshop` y clasificar las imágenes por uso: taller, servicio, producto, detalle o descarte.
2. Reasignar héroes, tarjetas de servicios, evidencia de Inicio y archivo de Trabajos.
3. Actualizar la categoría Implementos y las imágenes de acompañamiento de cada servicio.
4. Marcar en `src/data/media.ts` las imágenes que no deben entrar en la galería rotativa y aplicar el filtro en Empresa.
5. Corregir los textos alternativos para que describan el contenido real y no atribuyan contextos dudosos.
6. Convertir la sección de marcas de Productos en una superficie clara continua y quitar las placas individuales de los logos.
7. Unificar la banda de marcas del Inicio, sin divisiones que la conviertan en recuadros.
8. Verificar ambos temas, desktop y móvil, y ejecutar el pipeline de calidad.

## Decisiones

- **Fotos reales en contexto** — una foto de producto sobre blanco no se usa como evidencia de un trabajo de taller.
- **Productos en su sección** — las imágenes oficiales de Hidro-Grubert y Palfinger se reservan para las categorías de repuestos.
- **Una superficie, no placas** — el fondo claro de la sección de marcas permite que el logo de Hidro-Grubert se integre con su propio fondo blanco; no se agrega un recuadro por logo.
- **Galería curada** — se conserva el catálogo completo para los tests, pero la rotación sólo considera fotos documentales.
- **Sin alterar logos** — no se recortan, recolorean ni recrean los archivos originales.

## Riesgos

- **Cambios de contexto** — revisar que cada alt y cada tarjeta describan una capacidad general, no un proyecto inventado.
- **Contraste del tema oscuro** — la sección clara de marcas necesita overrides de texto y bordes para no heredar los colores del tema oscuro.
- **Recortes** — comprobar las imágenes elegidas en las relaciones de aspecto de las tarjetas y los héroes.
