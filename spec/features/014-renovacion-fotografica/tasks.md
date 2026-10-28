# 014 — Renovación fotográfica del taller — Tareas

- [x] Inventariar y revisar visualmente las 30 fotos nuevas con orientación EXIF corregida.
- [x] Detectar las 25 referencias rotas y las WebP promocionales del catálogo anterior.
- [x] Convertir las fotos a WebP optimizado (máximo 1600 px, calidad 78).
- [x] Conservar tres fotos reales previas y normalizar sus nombres.
- [x] Mover originales y descartes fuera de `public/` a `media-src/workshop/`.
- [x] Reescribir `src/data/media.ts` con 32 imágenes y asignaciones por ruta, servicio, producto y galería.
- [x] Pixelar la patente legible en la foto de la grúa Palfinger montada.
- [x] Corregir textos de héroe y alt que no coincidían con la imagen.
- [x] Ampliar `media.test.ts` con verificación de existencia, orientación y metadatos.
- [x] Verificar ausencia de imágenes rotas y desbordes en 1440/360 px.
- [x] Actualizar documentación de lanzamiento, presupuestos y roadmap.
- [x] Ejecutar `npm run quality` completo y dejar la feature cerrada.
- [x] Gate final: typecheck y lint 0 errores, 29 unitarios, 11 páginas, presupuestos OK, 56 e2e aprobados (2 omitidos).
- [x] Lote 2026-10-28: revisar 17 JPG, seleccionar 9 (2 paisajes y 7 retratos) y archivar los 17 originales en `media-src/workshop/2026-10-28/`.
- [x] Pixelar las tres patentes legibles del lote y verificar los WebP finales.
- [x] Incorporar el lote al catálogo, a la evidencia de Inicio, al archivo de Trabajos y a la galería rotativa.
- [x] Ampliar `media.test.ts` y actualizar presupuestos, roadmap y documentación.
- [x] Gate del lote: 32 unitarios, 42 WebP (6,1 MB / build 7,3 MB), 58 e2e aprobados (2 omitidos) y `npm run quality` en verde.
