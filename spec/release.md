# Publicación y operación

## Configuración inicial

1. En GitHub, abrir **Settings > Pages** y seleccionar **GitHub Actions** como fuente.
2. Verificar que la rama principal se llame `main`.
3. Confirmar el entorno `github-pages` y la URL `https://aguus1610.github.io/EAD-web-nuevo/`.

## Antes de publicar

1. Ejecutar `npm ci`.
2. Ejecutar `npx playwright install chromium` si el navegador no está instalado.
3. Ejecutar `npm run quality`.
4. Confirmar datos de contacto, relación comercial, logos y permisos de imágenes.
5. Confirmar que cada proyecto tenga `publicationApproved: true`.
6. Confirmar en Formspree que `adm201364@gmail.com` esté verificado, la acción de correo activa y el dominio `aguus1610.github.io` autorizado.
7. Si existen proyectos provenientes de Instagram, confirmar que no contengan URLs CDN externas, que sus assets sean locales y que `publicationApproved` esté validado.

## Después del despliegue

1. Abrir inicio, un servicio, productos, trabajos y contacto sobre HTTPS.
2. Probar WhatsApp, teléfono, correo, Instagram y Google Maps.
3. Revisar `sitemap.xml`, `robots.txt`, canonical y 404.
4. Confirmar que los assets carguen bajo `/EAD-web-nuevo/`.
5. Realizar una única consulta sintética por Formspree, confirmar su recepción en Gmail y eliminarla según la política operativa acordada.
6. Si una ficha incluye Reel, comprobar que Instagram no reciba solicitudes antes de pulsar “Cargar Reel desde Instagram”.

Última verificación: 23 de julio de 2026. Workflow, HTTPS, inicio, contacto, sitemap y robots
respondieron correctamente en `https://aguus1610.github.io/EAD-web-nuevo/`.

GitHub Pages gestiona HTTPS y cache CDN. No permite configurar headers HTTP personalizados; cualquier
requisito futuro de headers deberá evaluarse antes de cambiar de plataforma.

## Rollback

1. Identificar el último commit publicado que pasó el workflow.
2. Revertir el commit defectuoso mediante un commit nuevo, sin reescribir historial.
3. Esperar el workflow de `main` y repetir la verificación posterior.
4. Si el despliegue sigue fallando, volver a ejecutar el workflow exitoso desde GitHub Actions.
