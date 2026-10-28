# 018 — Encabezado de inicio compacto — Plan

## Dirección

Un hero de marca en lugar de un hero publicitario: logo grande, nombre del taller y titular, con el mensaje comercial en una línea y los CTA intactos. El alto se reduce quitando el título largo y la lista de áreas.

## Implementación

1. Agregar `owner` al hero de `src/data/home.ts` y fijar `title: 'EAD Oleohidráulica'` y `owner: 'Enzo A. Deux'`.
2. Reescribir `src/components/sections/Hero.astro`: logo más grande, `h1` de tamaño moderado, línea del titular, subtítulo y CTA; quitar la etiqueta superior y el listado de áreas; reducir el padding vertical.
3. Pasar `owner` desde `src/pages/index.astro`.
4. Verificar visualmente en 360/768/1024/1440/2560 px y correr `npm run quality`.

## Riesgos

- **Pérdida de información** — mitigado: el subtítulo conserva el mensaje comercial y las áreas siguen en la sección de servicios.
- **Contraste sobre la foto** — mitigado: el texto queda sobre la zona oscura de la izquierda, igual que en 016.
