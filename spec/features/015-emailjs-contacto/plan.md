# 015 · Envío de consultas con EmailJS — Plan

## Enfoque

Usar el SDK oficial `@emailjs/browser` en el script del formulario. El SDK construye el payload aceptado por la API (`lib_version`, `user_id`, `service_id`, `template_id` y `template_params`) y expone errores HTTP tipados mediante `EmailJSResponseStatus`. La clave pública, el servicio y la plantilla se centralizan en `src/data/site.ts`.

## Archivos afectados

- `src/data/site.ts` — configuración `emailJs` y retiro de `contactFormEndpoint`.
- `src/lib/contact.ts` — `EmailJsTemplateParams` y `createEmailJsParams`; escape HTML y Reply-To.
- `src/components/sections/QuoteForm.astro` — envío con SDK, timeout, errores, copia de privacidad y fallback sin JavaScript.
- `src/lib/contact.test.ts` — parámetros, fallbacks, escape y credenciales.
- `tests/e2e/site.spec.ts` — mock de `api.emailjs.com`, preflight CORS, éxito, errores, timeout, red y sin JavaScript.
- `package.json` / `package-lock.json` — dependencia `@emailjs/browser`.
- Documentación: `AGENTS.md`, `spec/release.md`, `spec/constitution/tech-stack.md`, `spec/constitution/roadmap.md`, `spec/analytics.md`, `spec/features/008-contacto-presupuesto/` y `spec/features/013-identidad-visual-portfolio/spec.md`.

## Decisiones

- **SDK oficial en lugar de fetch manual** — evita replicar `lib_version` y permite distinguir errores de EmailJS de fallos de red. El paquete es pequeño y el presupuesto JS sigue holgado.
- **Credenciales públicas en `site.ts`** — la public key está diseñada para el navegador; no hay secretos de servidor. La protección real se configura con orígenes permitidos y límites en EmailJS.
- **Variables planas y fallbacks** — la plantilla no depende de condicionales; los campos opcionales vacíos llegan como “No informado”.
- **Escape HTML** — los valores del usuario se escapan antes de entrar a la plantilla HTML para evitar marcado no deseado.
- **Timeout con `Promise.race`** — el SDK no expone `AbortSignal`; se conserva el límite de 12 s y se ignora una respuesta posterior.
- **Sin JavaScript no hay correo** — se oculta el botón de envío y se ofrecen los canales directos; no se simula un envío.

## Riesgos

- Límites y cuota del plan de EmailJS; el estado 429 se informa y se ofrecen alternativas.
- Restricciones de origen mal configuradas en EmailJS; requieren verificación en el panel.
- Diferencias entre los nombres de variables de la plantilla y `createEmailJsParams`; se documentan y se cubren con tests.
- La clave pública es visible; no debe habilitarse ninguna clave privada en el cliente.

## Verificación

- `npm run typecheck`
- `npm test`
- `npm run build`
- `npm run check:build`
- `npm run validate:launch`
- `npm run test:e2e`
- Consulta sintética manual en EmailJS antes de considerar cerrada la verificación operativa.
