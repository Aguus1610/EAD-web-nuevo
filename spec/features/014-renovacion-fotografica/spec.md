# 014 — Renovación fotográfica del taller

**Estado:** implementada

## Qué hace

Reemplaza el catálogo fotográfico del sitio por las 30 tomas reales incorporadas por EAD el 27 de octubre de 2026, más tres fotografías reales del taller que se conservan. Deja un catálogo de 32 WebP optimizados, sin referencias rotas, con cada imagen asignada a la página, servicio, producto o galería donde aporta evidencia concreta.

## Por qué

El catálogo anterior tenía 25 de 35 referencias apuntando a archivos inexistentes y varias imágenes promocionales que no correspondían al taller. La web mostraba imágenes rotas y mezclaba material de catálogo con trabajo real. Las tomas nuevas documentan grúas Hidro-Grubert y Palfinger, hidroelevadores, componentes, instalaciones, diagnóstico y el taller, por lo que permiten sostener la promesa comercial con evidencia propia.

## Criterios de aceptación

- [x] Las 30 fotografías nuevas fueron revisadas una por una y las referencias de nombre se usaron como guía de uso.
- [x] El catálogo publicado contiene 32 WebP locales en `/assets/workshop/` y ninguna referencia rota.
- [x] Las fotos se auto-orientaron según EXIF, se redimensionaron a un máximo de 1600 px y se exportaron a WebP calidad 78.
- [x] Cada archivo respeta el presupuesto de 320 KB.
- [x] Los originales JPG se conservan fuera de `public/` en `media-src/workshop/` para no inflar el build.
- [x] Se retiraron del sitio las fotos de catálogo o promocionales que podían confundirse con trabajo propio.
- [x] La patente visible en la foto de la grúa Palfinger montada quedó pixelada y no es legible.
- [x] Los encabezados de Inicio, Empresa, Servicios, Productos, Trabajos y Contacto usan fotos adecuadas a su contexto.
- [x] Las fichas de los cuatro servicios y las cuatro categorías de producto tienen imagen principal y registro de apoyo coherentes.
- [x] La galería rotativa de Empresa mantiene seis imágenes por build y mezcla orientaciones.
- [x] El catálogo de pruebas verifica existencia física de cada archivo, orientación y metadatos.
- [x] La web no tiene imágenes rotas ni desborde horizontal en 360 y 1440 px.
- [x] `npm run quality` completo en verde y presupuestos de lanzamiento respetados.

## Fuera de alcance

- No se incorporan videos todavía; su integración queda pendiente de archivos o enlaces y de una decisión de peso/formato.
- No se publican fichas de proyectos ni se atribuyen las fotos a trabajos específicos sin autorización.
- No se modifica ningún logo de EAD, Hidro-Grubert o Palfinger.
- No se agregan imágenes de stock, ilustraciones ni fotos generadas.
