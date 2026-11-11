# 016 · Afinación de fotografía y marcas

**Estado:** implementada

## Qué hace

Revisa la fotografía disponible y la asigna según el contexto comercial: taller y servicios con imágenes de trabajo reales; productos con imágenes de equipos y componentes. Corrige además la presentación de los logos de Hidro-Grubert y Palfinger para que no queden dentro de recuadros blancos agregados por la interfaz.

## Por qué

La web ya cuenta con un catálogo amplio de imágenes, pero algunas piezas se usaban fuera de contexto: fotos de producto sobre fondo blanco en tarjetas de servicios, imágenes de filtros en la categoría de implementos y fotografías repetidas en héroes y evidencia. Eso debilita la lectura documental y puede hacer que una imagen ilustrativa parezca un trabajo real.

Los logos de las marcas representadas tienen fondos propios en sus archivos originales. Agregarles una placa blanca en el tema oscuro altera su lectura y produce recuadros que no pertenecen a la identidad de la marca.

## Criterios de aceptación

- [x] Las tarjetas de servicios usan fotos de trabajo o componentes en contexto, no recortes de producto sobre blanco.
- [x] La evidencia de Inicio y el archivo de Trabajos no repiten el héroe principal y priorizan fotos reales del taller.
- [x] La categoría Implementos usa una imagen de equipo o implemento, no filtros.
- [x] La galería de Empresa excluye recortes de producto, imágenes de baja resolución, fotos oficiales de catálogo y duplicados.
- [x] Los textos alternativos describen lo que muestra cada foto sin atribuir trabajos o contextos no confirmados.
- [x] Los logos de Hidro-Grubert y Palfinger se muestran directamente sobre una superficie clara continua, sin placas individuales agregadas.
- [x] La banda de marcas del Inicio es continua y no separa los logos en recuadros.
- [x] No se modifican, recortan ni recolorean los archivos de `public/assets/brand/`.
- [x] El tema claro y el oscuro conservan contraste y legibilidad en las secciones de marcas.
- [x] No aparece overflow horizontal en desktop ni Pixel 5.
- [x] `npm run quality` finaliza sin errores.

## Fuera de alcance

- Incorporar imágenes nuevas, de stock o generadas.
- Publicar fichas de proyectos sin datos aprobados.
- Recrear o retocar logos oficiales.
- Cambiar rutas, contenido comercial, formularios o SEO.
