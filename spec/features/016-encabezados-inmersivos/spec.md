# 016 · Encabezados con fotografía inmersiva

**Estado:** implementada; verificación completa (28/10/2026)

## Qué hace

Convierte la fotografía de cada encabezado en una capa de fondo a sangre completa dentro de la sección oscura. La imagen ocupa todo el alto del encabezado y, en escritorio, el 55% derecho del ancho; se recorta con `object-cover` y se funde hacia la izquierda con un degradado del azul profundo de la marca. El texto queda sobre la zona oscura, sin marco, borde ni etiqueta visible.

**Ajuste de visibilidad (28/10/2026):** la foto pasó del 50% al 60% y luego al 55%, con una franja de degradado más corta para liberar el contenido importante del borde izquierdo. El título se ajusta a 60 px entre 1024 y 1279 px para no invadir la foto.

Se aplica a `PageHero` (empresa, servicios, productos, trabajos y contacto) y al `Hero` de inicio. La página 404 conserva su tratamiento sin fotografía.

## Por qué

La foto dentro de un recuadro pequeño competía con el texto y cortaba la continuidad visual. Usarla como fondo refuerza la identidad industrial, aprovecha mejor las fotos reales del taller y mantiene el foco en el mensaje y los CTA.

## Criterios de aceptación

- [x] Cada página con foto de encabezado la muestra a sangre completa y a la altura de la sección, sin recuadro, ocupando el 55% derecho del ancho en escritorio.
- [x] La foto se funde hacia la izquierda con el fondo `deep-900`/grilla; el texto conserva contraste AA en 360, 390, 768, 1024 y 1440 px.
- [x] No hay etiqueta visible sobre la foto; la imagen es decorativa (`alt=""`) y conserva `width`/`height`.
- [x] Inicio y páginas internas comparten el mismo tratamiento; la 404 mantiene su placeholder y “Ruta interrumpida”.
- [x] No hay desbordes horizontales ni cambios en galerías, tarjetas, formularios o proyectos.
- [x] La imagen del encabezado se carga con prioridad alta; no se añade JavaScript nuevo.
- [x] Los tests e2e validan el nuevo `data-hero-image` y siguen cubriendo la 404.

## Fuera de alcance

- No se cambian las fotos ni se añaden assets nuevos.
- No se modifican las galerías, tarjetas, formularios ni el resto de las secciones.
- No se agregan animaciones, parallax ni videos.
- No se altera la paleta, la tipografía ni los logos.

## Verificación

- Capturas revisadas en 360, 390, 768, 1024 y 1440 px.
- Contraste mínimo P99 medido sobre el fondo: 4,89:1 en contacto 360; móvil/tablet ≥ 5,36:1 y escritorio ≥ 13,65:1.
- `npm run test:e2e`: 58 aprobados, 2 omitidos por diseño.
- `npm run quality`: verde.
