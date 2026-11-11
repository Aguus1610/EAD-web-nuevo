# 015 · Tema claro y oscuro

**Estado:** implementada

## Qué hace

Agrega un selector de tema claro/oscuro en el header, con persistencia local y preferencia inicial del sistema. El tema oscuro adapta superficies, tipografía, bordes, formularios, navegación y estados sin cambiar el contenido comercial ni la identidad cromática.

## Por qué

La web tiene una dirección editorial con bloques claros y bloques navy. Un tema oscuro completo permite leerla cómodamente en contextos de poca luz y da una alternativa visual coherente con la marca, sin perder el amarillo, el azul ni los logos originales.

## Criterios de aceptación

- [x] El header muestra un control accesible para cambiar entre tema claro y oscuro.
- [x] La preferencia se guarda y se restaura al navegar o recargar.
- [x] Sin preferencia guardada, se respeta `prefers-color-scheme`; sin JavaScript queda el tema claro.
- [x] El tema oscuro cubre home, empresa, servicios, productos, trabajos, contacto, 404, formularios y menú móvil.
- [x] Los logos se muestran en su variante correcta; no se recolorean ni se recrean.
- [x] Los contrastes de texto, bordes, foco y controles se mantienen legibles.
- [x] No hay overflow horizontal nuevo en desktop ni Pixel 5.
- [x] `npm run quality` finaliza sin errores.
- [x] Los cambios quedan commiteados y publicados en la rama `main` del repositorio.

## Fuera de alcance

- Temas por sección, editor de colores, modo alto contraste o temas de terceros.
- Cambios de contenido, rutas, formularios, SEO o dependencias.
- Recolorear, recortar o recrear los logos de `public/assets/brand/`.
