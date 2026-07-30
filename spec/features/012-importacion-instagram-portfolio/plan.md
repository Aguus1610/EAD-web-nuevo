# 012 · Importación oficial de Instagram para portfolio — Plan

## Enfoque

Usar Instagram API with Instagram Login únicamente desde un comando local. La API entrega metadatos y URLs temporales; el importador descarga los medios a un área ignorada, genera un borrador no publicable y termina. La promoción a la colección `projects` continúa siendo editorial y manual.

## Flujo preparado

1. Configurar `INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_EXPECTED_USERNAME` y la versión fijada de API en `.env.local`.
2. Ejecutar `npm run instagram:import -- <url> [otra-url]`.
3. Consultar `/me`, validar la cuenta y recorrer `/<user-id>/media` con paginación.
4. Obtener `/<media-id>/children` cuando la publicación sea un carrusel.
5. Optimizar imágenes o portadas a WebP dentro de `.sync-temp/instagram-drafts/<shortcode>/`.
6. Guardar `source.json` y `draft.json` con trazabilidad y checks pendientes.
7. Redactar y confirmar una ficha por trabajo fuera del importador.
8. Copiar únicamente assets aprobados a `public/assets/projects/<slug>/` y crear el Markdown aprobado.

## Presentación preparada

- El índice y la portada admiten tarjeta con imagen y fecha.
- La ficha usa el primer medio aprobado como hero e imagen social.
- La narrativa ampliada se escribe en el cuerpo Markdown.
- La publicación original conserva permalink, caption, fecha, shortcode y media ID.
- Los Reels muestran portada local, enlace directo y carga consentida del embed oficial.
- Sitemap y JSON-LD incorporan automáticamente las fichas aprobadas.

## Seguridad y privacidad

- Los secretos nunca forman parte de argumentos CLI, logs, HTML o Git.
- El comando rechaza cuentas distintas a `INSTAGRAM_EXPECTED_USERNAME`.
- El contenido público sólo admite assets locales bajo `/assets/projects/`.
- La validación de lanzamiento detecta assets ausentes, CDN externos y media IDs duplicados.
- El visitante no se conecta con Instagram mientras no active un Reel.

## Riesgos pendientes

- Los tokens largos vencen a los 60 días y deben renovarse antes de expirar.
- Meta puede cambiar campos o versiones; la versión permanece fijada y debe revisarse al activar.
- El caption puede ser insuficiente para completar problema, intervención o resultado.
- Rostros, patentes, documentos y marcas de clientes requieren revisión humana.
