# 005 · Servicios oleohidráulicos

**Estado:** implementada

## Qué hace

Crea una página índice de servicios y fichas individuales para cada capacidad del taller. Organiza las cuatro áreas principales —reparación integral, instalaciones, mantenimiento y diagnóstico, repuestos— en páginas claras, encontrables y accionables desde la navegación y la portada.

## Por qué

Los visitantes que llegan buscando un servicio específico necesitan encontrar rápido si EAD lo hace, cómo lo hace y cómo consultar. Separar cada servicio en su propia página permite contenido más denso que en la portada, mejor orientación semántica para buscadores y enlaces directos desde referencias externas.

## Criterios de aceptación

- [ ] La página `/servicios` lista las cuatro áreas principales con descripción breve y enlace a cada ficha.
- [ ] Cada ficha de servicio vive en `/servicios/[slug]` y es accesible desde el índice, la portada y la navegación.
- [ ] Cada ficha incluye descripción ampliada, alcance del servicio y CTA a contacto.
- [ ] Los datos provienen de un archivo tipado en `src/data/services.ts` y no hay contenido duplicado.
- [ ] Los slugs son estables y significativos (reparacion-integral, instalaciones, mantenimiento, repuestos).
- [ ] La página índice y las fichas usan el layout base con breadcrumbs correctos.
- [ ] Las fichas individuales tienen metadatos propios (title, description).
- [ ] No se inventan precios, plazos, garantías ni stock de repuestos.
- [ ] La lectura es clara en móvil con párrafos de longitud controlada.

## Fuera de alcance

- No se crea un sistema de categorías ni etiquetas más allá de las cuatro áreas definidas.
- No se incluyen precios, tablas comparativas ni calculadoras.
- No se publican fichas de servicios que EAD no preste realmente.
