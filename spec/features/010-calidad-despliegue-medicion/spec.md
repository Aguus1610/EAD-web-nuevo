# 010 · Calidad, despliegue y medición

**Estado:** implementada

## Qué hace

Prepara la web para producción mediante pruebas completas, auditoría de accesibilidad y rendimiento, validación de contenido, integración continua, configuración de dominio y una medición de conversiones respetuosa de la privacidad. Define además un checklist de lanzamiento y operación.

## Por qué

Una web profesional no termina cuando “se ve bien”. Debe compilar de forma reproducible, responder en distintos dispositivos, mantener enlaces válidos, proteger datos, cargar rápido y permitir detectar problemas después de publicar.

## Criterios de aceptación

- [ ] Typecheck, lint, tests unitarios, tests end-to-end y build se ejecutan automáticamente en cada cambio propuesto.
- [ ] Los recorridos críticos cubren inicio, navegación, servicio, producto, proyecto, contacto y generación de consulta.
- [ ] No existen errores críticos de accesibilidad automatizada y la revisión manual de teclado está documentada.
- [ ] Las páginas principales cumplen objetivos acordados de rendimiento, estabilidad visual y peso transferido en móvil.
- [ ] Todas las imágenes tienen dimensiones, formato, compresión y carga adecuados; el contenido inicial no depende de lazy loading.
- [ ] Se verifican HTTPS, canonical, sitemap, 404, favicon, manifestación de marca, redirects y variables de producción.
- [ ] Existe una política de medición definida; si se habilita analítica, es mínima, sin datos personales y conforme al consentimiento requerido.
- [ ] Los eventos de conversión distinguen clic a WhatsApp, teléfono, correo y apertura del formulario sin capturar el contenido de la consulta.
- [ ] El checklist de lanzamiento bloquea contactos vacíos, logos faltantes, contenido no aprobado y proyectos sin autorización.
- [ ] Existe un procedimiento simple de rollback y verificación posterior al despliegue.

## Fuera de alcance

- No se implementa monitoreo empresarial complejo, CRM ni atribución publicitaria multicanal.
- No se garantiza una puntuación fija de auditoría en todos los dispositivos o redes.
- No se habilita analítica de sesión, grabación de pantalla ni seguimiento de contenido ingresado en formularios.
