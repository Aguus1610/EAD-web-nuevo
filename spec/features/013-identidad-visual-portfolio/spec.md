# 013 · Identidad visual corporativa del portfolio 2026

**Estado:** implementada

## Qué hace

Aplica el sistema visual del portfolio de identidad de EAD Oleohidráulica (edición 01, octubre 2026) a toda la web existente, sin alterar funciones, rutas, contenido, datos ni integraciones. Reemplaza la estética previa (navy/steel/dorado con brillos, gradientes, partículas y animaciones) por el lenguaje del portfolio: planos, líneas rectas, diagonales discretas, alto contraste y jerarquías claras.

## Por qué

La web debe transmitir especialización técnica, claridad y confianza con una única voz visual coherente con los materiales impresos y digitales de la marca. La estética anterior no respetaba la paleta aprobada ni las reglas de uso del logotipo.

## Sistema visual aplicado

- **Paleta:** azul profundo `#07123F` (base institucional), azul intenso `#1B18A7` (acentos, líneas, diagonales), amarillo `#FFDA24` (CTAs, detalles), blanco `#FFFFFF`, gris claro `#E9EDF6` (superficies de apoyo), negro técnico `#11131B` (texto). Proporción orientativa 70 % neutros / 20 % azul / 10 % amarillo.
- **Tipografía:** Arial (o sans recta equivalente del sistema) para títulos y textos; etiquetas técnicas en mayúsculas con tracking amplio. Sin fuentes condensadas, redondeadas ni decorativas.
- **Lenguaje gráfico:** bloques alineados, bordes rectos (redondeos mínimos), separadores rectos, diagonales amarillas y azules como acentos, márgenes generosos, sin efectos 3D, brillos, sombras pesadas, degradados llamativos ni animaciones innecesarias.
- **Logotipo:** se conservan intactos los PNG originales (`public/assets/brand/`): versión blanca sobre fondos oscuros, negra sobre claros. Las marcas de terceros (Hidro-Grubert, Palfinger) se muestran como identidades independientes, sin recolor, deformación ni fusión.

## Criterios de aceptación

- [x] Paleta centralizada como tokens de diseño (Tailwind v4 `@theme`) y aplicada en todas las páginas y componentes.
- [x] Toda la tipografía usa Arial o sans recta; se eliminan las fuentes narrow y mono decorativas.
- [x] Se eliminan partículas, grano, brillos, gradientes decorativos, glow y animaciones innecesarias.
- [x] Botones, tarjetas, formularios, navegación, encabezado y pie responden al mismo sistema plano.
- [x] Los logos originales no se modifican ni recolorean; se respeta su contraste según fondo.
- [x] Contraste AA en textos y controles; estados no dependen solo del color.
- [x] Sin overflow horizontal ni regresiones de navegación por teclado en 360/768/1024/1440 px.
- [x] `npm run quality` completo en verde (typecheck, lint, tests, build, presupuestos, reglas de lanzamiento y e2e).

## Fuera de alcance

- No se agrega contenido comercial, imágenes, servicios ni datos nuevos.
- No se modifican formularios, integraciones (EmailJS, WhatsApp), SEO ni estructura de páginas.
- No se rediseñan los logos ni se crean versiones aproximadas de los mismos.
- No se publica ni despliega; los cambios quedan listos para revisión local.
