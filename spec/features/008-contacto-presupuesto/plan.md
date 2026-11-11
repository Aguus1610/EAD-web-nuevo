# 008 · Contacto y solicitud de presupuesto — Plan

## Enfoque

Implementar un formulario cliente con validación tipada, envío por correo mediante Formspree y generación de URL de WhatsApp. Mantener siempre canales alternativos y mostrar una confirmación únicamente después de una respuesta válida del servicio. La ubicación se abrirá mediante un enlace externo explícito para proteger rendimiento y privacidad.

## Implementación

1. Completar y validar los campos críticos de `src/data/site.ts` antes del lanzamiento.
2. Definir `QuoteRequest` y validadores puros en `src/lib/contact.ts`.
3. Implementar `ContactCard.astro`, `BusinessHours.astro`, `LocationLink.astro` y el componente interactivo `QuoteForm`.
4. Crear `src/pages/contacto.astro` con introducción, canales, formulario, aclaraciones y ubicación.
5. Generar mensajes contextualizados por origen, servicio, producto o proyecto cuando esos parámetros existan.
6. Implementar estados de validación, envío, éxito y error, además de apertura de WhatsApp, copia de mensaje y fallback de correo.
7. Añadir tests unitarios de codificación y Playwright para teclado, errores, móvil y destinos reales, interceptando Formspree y WhatsApp para impedir envíos automatizados.

## Decisiones

- **WhatsApp como transferencia, no como backend** — evita almacenar datos y utiliza un canal comercial habitual.
- **Formspree como servicio de entrega aprobado** — permite enviar desde GitHub Pages sin exponer credenciales de correo en el navegador.
- **Correo compatible con el plan Free** — usar asunto y cuerpo de texto estructurados; las plantillas HTML personalizadas requieren Formspree Business y quedan fuera del alcance actual.
- **Éxito basado en respuesta real** — la interfaz confirma que Formspree aceptó la consulta para procesarla; no afirma entrega en Gmail sin verificación operativa.
- **Sin carga automática de mapa** — mejora privacidad y rendimiento; el usuario decide abrir el proveedor externo.
- **Fallback visible** — ningún fallo de una aplicación externa debe dejar al visitante sin forma de contacto.
- **Campos breves y relevantes** — se descarta un formulario técnico extenso que aumente abandono.

## Riesgos

- **Número de WhatsApp no confirmado** — tratarlo como bloqueo de producción y no renderizar enlaces inválidos.
- **Mensajes demasiado largos** — limitar campos, resumir etiquetas y probar URLs en navegadores móviles.
- **Confusión entre solicitud y presupuesto** — incluir aclaración visible antes del envío y en el mensaje generado.
- **Dependencia de un tercero** — conservar WhatsApp, correo y teléfono como alternativas visibles ante cualquier fallo.
- **Procesamiento externo explícito** — informar que Formspree puede almacenar la consulta y que WhatsApp procesa el mensaje cuando el usuario abre ese canal.
