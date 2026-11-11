# 014 · Plan técnico

## Enfoque

La interacción se implementa con CSS y una ampliación de `src/lib/motion.ts`. No se agregan dependencias ni se altera el DOM de contenido: los componentes solo exponen atributos `data-*` y clases de presentación.

## Movimiento ligado al scroll

- `[data-scroll-hero]` calcula un progreso de salida por hero y lo publica como `--hero-progress`.
- La copia se desplaza con `translate`, la imagen escala dentro de su recorte y la señal de explorar se desvanece.
- Los títulos con `data-index` reciben `--index-shift`; la línea y el número se revelan junto con `SectionHeading`.
- `[data-scrub]` publica un desplazamiento de encuadre; la galería lo usa con `object-position`, sin mover el rectángulo de la imagen ni crear overflow.
- La barra de progreso pasa a `clip-path` para conservar el gradiente azul/amarillo sin comprimirlo.

## Interacciones de puntero

- Solo se inicializan con `(pointer: fine)` y sin movimiento reducido.
- `[data-magnetic]`: desplazamiento máximo de 6 px en botones.
- `[data-pointer-media]`: desplazamiento máximo de 4 px en imágenes con hover.
- `[data-spotlight]`: coordenadas de un radial-gradient muy tenue sobre módulos de servicio.
- Todos los listeners se cancelan al salir y usan `requestAnimationFrame` para no saturar el hilo principal.

## Componentes

- `Hero` y `PageHero`: `data-scroll-hero`.
- `WorkshopGallery`: `data-scrub` en cada tile.
- `ServiceHighlights`, `ProductCategoryCard`, `CraneLineCard`: `data-spotlight` y `data-pointer-media`.
- `ButtonLink`: `data-magnetic` para variantes no ghost.
- `DesktopNav` y `MobileNav`: clases de interacción y animación de entrada.
- `TrustBar` y `Footer`: reveals de aproximación.

## Riesgos y mitigaciones

- **Overflow:** no se usa desplazamiento horizontal inicial ni tracks más anchos que el viewport. Las escalas solo se activan al hacer scroll y quedan dentro de contenedores con recorte.
- **E2E:** se mantienen `.photo-frame`, textos, enlaces, formularios, `aria-current` y la estructura de `main > section`.
- **Sin JS:** los estados iniciales viven bajo `html.motion-ready`; sin JavaScript todo queda visible.
- **Reduced motion:** el módulo no agrega `motion-ready` y el bloque de preferencias neutraliza los estados restantes.
- **Performance:** elementos cacheados, un listener de scroll con rAF y listeners de puntero solo en dispositivos finos.

## Validación

`npm run quality`, revisión visual desktop/móvil, prueba con `prefers-reduced-motion` y comprobación de que no hay overflow en las rutas principales.
