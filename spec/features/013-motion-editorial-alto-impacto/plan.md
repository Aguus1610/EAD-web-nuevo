# 013 · Plan técnico

## Enfoque

La complejidad se concentra en composición, capas, tipografía y movimiento; no en efectos ajenos a la identidad. Todo el motion se implementa con CSS y un módulo TypeScript propio, sin dependencias nuevas.

## Sistema visual

- **Fotografía:** `PhotoFrame` deja de dibujar marcos y etiquetas. La imagen ocupa el contenedor completo, con marcas de esquina finas y recortes industriales opcionales.
- **Etiquetas:** `.technical-label` pasa de bloque amarillo a línea + texto en mayúsculas. Sobre fondos oscuros cambia a texto claro con acento amarillo.
- **Encabezados:** `SectionHeading` admite un índice; se dibuja un número grande en outline detrás del título y una marca vertical amarilla.
- **Superficies:** `.industrial-card` deja de ser una caja cerrada y se convierte en un módulo abierto con regla superior. Las grillas técnicas aportan profundidad sin sombras ni 3D.
- **Color:** se mantienen navy, azul intenso, amarillo, blanco y Arial. No se agregan colores de marca.

## Movimiento

- `src/lib/motion.ts`: módulo único que agrega `motion-ready` solo si el navegador puede ejecutarlo y el usuario no pidió movimiento reducido.
- `IntersectionObserver` revela `[data-reveal]` y `[data-reveal="media"]` con opacidad, desplazamiento vertical y `clip-path`.
- Un único listener de scroll con `requestAnimationFrame` actualiza:
  - barra de progreso del header;
  - variables de parallax para `[data-parallax]`;
  - etapa activa de `[data-process-step]`.
- La animación se aplica sobre elementos que ya existen; no se modifica el DOM de contenido.
- `prefers-reduced-motion: reduce` desactiva reveals, parallax, sticky y transiciones no esenciales.

## Componentes

1. `BaseLayout` importa el módulo de motion y mantiene la estructura semántica.
2. `Header` incorpora la barra de progreso y un estado de scroll.
3. `PhotoFrame` elimina borde y etiqueta visible; conserva `.photo-frame`, `img`, dimensiones, alt y carga prioritaria.
4. `Hero` y `PageHero` pasan a layout full-bleed con panel de texto, imagen recortada y capas técnicas.
5. `SectionHeading` agrega índice opcional y nueva marca gráfica.
6. `ServiceHighlights`, `ProductCategoryCard`, `CraneLineCard`, `ProjectCard` y `BrandCard` usan módulos abiertos.
7. `WorkProcess` usa columna sticky + pasos con riel de progreso.
8. `WorkshopGallery` pasa a mosaico sin bordes, con captura y hover cinematográfico.
9. `ContactInfo`, `QuoteForm` y `Footer` se reorganizan sin cajas rígidas.

## Riesgos y mitigaciones

- **Overflow horizontal:** evitar tracks más anchos que el viewport y transformaciones horizontales iniciales; usar `min-width: 0`, `overflow-hidden` y verificar con el E2E existente.
- **Tests E2E:** conservar exactamente un `.photo-frame img` en el primer `main > section` de cada ruta distinta de 404; no alterar textos ni enlaces.
- **Contenido oculto sin JS:** las reglas de reveal solo aplican bajo `html.motion-ready`.
- **Performance:** un solo observer y un solo listener de scroll; sin librerías.
- **Legibilidad:** los textos sobre fotos usan capas navy sólidas o suficiente contraste; las fotos no se filtran de forma que oculten el estado real del taller.

## Validación

`npm run typecheck`, `npm run lint`, `npm test`, `npm run build`, `npm run check:build`, `npm run validate:launch` y `npm run test:e2e`. Revisión visual en desktop y Pixel 5, incluyendo scroll, reduced motion y navegación móvil.
