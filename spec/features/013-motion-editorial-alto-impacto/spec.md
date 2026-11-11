# 013 · Dirección editorial y motion de alto impacto

**Estado:** implementada

## Qué hace

Reemplaza la retícula de tarjetas enmarcadas por una dirección editorial cinematográfica: fotografía a sangre, composiciones asimétricas, recortes técnicos, numeración de secciones y movimiento ligado al scroll. La identidad cromática y tipográfica se conserva.

## Por qué

La web ya comunica con claridad, pero su composición plana y las fotografías dentro de recuadros no transmiten la precisión ni la escala del trabajo real del taller. La nueva dirección usa jerarquía, capas y movimiento para que la evidencia visual tenga más peso sin cambiar el contenido comercial aprobado.

## Criterios de aceptación

- [ ] Las fotografías principales dejan de estar enmarcadas: no hay bordes rectangulares, etiquetas amarillas superpuestas ni cajas alrededor de la imagen.
- [ ] El hero y los heroes internos usan fotografía a sangre, capas, recorte diagonal y parallax; el contrato `.photo-frame img` se mantiene.
- [ ] El header conserva la identidad y suma una barra de progreso de lectura.
- [ ] Los encabezados de sección incorporan numeración e indicadores técnicos.
- [ ] Servicios, marcas, productos, trabajos, proceso, galería y contacto dejan de apoyarse en tarjetas cerradas.
- [ ] El proceso de trabajo usa una columna sticky y un riel de progreso.
- [ ] Los reveals, parallax y transiciones se activan por progressive enhancement y respetan `prefers-reduced-motion`.
- [ ] Sin JavaScript, el contenido sigue visible y navegable.
- [ ] No hay overflow horizontal en desktop ni Pixel 5.
- [ ] Se conservan textos, datos comerciales, rutas, SEO, formularios, enlaces, logos originales y accesibilidad.
- [ ] `npm run quality` finaliza sin errores y sin cambios en los contratos E2E.

## Fuera de alcance

- WebGL, 3D, canvas, video de fondo, cursor personalizado o nuevas dependencias.
- Cambios de contenido, datos comerciales, rutas, formularios o estrategia SEO.
- Modificación de los logos originales de `public/assets/brand/`.
