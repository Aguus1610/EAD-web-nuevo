# Revisión de accesibilidad

## Automatización

- Playwright recorre todas las rutas en escritorio y móvil.
- Se comprueba un único `h1`, ausencia de overflow horizontal, landmarks, etiquetas de formulario,
  texto alternativo y dimensiones de imágenes.
- Los encabezados fotográficos priorizan la imagen crítica; el resto usa carga diferida, y los iconos técnicos decorativos quedan fuera del árbol accesible.
- El formulario enfoca el primer error y comunica mensajes mediante regiones `aria-live`.
- La etiqueta y el teclado del dato de contacto se adaptan al canal elegido, y la validación nativa impide un envío incompleto cuando JavaScript no está disponible.
- El menú móvil mantiene `aria-expanded`, responde a `Escape` y devuelve el foco al disparador.
- El enlace “Saltar al contenido” es el primer destino de teclado.

## Revisión manual realizada

- Navegación completa con teclado en inicio, productos y contacto.
- Apertura y cierre del menú móvil sin puntero.
- Lectura secuencial del formulario, errores y alternativas de contacto.
- Comprobación de foco visible y contraste funcional en fondos claros y oscuros.

Repetir esta revisión cuando cambien navegación, formularios, colores o componentes interactivos.
