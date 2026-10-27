# 015 · Envío de consultas con EmailJS — Tareas

- [x] Instalar y evaluar el SDK oficial `@emailjs/browser`.
- [x] Centralizar `serviceId`, `templateId` y `publicKey` en `src/data/site.ts`.
- [x] Retirar el endpoint y el flujo de Formspree.
- [x] Crear `EmailJsTemplateParams` y `createEmailJsParams` con fallbacks y Reply-To.
- [x] Escapar valores del usuario antes de enviarlos a la plantilla HTML.
- [x] Enviar con EmailJS desde el formulario, con timeout y estados de error diferenciados.
- [x] Actualizar consentimiento, privacidad y fallback sin JavaScript.
- [x] Actualizar tests unitarios y e2e, incluyendo preflight CORS y `api.emailjs.com`.
- [x] Actualizar documentación, roadmap, release y AGENTS.
- [ ] Verificar en el panel de EmailJS destino, plantilla, orígenes permitidos y una consulta sintética.
- [x] Ejecutar `npm run quality` completo y cerrar la feature.
- [x] Gate final: typecheck y lint 0 errores, 30 unitarios, 11 páginas, presupuestos OK, 58 e2e aprobados (2 omitidos).
