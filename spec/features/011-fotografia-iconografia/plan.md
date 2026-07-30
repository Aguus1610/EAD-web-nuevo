# 011 · Fotografía real e iconografía — Plan

## Dirección

Construir una identidad documental e industrial: la fotografía funciona como evidencia, los fondos oscuros como marco y los símbolos técnicos únicamente como ayuda de orientación. Se conserva la paleta y tipografía existentes para no romper la identidad aprobada.

## Implementación

1. Curar 22 fotografías seguras y exportarlas a WebP según su uso horizontal o vertical.
2. Centralizar metadatos, contexto, orientación y posición de recorte en `src/data/media.ts`.
3. Crear un componente fotográfico reutilizable con prioridad explícita para LCP y carga diferida por defecto.
4. Reemplazar las ilustraciones de `Hero` y `PageHero` por composiciones fotográficas.
5. Incorporar registro fotográfico contextual en Inicio, Servicios, Productos, Trabajos y Contacto.
6. Redibujar `ServiceIcon` y crear iconos específicos para categorías de productos.
7. Sustituir la ilustración de 404 por un símbolo de ruta interrumpida.
8. Eliminar componentes ilustrados sin referencias y validar assets, accesibilidad y rendimiento.

## Decisiones

- **Heroes estables** — cada ruta usa una foto curada fija para evitar recortes o significados impredecibles.
- **Galería rotativa** — sólo Empresa mantiene selección variable por build.
- **Metadatos centralizados** — alt, dimensiones y foco no se duplican en páginas.
- **Fotografía contextual** — una imagen puede ilustrar una capacidad general, pero nunca atribuirse a un proyecto no documentado.
- **Iconos semánticos** — cilindro y herramienta para reparación, integración vehicular para instalaciones, manómetro para diagnóstico y acoples para repuestos.
- **Presupuesto conservado** — primero se intenta mantener el límite actual de 1,5 MB de WebP y 2,5 MB totales.

## Riesgos

- **Exceso de peso** — ajustar dimensiones y calidad por uso antes de modificar presupuestos.
- **Recortes engañosos** — definir foco individual y revisar cada hero en móvil y escritorio.
- **Información identificatoria** — excluir tomas dudosas y revisar los WebP finales, no sólo los originales.
- **Iconos ambiguos** — comprobar cada símbolo junto a su etiqueta y no usar detalles decorativos sin significado.
