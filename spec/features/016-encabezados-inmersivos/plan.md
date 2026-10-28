# 016 · Encabezados con fotografía inmersiva — Plan

## Enfoque

Crear un componente `HeroBackdrop` que renderice la imagen como capa absoluta dentro del encabezado, con `object-cover`, `object-position` proveniente del catálogo y prioridad de carga. Los encabezados pasan a una composición de dos columnas en escritorio: el texto sobre la columna izquierda y la foto ocupando el 60% derecho a toda altura, fundida en su borde izquierdo. En móvil la foto cubre todo el fondo con un overlay más fuerte para conservar el contraste.

La foto se recorta al alto de la sección; no hay `PhotoFrame` en el hero.

## Archivos afectados

- `src/components/ui/HeroBackdrop.astro` — nueva capa de fondo con imagen, overlays y `data-hero-image`.
- `src/components/sections/PageHero.astro` — layout inmersivo y rama sin imagen para 404.
- `src/components/sections/Hero.astro` — mismo tratamiento en inicio.
- `src/styles/global.css` — máscara y degradados responsive.
- `src/pages/*` — retiro de `imageLabel` de las llamadas a `PageHero`.
- `tests/e2e/site.spec.ts` — selector del hero y cobertura de 404.
- `spec/features/016-encabezados-inmersivos/`, `spec/constitution/roadmap.md` y `spec/README.md`.

## Decisiones

- **Fondo a sangre completa** — la foto ocupa todo el alto del encabezado y se integra con la grilla; no se usa un panel lateral con borde.
- **Degradado hacia la izquierda** — `deep-900` opaco en el borde izquierdo de la foto y transparente hacia la derecha; en móvil el overlay es más fuerte para compensar el texto sobre la imagen.
- **Sin etiqueta visible** — se elimina `imageLabel`; la imagen es decorativa y el texto del hero ya describe el contexto.
- **Marca de agua solo sin foto** — cuando hay foto, la grilla y el degradado alcanzan; la marca de agua se reserva para la 404.
- **Dos columnas en escritorio** — el texto queda en la columna izquierda y la foto ocupa el 60% derecho; en móvil el texto ocupa todo el ancho sobre la foto.
- **Superficie visible ampliada** — el ancho de la foto y el velo se ajustaron para que la imagen se lea como protagonista sin perder contraste.
- **Sin JS nuevo** — la animación de aparición existente se mantiene; la imagen usa `loading="eager"` y `fetchpriority="high"`.

## Riesgos

- Fotos con cielos o fondos claros pueden reducir el contraste del texto en móvil; se valida con overlay y capturas.
- Fotos verticales pueden recortarse de forma agresiva; se ajusta `object-position` por imagen.
- El cambio de estructura puede romper el selector e2e `.photo-frame img`; se actualiza a `data-hero-image`.

## Verificación

- `npm run quality`
- Capturas en 360, 390, 768, 1024 y 1440 px.
- Comprobación de contraste AA del texto sobre el fondo.
- Confirmar que la 404 conserva “Ruta interrumpida” y no tiene `.photo-frame`.
