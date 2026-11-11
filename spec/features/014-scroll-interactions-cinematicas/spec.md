# 014 · Scroll interactions y microinteracciones

**Estado:** implementada

## Qué hace

Profundiza el motion de la dirección editorial con interacciones ligadas al scroll y al puntero: recorrido del hero con profundidad, títulos que se dibujan, imágenes que cambian su encuadre al desplazarse, foco de luz sobre módulos, botones magnéticos y navegación con transiciones más cuidadas.

## Por qué

La base visual de la feature 013 ya transmite escala y precisión, pero el movimiento todavía se concentra en apariciones puntuales. Esta capa agrega continuidad entre secciones, respuesta directa al desplazamiento y feedback de puntero para que el sitio se sienta vivo, técnico y profesional sin convertirse en una demo de efectos.

## Criterios de aceptación

- [x] El hero y los heroes internos tienen una salida ligada al scroll: el texto acompaña el desplazamiento, la imagen gana profundidad y la señal de explorar se desvanece.
- [x] La copia del hero entra escalonada después de su reveal, sin ocultar contenido sin JavaScript.
- [x] Las líneas e índices de los encabezados de sección se dibujan al entrar en pantalla y los índices tienen un desplazamiento sutil.
- [x] La galería del taller usa un encuadre ligado al scroll, sin deformar ni recortar información de las imágenes.
- [x] Los módulos de servicio responden al puntero con un foco técnico discreto; las imágenes acompañan el puntero en desktop.
- [x] Los botones principales tienen una respuesta magnética acotada, solo con puntero fino y sin afectar teclado.
- [x] La navegación desktop tiene subrayado animado y el menú móvil entra con una transición breve.
- [x] Todos los efectos se desactivan con `prefers-reduced-motion` y no dependen de JavaScript para mostrar contenido.
- [x] No hay overflow horizontal en desktop ni Pixel 5; se conservan los contratos E2E.
- [x] `npm run quality` finaliza sin errores.

## Fuera de alcance

- Scroll hijacking, scroll horizontal con contenido fuera del viewport, WebGL o canvas.
- Nuevas dependencias, reproducción automática de video, cursor personalizado o cambios de contenido.
- Cambios de rutas, datos comerciales, formularios, SEO o logos.
