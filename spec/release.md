# Publicación y operación

## Configuración inicial

1. En GitHub, abrir **Settings > Pages** y seleccionar **GitHub Actions** como fuente.
2. Verificar que la rama principal se llame `main`.
3. Confirmar el entorno `github-pages` y la URL `https://aguus1610.github.io/EAD-web-nuevo/`.

## Antes de publicar

1. Ejecutar `npm ci`.
2. Ejecutar `npx playwright install chromium` si el navegador no está instalado.
3. Ejecutar `npm run quality`.
4. Confirmar datos de contacto, relación comercial, logos, permisos de imágenes y que el catálogo vigente (014) no exponga rostros, patentes legibles ni documentos sensibles.
5. Verificar que `public/assets/workshop/` sólo contenga WebP derivados y que los originales permanezcan en `media-src/workshop/`, fuera del build.
6. Confirmar que cada proyecto tenga `publicationApproved: true`.
7. Confirmar en EmailJS que el servicio `service_oh4erk7`, la plantilla `template_ddtz01q` y la public key estén activos; que el destino sea `adm201364@gmail.com`; que el asunto use `{{subject}}`, Reply-To `{{reply_to}}` y que `aguus1610.github.io` esté autorizado como origen.
8. Si existen proyectos provenientes de Instagram, confirmar que no contengan URLs CDN externas, que sus assets sean locales y que `publicationApproved` esté validado.

## Después del despliegue

1. Abrir inicio, un servicio, productos, trabajos y contacto sobre HTTPS.
2. Probar WhatsApp, teléfono, correo, Instagram y Google Maps.
3. Revisar `sitemap.xml`, `robots.txt`, canonical y 404.
4. Confirmar que los assets carguen bajo `/EAD-web-nuevo/`.
5. Realizar una única consulta sintética por EmailJS, confirmar su recepción en Gmail y eliminarla según la política operativa acordada.
6. Verificar sin JavaScript que el botón de correo se oculte y que se ofrezcan WhatsApp, teléfono y correo directo.
7. Si una ficha incluye Reel, comprobar que Instagram no reciba solicitudes antes de pulsar “Cargar Reel desde Instagram”.

Última verificación: 23 de julio de 2026. Workflow, HTTPS, inicio, contacto, sitemap y robots
respondieron correctamente en `https://aguus1610.github.io/EAD-web-nuevo/`.

GitHub Pages gestiona HTTPS y cache CDN. No permite configurar headers HTTP personalizados; cualquier
requisito futuro de headers deberá evaluarse antes de cambiar de plataforma.

## Rollback

1. Identificar el último commit publicado que pasó el workflow.
2. Revertir el commit defectuoso mediante un commit nuevo, sin reescribir historial.
3. Esperar el workflow de `main` y repetir la verificación posterior.
4. Si el despliegue sigue fallando, volver a ejecutar el workflow exitoso desde GitHub Actions.
